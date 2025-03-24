import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Smartphone, Laptop, CheckCircle2 } from "lucide-react";

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-yoga-sand/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yoga-clay/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yoga-sage/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <div className="container max-w-5xl py-16 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-yoga-earth/80 hover:text-yoga-earth transition-colors mb-12"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yoga-sage/10 text-yoga-moss rounded-full text-sm font-medium border border-yoga-sage/20 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            Get Started
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yoga-earth mb-6">
            Begin Your <span className="text-yoga-terracotta">YogaAlign</span>{" "}
            Journey
          </h1>
          <p className="text-yoga-earth/70 text-lg max-w-2xl mx-auto">
            Choose how you'd like to experience YogaAlign and begin your path to
            improved yoga practice
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative group">
            {/* Card background with rotation for uniqueness */}
            <div className="absolute inset-0 bg-white rounded-[2rem] shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 -rotate-1 transform"></div>

            {/* Card content */}
            <div className="relative p-8 md:p-10 h-full rotate-1 transform">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-yoga-clay/10 text-yoga-terracotta flex items-center justify-center">
                  <Smartphone className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-yoga-terracotta">
                  Mobile App
                </h2>
              </div>

              <div className="relative h-[200px] mb-8 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yoga-clay/20 to-yoga-terracotta/10 mix-blend-overlay z-10"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  fill
                  alt="Mobile app screenshot"
                  className="object-cover"
                />
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Use your phone's camera for real-time feedback",
                  "Download sequences for offline practice",
                  "Set reminders and track your practice streaks",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-yoga-clay/20 flex items-center justify-center text-yoga-terracotta mt-0.5">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-yoga-earth/80">{item}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-yoga-terracotta hover:bg-yoga-terracotta/90 text-white rounded-full py-6 text-base">
                Download App
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
                  className="ml-2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" x2="12" y1="15" y2="3"></line>
                </svg>
              </Button>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-[2rem] rotate-1 transform">
              <div className="absolute top-0 right-0 w-6 h-6 rounded-full -translate-x-6 translate-y-6 bg-yoga-clay/20"></div>
            </div>
          </div>

          <div className="relative group">
            {/* Card background with rotation for uniqueness */}
            <div className="absolute inset-0 bg-white rounded-[2rem] shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 rotate-1 transform"></div>

            {/* Card content */}
            <div className="relative p-8 md:p-10 h-full -rotate-1 transform">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-yoga-sage/10 text-yoga-moss flex items-center justify-center">
                  <Laptop className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-yoga-moss">Web App</h2>
              </div>

              <div className="relative h-[200px] mb-8 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yoga-sage/20 to-yoga-sky/10 mix-blend-overlay z-10"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  fill
                  alt="Web app screenshot"
                  className="object-cover"
                />
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Larger screen for detailed pose visualization",
                  "Advanced analytics dashboard to track progress",
                  "Easily connect with external webcams",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-yoga-sage/20 flex items-center justify-center text-yoga-moss mt-0.5">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-yoga-earth/80">{item}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full bg-yoga-moss hover:bg-yoga-moss/90 text-white rounded-full py-6 text-base">
                Continue to Web App
              </Button>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-[2rem] -rotate-1 transform">
              <div className="absolute top-0 right-0 w-6 h-6 rounded-full -translate-x-6 translate-y-6 bg-yoga-sage/20"></div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-yoga-earth/60 mb-4">
            Both versions include a 14-day free trial. No credit card required.
          </p>
          <p>
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-yoga-terracotta hover:text-yoga-terracotta/80 font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
