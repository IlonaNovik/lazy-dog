"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Camera, Video, Pause, Play, Check } from "lucide-react";
import { WebappHeader } from "@/components/webapp-header";
import { WebappSidebar } from "@/components/webapp-sidebar";

export default function Webapp() {
  const [isCapturing, setIsCapturing] = useState(false);
  const [selectedPose, setSelectedPose] = useState("warrior2");
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Simulated pose feedback - in a real app this would come from a pose detection algorithm
  const poseFeedback = {
    warrior2: [
      {
        part: "arms",
        message: "Extend arms fully parallel to the floor",
        status: "warning",
      },
      {
        part: "front knee",
        message: "Bend front knee to 90 degrees",
        status: "error",
      },
      {
        part: "torso",
        message: "Keep torso centered and upright",
        status: "success",
      },
    ],
    downdog: [
      {
        part: "arms",
        message: "Press firmly through hands",
        status: "success",
      },
      {
        part: "legs",
        message: "Work towards straightening legs",
        status: "warning",
      },
      {
        part: "hips",
        message: "Lift hips high towards ceiling",
        status: "success",
      },
    ],
    tree: [
      {
        part: "standing foot",
        message: "Press firmly into the floor",
        status: "success",
      },
      {
        part: "knee",
        message: "Keep knee pointing to the side",
        status: "warning",
      },
      { part: "gaze", message: "Find a steady focal point", status: "success" },
    ],
  };

  const handleStartCapture = async () => {
    if (videoRef.current) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        videoRef.current.srcObject = stream;
        setIsCapturing(true);
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    }
  };

  const handleStopCapture = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      setIsCapturing(false);
    }
  };

  const toggleCapture = () => {
    if (isCapturing) {
      handleStopCapture();
    } else {
      handleStartCapture();
    }
  };

  useEffect(() => {
    return () => {
      // Clean up camera access when component unmounts
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-yoga-sand/30 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yoga-clay/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yoga-sage/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <WebappHeader />

      <div className="flex flex-1">
        <WebappSidebar />

        <main className="flex-1 p-4 md:p-8 relative z-10">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-yoga-earth/80 hover:text-yoga-earth transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-yoga-earth mb-2">
              Pose Practice
            </h1>
            <p className="text-yoga-earth/70">
              Select a pose and use your camera for real-time feedback
            </p>
          </div>

          <div className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Select value={selectedPose} onValueChange={setSelectedPose}>
                <SelectTrigger className="w-[240px] border-yoga-sage/30 bg-white rounded-xl">
                  <SelectValue placeholder="Select a pose" />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-xl border-yoga-sage/30">
                  <SelectItem value="warrior2">
                    Warrior II (Virabhadrasana II)
                  </SelectItem>
                  <SelectItem value="downdog">
                    Downward-Facing Dog (Adho Mukha Svanasana)
                  </SelectItem>
                  <SelectItem value="tree">Tree Pose (Vrksasana)</SelectItem>
                </SelectContent>
              </Select>

              <Button
                onClick={toggleCapture}
                variant={isCapturing ? "destructive" : "default"}
                className={`gap-2 rounded-full px-6 ${!isCapturing ? "bg-yoga-terracotta hover:bg-yoga-terracotta/90 text-white" : ""}`}
              >
                {isCapturing ? (
                  <>
                    <Pause className="h-4 w-4" />
                    Stop Camera
                  </>
                ) : (
                  <>
                    <Camera className="h-4 w-4" />
                    Start Camera
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Tabs defaultValue="camera">
                <TabsList className="mb-6 bg-white/50 backdrop-blur-sm rounded-full p-1 border border-yoga-sage/20">
                  <TabsTrigger
                    value="camera"
                    className="gap-2 rounded-full data-[state=active]:bg-yoga-terracotta data-[state=active]:text-white"
                  >
                    <Camera className="h-4 w-4" />
                    Live Camera
                  </TabsTrigger>
                  <TabsTrigger
                    value="tutorial"
                    className="gap-2 rounded-full data-[state=active]:bg-yoga-sage data-[state=active]:text-white"
                  >
                    <Video className="h-4 w-4" />
                    Tutorial
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="camera" className="mt-0">
                  <div className="relative">
                    {/* Card with rotation for uniqueness */}
                    <div className="absolute inset-0 bg-white rounded-[2rem] shadow-lg -rotate-1 transform"></div>

                    {/* Card content */}
                    <div className="relative p-4 rotate-1 transform">
                      <div className="aspect-video bg-yoga-clay/5 rounded-xl overflow-hidden flex items-center justify-center">
                        {isCapturing ? (
                          <video
                            ref={videoRef}
                            autoPlay
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-center p-6">
                            <div className="w-16 h-16 rounded-full bg-yoga-terracotta/10 flex items-center justify-center text-yoga-terracotta mx-auto mb-4">
                              <Camera className="h-8 w-8" />
                            </div>
                            <p className="text-yoga-earth/70">
                              Click "Start Camera" to begin pose analysis
                            </p>
                          </div>
                        )}
                        <canvas
                          ref={canvasRef}
                          className={`absolute inset-0 w-full h-full ${!isCapturing && "hidden"}`}
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="tutorial" className="mt-0">
                  <div className="relative">
                    {/* Card with rotation for uniqueness */}
                    <div className="absolute inset-0 bg-white rounded-[2rem] shadow-lg rotate-1 transform"></div>

                    {/* Card content */}
                    <div className="relative p-4 -rotate-1 transform">
                      <div className="aspect-video bg-yoga-sage/5 rounded-xl overflow-hidden flex items-center justify-center">
                        <div className="text-center p-6">
                          <div className="w-16 h-16 rounded-full bg-yoga-sage/10 flex items-center justify-center text-yoga-moss mx-auto mb-4">
                            <Play className="h-8 w-8" />
                          </div>
                          <p className="text-yoga-earth/70 mb-4">
                            Tutorial video for{" "}
                            {selectedPose === "warrior2"
                              ? "Warrior II"
                              : selectedPose === "downdog"
                                ? "Downward-Facing Dog"
                                : "Tree Pose"}
                          </p>
                          <Button
                            variant="outline"
                            className="gap-2 rounded-full border-yoga-sage text-yoga-moss hover:bg-yoga-sage/10"
                          >
                            <Play className="h-4 w-4" />
                            Play Tutorial
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-yoga-earth">
                  Pose Feedback
                </h2>
                <Badge className="font-normal bg-yoga-terracotta/10 text-yoga-terracotta border-none rounded-full px-4">
                  Real-time
                </Badge>
              </div>

              <div className="space-y-4">
                {poseFeedback[selectedPose]?.map((feedback, index) => {
                  const statusColors = {
                    success:
                      "bg-yoga-sage/10 border-yoga-sage/20 text-yoga-moss",
                    warning:
                      "bg-yoga-dawn/10 border-yoga-dawn/20 text-yoga-sunset",
                    error:
                      "bg-yoga-terracotta/10 border-yoga-terracotta/20 text-yoga-terracotta",
                  };

                  return (
                    <div
                      key={index}
                      className={`p-4 border rounded-xl bg-white ${statusColors[feedback.status]}`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 shrink-0 rounded-full p-1 
                          ${
                            feedback.status === "success"
                              ? "bg-yoga-sage/20"
                              : feedback.status === "warning"
                                ? "bg-yoga-dawn/20"
                                : "bg-yoga-terracotta/20"
                          }`}
                        >
                          <Check className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium">{feedback.part}</p>
                          <p className="text-sm text-yoga-earth/70">
                            {feedback.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8">
                <div className="relative">
                  {/* Card with rotation for uniqueness */}
                  <div className="absolute inset-0 bg-white rounded-[2rem] shadow-lg rotate-1 transform"></div>

                  {/* Card content */}
                  <div className="relative p-6 -rotate-1 transform">
                    <h3 className="font-medium text-yoga-earth mb-4 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-yoga-terracotta"></div>
                      Overall Score
                    </h3>
                    <div className="flex items-center mb-4">
                      <div className="h-4 flex-1 bg-yoga-sand/30 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-yoga-terracotta rounded-full"
                          style={{ width: "65%" }}
                        />
                      </div>
                      <span className="ml-4 font-medium text-yoga-terracotta">
                        65%
                      </span>
                    </div>
                    <p className="text-sm text-yoga-earth/70">
                      Great progress! Focus on your knee alignment to improve
                      your score.
                    </p>

                    {/* Decorative corner accent */}
                    <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden rounded-br-[2rem] -rotate-1 transform">
                      <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full -translate-x-4 -translate-y-4 bg-yoga-terracotta/10"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
