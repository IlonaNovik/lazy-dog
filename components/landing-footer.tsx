import Image from "next/image"
import Link from "next/link"

export function LandingFooter() {
  return (
    <footer className="bg-yoga-earth text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-soft-light pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yoga-terracotta/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="container py-16 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-yoga-clay rounded-full opacity-30 animate-pulse-slow"></div>
                <Image src="/logo.svg" alt="YogaAlign Logo" width={40} height={40} className="relative z-10" />
              </div>
              <span className="font-medium text-xl">YogaAlign</span>
            </div>
            <p className="text-white/70 max-w-xs">
              Perfect your yoga practice with real-time AI guidance and personalized feedback.
            </p>
            <div className="flex gap-4">
              {["twitter", "facebook", "instagram", "youtube"].map((platform) => (
                <Link
                  key={platform}
                  href={`#${platform}`}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <span className="sr-only">{platform}</span>
                  <div className="w-5 h-5 bg-white/90 rounded-sm"></div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-yoga-clay"></div>
              Product
            </h3>
            <ul className="space-y-4">
              {["Features", "Pricing", "Testimonials", "FAQ"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-white transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yoga-clay group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-yoga-clay"></div>
              Company
            </h3>
            <ul className="space-y-4">
              {["About", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-white transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yoga-clay group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-yoga-clay"></div>
              Legal
            </h3>
            <ul className="space-y-4">
              {["Terms", "Privacy", "Cookies", "Licenses"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-white transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yoga-clay group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} YogaAlign. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

