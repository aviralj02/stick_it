"use client";

import dynamic from "next/dynamic";

// hydration fix
const FullScreenEditor = dynamic(
  () => import("@/components/editor/FullScreenEditor"),
  { ssr: false }
);

export default function Editor() {
  return <FullScreenEditor />;
}
