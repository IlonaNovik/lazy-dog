"use client";

import { useEffect, useRef, useState } from "react";
import { DogIcon } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const messages = [
  { text: "Hi there!", sender: "left" },
  { text: "Hello! How can I help you today?", sender: "right" },
  { text: "I need some information about your services.", sender: "left" },
  { text: "Sure, I’d be happy to help with that.", sender: "right" },
];

export default function Chaturanga() {
  const router = useRouter();
  const [visibleMessages, setVisibleMessages] = useState<typeof messages>([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      messages.forEach((msg, index) => {
        setTimeout(() => {
          setVisibleMessages((prev) => [...prev, msg]);
        }, index * 1000);
      });
    }
  }, []);

  return (
    <div className="bg-yoga-sand/30 h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yoga-earth leading-tight">
        Let's talk about it
      </h1>
      <Card className="flex flex-col p-4 m-4 min-w-96 mx-auto">
        {visibleMessages.map((msg, index) => (
          <div
            key={index}
            className={`relative max-w-xs p-3 my-2 rounded-lg duration-500 animate-float repeat-1 ${
              msg.sender === "left"
                ? "bg-gray-300 self-start"
                : "bg-blue-500 text-white self-end"
            }`}
          >
            {msg.text}
            <div
              className={`absolute w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent bottom-2 ${
                msg.sender === "left"
                  ? "border-r-8 border-r-gray-300 left-0 -ml-2"
                  : "border-l-8 border-l-blue-500 right-0 -mr-2"
              }`}
            ></div>
            {index === visibleMessages.length - 1 && (
              <Avatar
                className={`absolute border-2 text-black flex justify-center items-center ${
                  msg.sender === "left" ? "left-0 -ml-16" : "right-0 -mr-16"
                } bottom-0`}
              >
                {msg.sender === "left" ? "You" : <DogIcon className="size-9" />}
              </Avatar>
            )}
          </div>
        ))}
      </Card>
      <Button
        className={`transition-opacity duration-700 delay-700 ${
          visibleMessages.length === messages.length
            ? "opacity-100"
            : "opacity-0"
        }`}
        onClick={() => router.push("/chaturanga")}
      >
        Go to the lesson (Automatically from the onEndSession callback)
      </Button>
    </div>
  );
}
