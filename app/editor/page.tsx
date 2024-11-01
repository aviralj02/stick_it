"use client";

import dynamic from "next/dynamic";

const FullScreenEditor = dynamic(
  () => import("@/components/editor/FullScreenEditor"),
  { ssr: false }
);

export default function Editor() {
  return <FullScreenEditor />;
}
