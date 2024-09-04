import React, { ReactElement, useRef } from "react";
import html2canvas from "html2canvas";
import { Button } from "./ui/button";

type Props = {
  todos: string[];
};

const DesktopCanvas = ({ todos }: Props): ReactElement => {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  const handleDownload = async () => {
    if (canvasRef.current) {
      canvasRef.current.classList.remove("rounded-md");
      canvasRef.current.style.width = "1920px";
      canvasRef.current.style.height = "1080px";

      const canvas = await html2canvas(canvasRef.current, {
        width: 1920,
        height: 1080,
        scale: 1,
        useCORS: true,
        backgroundColor: null,
        removeContainer: true,
      });

      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "stick-it-wallpaper.png";
      link.click();

      canvasRef.current.classList.add("rounded-md");
      canvasRef.current.style.width = "960px";
      canvasRef.current.style.height = "540px";
    }
  };

  return (
    <div className="flex flex-col w-fit mx-auto justify-center gap-6 h-full">
      <Button className="self-end" variant={"outline"} onClick={handleDownload}>
        Export
      </Button>
      <div
        ref={canvasRef}
        style={{
          width: "960px",
          height: "540px",
        }}
        className="bg-black text-white flex flex-col gap-1 items-center justify-center rounded-md p-5 box-border overflow-hidden font-sans text-sm"
      >
        {todos.map((todo, index) => (
          <div key={index}>
            <span>• {todo}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopCanvas;
