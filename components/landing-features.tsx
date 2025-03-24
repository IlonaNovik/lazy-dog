import { ShieldCheck, Camera, ThumbsUp, BookOpen, LineChart, Smartphone } from "lucide-react"
import Image from "next/image"

export function LandingFeatures() {
  return (
    <section className="py-24 md:py-32 relative" id="features">
      {/* Background elements */}
      <div className="absolute inset-0 bg-yoga-sage/5"></div>
      <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-yoga-clay/10 rounded-full blur-3xl"></div>
      <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-yoga-sky/10 rounded-full blur-3xl"></div>

      <div className="container relative">

        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Camera className="h-6 w-6" />}
            title="Real-Time Posture Analysis"
            description="Get instant feedback on your alignment using our advanced computer vision technology"
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
        </div>

        {/* Feature highlight */}
        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-yoga-sand/50 rounded-[2rem] -rotate-1 transform"></div>
          <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-xl p-8 md:p-12 rotate-1 transform">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yoga-clay/10 text-yoga-terracotta rounded-full text-sm font-medium border border-yoga-clay/20 mb-6">
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
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                  </svg>
                  Featured
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-yoga-earth mb-4">Personalized Yoga Journey</h3>
                <p className="text-yoga-earth/70 mb-6">
                  YogaAlign adapts to your unique body and practice level, providing customized guidance that evolves as
                  you progress. Our AI understands your specific challenges and helps you overcome them.
                </p>
                <ul className="space-y-3">
                  {[
                    "Adapts to your flexibility and strength levels",
                    "Suggests modifications based on your body's needs",
                    "Tracks improvements and adjusts recommendations",
                    "Celebrates your progress with achievement milestones",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-yoga-clay/20 flex items-center justify-center text-yoga-terracotta mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-yoga-earth/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yoga-clay/20 to-yoga-sage/20 rounded-xl"></div>
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=600&width=450"
                    fill
                    alt="Personalized yoga journey"
                    className="object-cover"
                  />
                </div>
                {/* Floating UI element */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-yoga-sand/50 max-w-[200px]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-yoga-sage/20 flex items-center justify-center text-yoga-moss">
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
                    </div>
                    <div className="text-yoga-earth font-medium text-sm">Progress Update</div>
                  </div>
                  <p className="text-yoga-earth/70 text-xs">
                    Your downward dog alignment has improved by 23% this month!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description, color }) {
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
      <div className="relative p-8 h-full">
        <div
          className={`w-12 h-12 rounded-2xl ${colorMap[color]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-yoga-earth mb-3">{title}</h3>
        <p className="text-yoga-earth/70">{description}</p>
      </div>

      {/* Decorative corner accent */}
      <div className={`absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-[1.5rem]`}>
        <div
          className={`absolute top-0 right-0 w-4 h-4 rounded-full -translate-x-4 translate-y-4 ${colorMap[color].split(" ")[0]}`}
        ></div>
      </div>
    </div>
  )
}

