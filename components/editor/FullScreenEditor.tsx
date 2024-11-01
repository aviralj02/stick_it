"use client";

import DesktopCanvas from "@/components/editor/DesktopCanvas";
import MobileCanvas from "@/components/editor/MobileCanvas";
import Sidebar from "@/components/editor/Sidebar";
import useMediaScreen from "@/hooks/useMediaScreen";
import { useState } from "react";
import FloatingAddButton from "./FloatingAddButton";
import ManageTodoDrawer from "./ManageTodoDrawer";

export default function FullScreenEditor() {
  const { width } = useMediaScreen();
  const [isDesktopView, setIsDesktopView] = useState<boolean>(() => {
    if (width > 1000) {
      return true;
    }
    return false;
  });

  return (
    <div className="flex h-screen w-full">
      {width > 1000 ? (
        <Sidebar setIsDesktopView={setIsDesktopView} />
      ) : (
        <>
          <FloatingAddButton />
          <ManageTodoDrawer />
        </>
      )}

      <main className="flex-1 p-4">
        {isDesktopView ? <DesktopCanvas /> : <MobileCanvas />}
      </main>
    </div>
  );
}
