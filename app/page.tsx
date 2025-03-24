import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LandingFeatures } from "@/components/landing-features"
import { LandingHero } from "@/components/landing-hero"
import { LandingFooter } from "@/components/landing-footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-yoga-sand/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-yoga-clay/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yoga-sage/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

      <header className="relative z-10 py-6">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-visible">
              <div className="absolute inset-0 bg-yoga-clay rounded-full opacity-20 animate-pulse-slow"></div>
              <Image src="/logo.svg" alt="YogaAlign Logo" width={40} height={40} className="relative z-10" />
            </div>
            <span className="font-medium text-xl text-yoga-earth">YogaAlign</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-yoga-earth/80 hover:text-yoga-earth transition-colors relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yoga-clay group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#how-it-works"
              className="text-yoga-earth/80 hover:text-yoga-earth transition-colors relative group"
            >
              How It Works
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yoga-clay group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#testimonials"
              className="text-yoga-earth/80 hover:text-yoga-earth transition-colors relative group"
            >
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yoga-clay group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        <LandingHero />
        <LandingFeatures />
      </main>

      <LandingFooter />
    </div>
  )
}

