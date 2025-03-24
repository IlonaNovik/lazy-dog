import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Camera, ThumbsUp, BookOpen, LineChart, Smartphone } from "lucide-react"

export function LandingHero() {
  return (
    <section className="py-10 md:py-10 relative overflow-visible">
      {/* Decorative elements */}
      <div className="absolute -top-20 left-1/2 w-[600px] h-[600px] -translate-x-1/2 pointer-events-none opacity-10">
        <div className="w-full h-full bg-circles bg-no-repeat bg-contain animate-rotate-slow"></div>
      </div>

      <div className="container relative">
        <div className="grid md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-6 lg:col-span-5 space-y-8 relative z-10">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yoga-earth leading-tight">
              Exercises
            </h1>
          
            <FeatureCard
            icon={<Camera className="h-6 w-6" />}
            title="Real-Time Posture Analysis"
            color="terracotta"
          />
          <FeatureCard
            icon={<ThumbsUp className="h-6 w-6" />}
            title="Personalized Adjustments"
            description="Receive tailored suggestions to improve specific aspects of each pose"
            color="sage"
          />
          <FeatureCard
            icon={<BookOpen className="h-6 w-6" />}
            title="Guided Practice Sessions"
            description="Follow along with instructor-led routines optimized for your skill level"
            color="sky"
          />
          <FeatureCard
            icon={<LineChart className="h-6 w-6" />}
            title="Track Your Progress"
            description="Monitor your improvement over time with detailed analytics and insights"
            color="dawn"
          />
          <FeatureCard
            icon={<Smartphone className="h-6 w-6" />}
            title="Practice Anywhere"
            description="Use on any device with a camera - perfect for home, studio, or travel"
            color="stone"
          />
          <FeatureCard
            icon={<ShieldCheck className="h-6 w-6" />}
            title="Privacy-Focused"
            description="All processing happens on your device - your video never leaves your control"
            color="dusk"
          />

            {/* <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-yoga-terracotta hover:bg-yoga-terracotta/90 text-white rounded-full px-8 py-6 text-base"
              >
                <Link href="/get-started">Start Your Free Trial</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-yoga-sage text-yoga-moss hover:bg-yoga-sage/10 rounded-full px-8 py-6 text-base"
              >
                <Link href="/how-it-works">
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
                    className="mr-2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                  Watch How It Works
                </Link>
              </Button>
            </div> */}
          </div>

          <div className="md:col-span-6 lg:col-span-7 relative">
            {/* Decorative circles */}
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border-2 border-yoga-sage/20 border-dashed animate-rotate-slow pointer-events-none"></div>
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] rounded-full border-2 border-yoga-clay/20 border-dashed animate-rotate-slow pointer-events-none"
              style={{ animationDirection: "reverse" }}
            ></div> */}

            {/* Main image */}
            <div className="relative z-10 rounded-[2rem] overflow-hidden aspect-[4/3] shadow-xl animate-float">
              <div className="absolute inset-0 bg-gradient-to-tr from-yoga-clay/20 to-yoga-sage/20 mix-blend-overlay z-10"></div>
              <Image
                src="/placeholder.svg?height=800&width=1000"
                fill
                alt="Yoga posture analysis demonstration"
                className="object-cover"
                priority
              />

              {/* Floating UI elements */}
              {/* <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg z-20 border border-yoga-sand">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-yoga-clay/20 flex items-center justify-center text-yoga-terracotta">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
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
                    <div className="text-yoga-earth font-medium">Warrior II Pose</div>
                    <div className="text-yoga-earth/70 text-sm">Alignment score: 85%</div>
                  </div>
                </div>
                <div className="mt-3 h-2 bg-yoga-sand/30 rounded-full overflow-hidden">
                  <div className="h-full bg-yoga-terracotta w-[85%] rounded-full"></div>
                </div>
              </div>

              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg z-20 border border-yoga-sand">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-yoga-sage/20 flex items-center justify-center text-yoga-moss">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                  </div>
                  <div className="text-yoga-earth font-medium">Live Feedback</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


function FeatureCard({ icon, title, color }) {
  const colorMap = {
    terracotta: "bg-yoga-terracotta/10 text-yoga-terracotta border-yoga-terracotta/20",
    sage: "bg-yoga-sage/10 text-yoga-moss border-yoga-sage/20",
    sky: "bg-yoga-sky/10 text-yoga-sky border-yoga-sky/20",
    dawn: "bg-yoga-dawn/10 text-yoga-sunset border-yoga-dawn/20",
    stone: "bg-yoga-stone/10 text-yoga-stone border-yoga-stone/20",
    dusk: "bg-yoga-dusk/10 text-yoga-dusk border-yoga-dusk/20",
  }

  return (
    <div className="group relative">
      {/* Card background with slight rotation for uniqueness */}
      <div className="absolute inset-0 bg-white rounded-[1.5rem] shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1"></div>

      {/* Card content */}
      <div className="flex  items-center gap-4 relative p-8 h-full">
        <div
          className={`w-12 h-12 rounded-2xl ${colorMap[color]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-yoga-earth">{title}</h3>
      </div>
    </div>
  )
}
