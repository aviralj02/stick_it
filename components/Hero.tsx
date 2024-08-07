"use client";

import React from "react";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Caveat_Brush } from "next/font/google";
import Image from "next/image";

type Props = {};

const caveat = Caveat_Brush({
  subsets: ["latin"],
  weight: "400",
});

const Hero = (props: Props) => {
  const text1 = "Seamlessly generate priority".split(" ");
  const text2 = "to-do wallpapers".split(" ");

  return (
    <div className="my-44 flex flex-col justify-center items-center gap-10 relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.35,
        }}
      >
        <Image
          src="/dotted-arrow.png"
          height={90}
          width={90}
          alt="arrow"
          className="left-10 rotate-45 bottom-5 hidden md:absolute lg:block"
        />
        <Image
          src="/curve-arrow.png"
          height={90}
          width={90}
          alt="arrow"
          className="hidden lg:block md:absolute right-5 rotate-180 top-32"
        />
      </motion.div>
      <div className="flex flex-col gap-2">
        {/* <h1 className="text-4xl !leading-[60px] font-extrabold lg:text-5xl mx-auto text-center max-w-3xl">
          Seamlessly generate{" "}
          <span className="underline decoration-wavy underline-offset-8 text-red-500">
            priority
          </span>{" "}
          TO-DO wallpapers
        </h1> */}

        <h1 className="!leading-[60px] flex gap-2 font-extrabold text-5xl mx-auto text-center max-w-3xl">
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
        <h1 className="text-4xl !leading-[60px] flex gap-2 font-extrabold lg:text-5xl mx-auto text-center max-w-3xl">
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
          className="leading-7 text-lg [&:not(:first-child)]:mt-6 mx-auto text-center max-w-2xl"
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
        <Link href="#">
          <Button className="rounded-full items-center gap-2" size="sm">
            <Sparkles height={15} width={15} fill="#fff" />
            Start a project
          </Button>
        </Link>
        <Link href="#">
          <Button variant={"link"}>Contact us</Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
