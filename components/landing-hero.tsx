import {
  ShieldCheck,
  PersonStanding,
  ThumbsUp,
  BookOpen,
  LineChart,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export function LandingHero() {
  return (
    <section className="py-10 md:py-10 relative overflow-visible">
      <div className="absolute -top-20 left-1/2 w-[600px] h-[600px] -translate-x-1/2 pointer-events-none opacity-10">
        <div className="w-full h-full bg-circles bg-no-repeat bg-contain animate-rotate-slow"></div>
      </div>

      <div className="container relative">
        <div className="flex w-full gap-4 items-center">
          <div className="mx-auto m-6 max-w-[600px]">
            <div className="space-y-8 w-full">
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yoga-earth leading-tight mb-8">
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
              color="sage"
            />
            <FeatureCard
              icon={<BookOpen className="h-6 w-6" />}
              title="Guided Practice Sessions"
              color="sky"
            />
            <FeatureCard
              icon={<LineChart className="h-6 w-6" />}
              title="Track Your Progress"
              color="dawn"
            />
            <FeatureCard
              icon={<Smartphone className="h-6 w-6" />}
              title="Practice Anywhere"
              color="stone"
            />
            <FeatureCard
              icon={<ShieldCheck className="h-6 w-6" />}
              title="Privacy-Focused"
              color="dusk"
            />
          </div>
            </div>
           
        </div>
      </div>
    </section>
  );
}

const colorMap = {
  terracotta:
    "bg-yoga-terracotta/10 text-yoga-terracotta border-yoga-terracotta/20",
  sage: "bg-yoga-sage/10 text-yoga-moss border-yoga-sage/20",
  sky: "bg-yoga-sky/10 text-yoga-sky border-yoga-sky/20",
  dawn: "bg-yoga-dawn/10 text-yoga-sunset border-yoga-dawn/20",
  stone: "bg-yoga-stone/10 text-yoga-stone border-yoga-stone/20",
  dusk: "bg-yoga-dusk/10 text-yoga-dusk border-yoga-dusk/20",
};

function FeatureCard({ icon, title, color }: {
  icon: ReactNode,
  title: string,
  color: keyof typeof colorMap
}) {
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
