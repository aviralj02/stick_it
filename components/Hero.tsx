"use client";

import React from "react";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Caveat_Brush } from "next/font/google";
import Image from "next/image";
import { Badge } from "./ui/badge";

type Props = {};

const caveat = Caveat_Brush({
  subsets: ["latin"],
  weight: "400",
});

const Hero = (props: Props) => {
  const text1 = "Seamlessly generate priority".split(" ");
  const text2 = "to-do wallpapers".split(" ");

  return (
    <div className="my-36 flex flex-col justify-center items-center gap-10 relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.35,
        }}
      >
        <Badge variant={"secondary"}>
          <div className="rounded-full bg-green-400 h-[8px] w-[8px] inline-block mr-2"></div>
          <div className="absolute animate-ping rounded-full bg-green-400 h-[8px] w-[8px] mr-2 "></div>
          Version 1.0 Released
        </Badge>
        <Image
          src="/dotted-arrow.png"
          height={90}
          width={90}
          alt="arrow"
          className="left-10 rotate-45 bottom-5 hidden md:absolute lg:block select-none"
          draggable="false"
        />
        <Image
          src="/curve-arrow.png"
          height={90}
          width={90}
          alt="arrow"
          className="hidden lg:block md:absolute right-5 rotate-180 top-32 select-none"
          draggable="false"
        />
      </motion.div>
      <div className="flex flex-col gap-3 sm:gap-4">
        <h1 className="flex gap-2 font-extrabold text-3xl sm:text-5xl mx-auto text-center w-full justify-center flex-wrap max-w-3xl">
          {text1.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.35,
                delay: i / 10,
              }}
              key={i}
            >
              {el === "priority" ? (
                <span className=" text-red-500">{el}</span>
              ) : (
                <>{el}</>
              )}
            </motion.span>
          ))}
        </h1>
        <h1 className="text-3xl flex gap-2 font-extrabold sm:text-5xl mx-auto text-center max-w-3xl">
          {text2.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.35,
                delay: i / 10,
              }}
              key={i}
            >
              {el === "to-do" ? (
                <span className={`${caveat.className}`}>{el}</span>
              ) : (
                <>{el}</>
              )}
            </motion.span>
          ))}
        </h1>
        <motion.p
          className="leading-7 sm:text-lg text-base [&:not(:first-child)]:mt-6 mx-auto text-center max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.35,
          }}
        >
          Transform your task list into a dynamic, motivating backdrop. Stay
          focused and inspired, every time you unlock your screen.
        </motion.p>
      </div>

      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.35,
        }}
      >
        <Link href="/editor">
          <Button className="flex rounded-full items-center gap-2" size="sm">
            <Sparkles height={15} width={15} fill="#fff" />
            Start a project
          </Button>
        </Link>

        <a target="_blank" href="https://github.com/aviralj02/stick_it">
          <Button
            className="flex rounded-full items-center gap-2"
            size="sm"
            variant="link"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            View on Github
          </Button>
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
