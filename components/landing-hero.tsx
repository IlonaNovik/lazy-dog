import {
  ShieldCheck,
  PersonStanding,
  ThumbsUp,
  BookOpen,
  LineChart,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

export function LandingHero() {
  return (
    <section className="py-10 md:py-10 relative overflow-visible">
      <div className="absolute -top-20 left-1/2 w-[600px] h-[600px] -translate-x-1/2 pointer-events-none opacity-10">
        <div className="w-full h-full bg-circles bg-no-repeat bg-contain animate-rotate-slow"></div>
      </div>

      <div className="container relative">
        <div className="grid md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-6 lg:col-span-5 space-y-8 relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yoga-earth leading-tight">
              Exercises
            </h1>
            <Link href="/chaturanga/tutorial">
              <FeatureCard
                icon={<PersonStanding className="h-6 w-6" />}
                title="Chaturanga"
                color="terracotta"
              />
            </Link>
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
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, color }) {
  const colorMap = {
    terracotta:
      "bg-yoga-terracotta/10 text-yoga-terracotta border-yoga-terracotta/20",
    sage: "bg-yoga-sage/10 text-yoga-moss border-yoga-sage/20",
    sky: "bg-yoga-sky/10 text-yoga-sky border-yoga-sky/20",
    dawn: "bg-yoga-dawn/10 text-yoga-sunset border-yoga-dawn/20",
    stone: "bg-yoga-stone/10 text-yoga-stone border-yoga-stone/20",
    dusk: "bg-yoga-dusk/10 text-yoga-dusk border-yoga-dusk/20",
  };

  return (
    <div className="group relative">
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
  );
}
