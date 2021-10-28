import * as React from "react";
import { useState, useEffect } from "react";
import { CursorPosition } from "./../types";

const useCursor = () => {
  const [pos, setPos] = useState<CursorPosition>({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const cursorEvents = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY, z: 0 });
    };

    document.addEventListener("mousemove", cursorEvents);
    return () => {
      document.removeEventListener("mousemove", cursorEvents);
    };
  }, []);

  return [pos.x, pos.y, pos.z];
};

export default useCursor;
