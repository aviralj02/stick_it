import React, { MutableRefObject, ReactElement, useRef } from "react";
import html2canvas from "html2canvas";
import { Button } from "./ui/button";

type Props = {
  todos: Todo[];
};

const MobileCanvas = ({ todos }: Props): ReactElement => {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  const enableMobileStandard = (
    canvasRef: MutableRefObject<HTMLDivElement | null>
  ): void => {
    if (canvasRef.current) {
      canvasRef.current.classList.remove("rounded-md");
      canvasRef.current.style.width = "540px";
      canvasRef.current.style.height = "960px";
      canvasRef.current.style.fontSize = "20px";
    }
  };

  const disableMobileStandard = (
    canvasRef: MutableRefObject<HTMLDivElement | null>
  ): void => {
    if (canvasRef.current) {
      canvasRef.current.classList.add("rounded-md");
      canvasRef.current.style.width = "324px";
      canvasRef.current.style.height = "576px";
      canvasRef.current.style.fontSize = "14px";
    }
  };

  const handleDownload = async (): Promise<void> => {
    if (canvasRef.current) {
      enableMobileStandard(canvasRef);

      const canvas = await html2canvas(canvasRef.current);

      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "stick-it-wallpaper.png";
      link.click();

      disableMobileStandard(canvasRef);
    }
  };

  return (
    <div className="flex flex-col w-full justify-center gap-6 h-full">
      <Button
        className="self-end mx-6"
        variant={"outline"}
        onClick={handleDownload}
      >
        Export
      </Button>

      <div
        ref={canvasRef}
        style={{
          width: "324px",
          height: "576px",
          fontSize: "14px",
        }}
        className="bg-black text-white flex flex-col mx-auto items-center justify-center rounded-md p-5 box-border overflow-hidden font-sans"
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

export default MobileCanvas;
