import React, { MutableRefObject, ReactElement, useRef } from "react";
import html2canvas from "html2canvas";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  todos: Todo[];
};

const DesktopCanvas = ({ todos }: Props): ReactElement => {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  const enableDesktopStandard = (
    canvasRef: MutableRefObject<HTMLDivElement | null>
  ): void => {
    if (canvasRef.current) {
      canvasRef.current.classList.remove("rounded-md");
      canvasRef.current.style.width = "1920px";
      canvasRef.current.style.height = "1080px";
      canvasRef.current.style.fontSize = "28px";
    }
  };

  const disableDesktopStandard = (
    canvasRef: MutableRefObject<HTMLDivElement | null>
  ): void => {
    if (canvasRef.current) {
      canvasRef.current.classList.add("rounded-md");
      canvasRef.current.style.width = "960px";
      canvasRef.current.style.height = "540px";
      canvasRef.current.style.fontSize = "14px";
    }
  };

  const handleDownload = async (): Promise<void> => {
    if (canvasRef.current) {
      enableDesktopStandard(canvasRef);

      const canvas = await html2canvas(canvasRef.current);

      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "stick-it-wallpaper.png";
      link.click();

      disableDesktopStandard(canvasRef);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <Button
        className="absolute right-10 top-5"
        variant={"outline"}
        onClick={handleDownload}
      >
        Export
      </Button>
      <div
        ref={canvasRef}
        style={{
          width: "960px",
          height: "540px",
          fontSize: "14px",
        }}
        className="bg-black text-white flex flex-col items-center justify-center rounded-md p-5 box-border overflow-hidden font-sans"
      >
        {todos.length === 0 ? (
          <span className="opacity-50 select-none">
            Your Todos will display here...
          </span>
        ) : (
          <div className="flex flex-col gap-2 max-w-96">
            {todos.map((todo, index) => (
              <span key={index}>• {todo.task}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DesktopCanvas;
