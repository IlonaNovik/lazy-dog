"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Camera,
  Menu,
  Bell,
  User,
  Home,
  BookOpen,
  BarChart4,
  Info,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function MobileApp() {
  const [activeTab, setActiveTab] = useState("practice");

  return (
    <div className="flex flex-col min-h-screen bg-yoga-sand/30 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yoga-clay/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yoga-sage/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <header className="sticky top-0 z-40 w-full border-b border-yoga-sage/20 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="flex h-16 items-center px-4 justify-between">
          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-yoga-earth hover:text-yoga-terracotta hover:bg-yoga-terracotta/10 rounded-full"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 bg-white">
                <MobileSidebar />
              </SheetContent>
            </Sheet>
            <Link href="/mobile" className="flex items-center gap-2">
              <div className="relative w-8 h-8 overflow-visible">
                <div className="absolute inset-0 bg-yoga-clay rounded-full opacity-20 animate-pulse-slow"></div>
                <Image
                  src="/logo.svg"
                  alt="YogaAlign Logo"
                  width={32}
                  height={32}
                  className="relative z-10"
                />
              </div>
              <span className="font-medium text-lg text-yoga-earth">
                YogaAlign
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-yoga-earth hover:text-yoga-terracotta hover:bg-yoga-terracotta/10 rounded-full"
            >
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-yoga-earth hover:text-yoga-terracotta hover:bg-yoga-terracotta/10 rounded-full"
            >
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-6 relative z-10">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-yoga-earth/80 hover:text-yoga-earth transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>

        <Tabs defaultValue="poses" className="mb-8">
          <TabsList className="grid w-full grid-cols-3 bg-white/50 backdrop-blur-sm rounded-full p-1 border border-yoga-sage/20">
            <TabsTrigger
              value="poses"
              className="rounded-full data-[state=active]:bg-yoga-terracotta data-[state=active]:text-white"
            >
              Poses
            </TabsTrigger>
            <TabsTrigger
              value="sequences"
              className="rounded-full data-[state=active]:bg-yoga-sage data-[state=active]:text-white"
            >
              Sequences
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="rounded-full data-[state=active]:bg-yoga-sky data-[state=active]:text-white"
            >
              Favorites
            </TabsTrigger>
          </TabsList>

          <TabsContent value="poses" className="mt-6 space-y-6">
            <PoseCard
              title="Warrior II"
              sanskritName="Virabhadrasana II"
              difficulty="Beginner"
              imageUrl="/placeholder.svg?height=300&width=400"
              color="terracotta"
            />

            <PoseCard
              title="Downward-Facing Dog"
              sanskritName="Adho Mukha Svanasana"
              difficulty="Beginner"
              imageUrl="/placeholder.svg?height=300&width=400"
              color="sage"
            />

            <PoseCard
              title="Tree Pose"
              sanskritName="Vrksasana"
              difficulty="Intermediate"
              imageUrl="/placeholder.svg?height=300&width=400"
              color="sky"
            />
          </TabsContent>

          <TabsContent value="sequences" className="mt-6 space-y-6">
            <div className="relative group">
              {/* Card background with rotation for uniqueness */}
              <div className="absolute inset-0 bg-white rounded-[1.5rem] shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 -rotate-1 transform"></div>

              {/* Card content */}
              <div className="relative p-5 rotate-1 transform">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-yoga-sage/10 text-yoga-moss flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2v4"></path>
                      <path d="M12 18v4"></path>
                      <path d="m4.93 4.93 2.83 2.83"></path>
                      <path d="m16.24 16.24 2.83 2.83"></path>
                      <path d="M2 12h4"></path>
                      <path d="M18 12h4"></path>
                      <path d="m4.93 19.07 2.83-2.83"></path>
                      <path d="m16.24 7.76 2.83-2.83"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-yoga-earth">
                      Morning Flow
                    </h3>
                    <p className="text-xs text-yoga-earth/60">
                      15 min • 8 poses
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <Badge className="bg-yoga-sage/10 text-yoga-moss border-none rounded-full px-3">
                    Beginner
                  </Badge>
                  <Button
                    size="sm"
                    className="bg-yoga-moss hover:bg-yoga-moss/90 text-white rounded-full"
                  >
                    Start
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative group">
              {/* Card background with rotation for uniqueness */}
              <div className="absolute inset-0 bg-white rounded-[1.5rem] shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 rotate-1 transform"></div>

              {/* Card content */}
              <div className="relative p-5 -rotate-1 transform">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-yoga-terracotta/10 text-yoga-terracotta flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-yoga-earth">
                      Evening Relaxation
                    </h3>
                    <p className="text-xs text-yoga-earth/60">
                      20 min • 10 poses
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <Badge className="bg-yoga-terracotta/10 text-yoga-terracotta border-none rounded-full px-3">
                    All Levels
                  </Badge>
                  <Button
                    size="sm"
                    className="bg-yoga-terracotta hover:bg-yoga-terracotta/90 text-white rounded-full"
                  >
                    Start
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="favorites" className="mt-6">
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-yoga-sky/10 flex items-center justify-center text-yoga-sky mb-4">
                <Info className="h-8 w-8" />
              </div>
              <h3 className="font-medium text-lg mb-2 text-yoga-earth">
                No favorites yet
              </h3>
              <p className="text-yoga-earth/70 mb-6 max-w-xs mx-auto">
                Save your favorite poses and sequences for quick access
              </p>
              <Button
                variant="outline"
                className="border-yoga-sky text-yoga-sky hover:bg-yoga-sky/10 rounded-full px-6"
              >
                Browse Poses
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12">
          <h2 className="text-xl font-bold text-yoga-earth mb-6 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-yoga-terracotta"></div>
            Continue Practice
          </h2>

          <div className="relative">
            {/* Card background with rotation for uniqueness */}
            <div className="absolute inset-0 bg-white rounded-[2rem] shadow-lg -rotate-1 transform"></div>

            {/* Card content */}
            <div className="relative rotate-1 transform overflow-hidden rounded-xl">
              <div className="relative h-[200px]">
                <div className="absolute inset-0 bg-gradient-to-br from-yoga-terracotta/20 to-yoga-sage/20 mix-blend-overlay z-10"></div>
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  fill
                  alt="Continue practice"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yoga-earth/80 to-transparent flex flex-col justify-end p-6 z-20">
                  <h3 className="text-white font-medium text-lg">
                    Evening Cool Down
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    Continue where you left off
                  </p>
                  <Button className="bg-white text-yoga-terracotta hover:bg-white/90 rounded-full w-full">
                    Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="sticky bottom-0 border-t border-yoga-sage/20 bg-white/80 backdrop-blur">
        <nav className="flex justify-around items-center h-16">
          <Button
            variant="ghost"
            onClick={() => setActiveTab("home")}
            className={`flex flex-col h-full pt-3 text-xs rounded-none gap-1 ${activeTab === "home" ? "text-yoga-terracotta" : "text-yoga-earth/70"}`}
          >
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Button>
          <Button
            variant="ghost"
            onClick={() => setActiveTab("practice")}
            className={`flex flex-col h-full pt-3 text-xs rounded-none gap-1 ${activeTab === "practice" ? "text-yoga-terracotta" : "text-yoga-earth/70"}`}
          >
            <Camera className="h-5 w-5" />
            <span>Practice</span>
          </Button>
          <Button
            variant="ghost"
            onClick={() => setActiveTab("learn")}
            className={`flex flex-col h-full pt-3 text-xs rounded-none gap-1 ${activeTab === "learn" ? "text-yoga-terracotta" : "text-yoga-earth/70"}`}
          >
            <BookOpen className="h-5 w-5" />
            <span>Learn</span>
          </Button>
          <Button
            variant="ghost"
            onClick={() => setActiveTab("progress")}
            className={`flex flex-col h-full pt-3 text-xs rounded-none gap-1 ${activeTab === "progress" ? "text-yoga-terracotta" : "text-yoga-earth/70"}`}
          >
            <BarChart4 className="h-5 w-5" />
            <span>Progress</span>
          </Button>
        </nav>
      </footer>
    </div>
  );
}

function PoseCard({ title, sanskritName, difficulty, imageUrl, color }) {
  const colorMap = {
    terracotta: {
      bg: "bg-yoga-terracotta/10",
      text: "text-yoga-terracotta",
      button: "bg-yoga-terracotta hover:bg-yoga-terracotta/90 text-white",
      outline:
        "border-yoga-terracotta text-yoga-terracotta hover:bg-yoga-terracotta/10",
    },
    sage: {
      bg: "bg-yoga-sage/10",
      text: "text-yoga-moss",
      button: "bg-yoga-moss hover:bg-yoga-moss/90 text-white",
      outline: "border-yoga-sage text-yoga-moss hover:bg-yoga-sage/10",
    },
    sky: {
      bg: "bg-yoga-sky/10",
      text: "text-yoga-sky",
      button: "bg-yoga-sky hover:bg-yoga-sky/90 text-white",
      outline: "border-yoga-sky text-yoga-sky hover:bg-yoga-sky/10",
    },
  };

  const colors = colorMap[color] || colorMap.terracotta;

  return (
    <div className="relative group">
      {/* Card background with rotation for uniqueness */}
      <div className="absolute inset-0 bg-white rounded-[2rem] shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 rotate-1 transform"></div>

      {/* Card content */}
      <div className="relative -rotate-1 transform">
        <div className="relative h-[180px] rounded-t-xl overflow-hidden">
          <div
            className={`absolute inset-0 ${colors.bg} mix-blend-overlay z-10 opacity-40`}
          ></div>
          <Image
            src={imageUrl || "/placeholder.svg"}
            fill
            alt={title}
            className="object-cover"
          />
        </div>
        <div className="p-5">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-medium text-yoga-earth">{title}</h3>
              <p className="text-xs text-yoga-earth/60">{sanskritName}</p>
            </div>
            <Badge
              className={`${colors.bg} ${colors.text} border-none rounded-full px-3`}
            >
              {difficulty}
            </Badge>
          </div>
          <div className="flex justify-between items-center mt-4">
            <Button
              variant="outline"
              size="sm"
              className={`${colors.outline} rounded-full`}
            >
              Details
            </Button>
            <Button size="sm" className={`gap-2 ${colors.button} rounded-full`}>
              <Camera className="h-4 w-4" />
              Practice
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileSidebar() {
  return (
    <div className="p-6 space-y-6 bg-white h-full relative">
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light pointer-events-none"></div>

      <div className="flex items-center gap-3 mb-8">
        <div className="relative w-10 h-10 overflow-visible">
          <div className="absolute inset-0 bg-yoga-clay rounded-full opacity-20 animate-pulse-slow"></div>
          <Image
            src="/logo.svg"
            alt="YogaAlign Logo"
            width={40}
            height={40}
            className="relative z-10"
          />
        </div>
        <span className="font-medium text-xl text-yoga-earth">YogaAlign</span>
      </div>

      <nav className="space-y-2">
        <Link
          href="/mobile"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium bg-yoga-terracotta/10 text-yoga-terracotta"
        >
          <Home className="h-5 w-5" />
          Home
        </Link>
        <Link
          href="/mobile/lessons"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-yoga-earth/70 hover:bg-yoga-sage/10 hover:text-yoga-moss"
        >
          <BookOpen className="h-5 w-5" />
          Lessons
        </Link>
        <Link
          href="/mobile/progress"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-yoga-earth/70 hover:bg-yoga-sky/10 hover:text-yoga-sky"
        >
          <BarChart4 className="h-5 w-5" />
          Progress
        </Link>
      </nav>

      <div className="pt-8 border-t border-yoga-sage/20 mt-8">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-yoga-earth/70 hover:bg-yoga-terracotta/10 hover:text-yoga-terracotta"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Website
        </Link>
      </div>
    </div>
  );
}
