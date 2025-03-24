import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "YogaAlign - Perfect Your Posture",
    short_name: "YogaAlign",
    description: "AI-powered yoga posture correction and training",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#14b8a6",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}

