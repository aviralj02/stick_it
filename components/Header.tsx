"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {};

const Header = (props: Props) => {
  const [navStyle, setNavStyle] = useState("");
  const [logoStyle, setLogoStyle] = useState("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", () => {
    if (scrollY.get() > 150) {
      setNavStyle("border border-border bg-secondary rounded-full px-3");
      setLogoStyle("hidden");
    } else {
      setNavStyle("");
      setLogoStyle("");
    }
  });

  return (
    <motion.div
      className={cn(
        `flex max-w-screen-xl mx-auto sticky top-12 justify-between items-center my-12 py-2 transition-all z-30`,
        navStyle
      )}
      transition={{
        duration: 0.1,
        ease: "easeInOut",
      }}
    >
      <div>
        <Link href="/" className="flex gap-3 items-center">
          <Image height={30} width={30} src="/logo.png" alt="logo" />
          <h1
            className={cn(
              logoStyle,
              `font-sans tracking-tight cursor-pointer font-bold text-2xl`
            )}
          >
            stick it.
          </h1>
        </Link>
      </div>
      <div>
        <Button className="rounded-full items-center gap-2" size="sm">
          <Sparkles height={15} width={15} fill="#fff" />
          Start a project
        </Button>
      </div>
    </motion.div>
  );
};

export default Header;
