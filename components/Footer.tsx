import { Copyright, Dot } from "lucide-react";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="mt-32 mb-6 sm:mb-16 p-3">
      <hr className="h-[2px] my-8 rounded-full bg-gray-50 border-0" />

      <div className="flex flex-col gap-3 sm:flex-row items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex items-center sm:flex-row flex-col gap-1">
          <h1 className="font-extrabold">stick it.</h1>
          <Dot className="hidden sm:block" />
          <p className="text-sm text-gray-700">Elevate Your Productivity</p>
        </div>
        <div className="flex items-center gap-1">
          <Copyright width={12} height={12} />
          <p className="flex items-center gap-2 text-sm text-gray-700">
            <span className="font-extrabold">stick it.</span> Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
