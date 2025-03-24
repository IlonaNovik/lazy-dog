"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, Bell } from "lucide-react";
import { WebappSidebar } from "./webapp-sidebar";

export function WebappHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-yoga-sage/20 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center">
        <div className="flex md:hidden mr-2">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-yoga-earth hover:text-yoga-terracotta hover:bg-yoga-terracotta/10"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <WebappSidebar />
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/webapp" className="flex items-center gap-2">
            <div className="relative w-8 h-8 overflow-visible">
              <div className="absolute inset-0 bg-yoga-clay rounded-full opacity-20 animate-pulse-slow"></div>
              <Image
                src="/logo.svg"
                alt="YogaAlign Logo"
                width={32}
                height={32}
                className="relative z-10"
              />
            </div>
            <span className="font-medium text-lg text-yoga-earth hidden md:inline-block">
              YogaAlign
            </span>
          </Link>
        </div>

        <div className="flex-1" />

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-yoga-earth hover:text-yoga-terracotta hover:bg-yoga-terracotta/10 rounded-full"
          >
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>

          <Avatar className="h-9 w-9 ring-2 ring-yoga-sage/20">
            <AvatarImage src="/placeholder.svg" alt="User avatar" />
            <AvatarFallback className="bg-yoga-terracotta text-white">
              JD
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
