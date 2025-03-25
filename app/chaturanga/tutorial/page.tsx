"use client";

import { useEffect, useRef, useState } from "react";
import { DogIcon } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { useConversation } from "@11labs/react";
import Image from "next/image";
import { MicrophoneAnimation } from "../microfone-animation";

export default function Chaturanga() {
  const router = useRouter();
  const [visibleMessages, setVisibleMessages] = useState<{ source: "ai" | "user", message: string }[]>([]);
  const isFirstRender = useRef(true);
  const chatRef = useRef<HTMLDivElement | null>(null);

  const { startSession } = useConversation({
    agentId: "Z32ia3snE6dapfxi3aaM",
    onDisconnect: () => router.push("/chaturanga"),
    onMessage: (msg) => {
      setVisibleMessages((prev) => [...prev, msg])
    },
  });

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [visibleMessages]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      // startSession();
    }
  }, []);

  return (
    <div className="bg-yoga-sand/30 h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yoga-earth leading-tight mb-4">
        Chaturanga tutorial
      </h1>
      <Image 
        src="/chaturanga.gif"
        alt="Chaturanga Tutorial"
        width={500}
        height={100}
        className="rounded-md"
        />
      <div
        ref={chatRef}
      >
        <MicrophoneAnimation />
        {/* <div className="flex flex-col min-w-96 mx-16">
          {visibleMessages.map((msg, index) => (
            <div
              key={index}
              className={`relative max-w-xs p-3 my-2 rounded-lg duration-500 animate-float repeat-1 ${msg.source === "user"
                ? "bg-gray-300 self-start"
                : "bg-blue-500 text-white self-end"
                }`}
            >
              {msg.message}
              <div
                className={`absolute w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent bottom-2 ${msg.source === "user"
                  ? "border-r-8 border-r-gray-300 left-0 -ml-2"
                  : "border-l-8 border-l-blue-500 right-0 -mr-2"
                  }`}
              ></div>
              {index === visibleMessages.length - 1 && (
                <Avatar
                  className={`absolute border-2 text-black flex justify-center items-center ${msg.source === "user" ? "left-0 -ml-16" : "right-0 -mr-16"
                    } bottom-0`}
                >
                  {msg.source === "user" ? "You" : <DogIcon className="size-9" />}
                </Avatar>
              )}
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
