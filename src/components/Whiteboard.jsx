import { useEffect, useRef, useState } from "react";

import { Button } from "@material-tailwind/react";
import { fabric } from "fabric";

const Whiteboard = ({ setImage }) => {
  const canvasRef = useRef(null);
  const [activeCanvas, setActiveCanvas] = useState(null);

  const handleClear = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    activeCanvas.clear();
    activeCanvas.backgroundColor = "#ffffff";
  };

  const captureImage = () => {
    const canvas = canvasRef.current;

    if (canvas) {
      const image = canvas.toDataURL("image/png");
      setImage(image);
    }
  };

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      isDrawingMode: true,
      width: canvasRef.current.offsetWidth,
      height: canvasRef.current.offsetHeight,
      backgroundColor: "#ffffff",
    });

    canvas.freeDrawingBrush.width = 12;

    setActiveCanvas(canvas);

    return () => {
      canvas.dispose();
    };
  }, []);

  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-center bg-white rounded-lg">
        <canvas ref={canvasRef} style={{ width: "400px", height: "400px", borderRadius: '.5rem', boxShadow:'0px 0px 10px inset black' }} />
      </div>
      <div className="w-full flex justify-between items-center mt-6">
        <Button onClick={handleClear} className="bg-blue-900">
          Clear Board
        </Button>
        <Button onClick={captureImage} className="bg-gray-800">
          Try
        </Button>
      </div>
    </div>
  );
};

export default Whiteboard;
