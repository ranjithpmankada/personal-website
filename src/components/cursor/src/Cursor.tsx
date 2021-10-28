import * as React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { CursorPosition } from "../types";
import useCursor from "./useCursor";

type Cursor = {
  position: CursorPosition;
};

const CustomCursor = React.memo(styled.div<Cursor>`
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  width: 10px;
  height: 10px;
  box-sizing: border-box;
  margin: 0;
  border-radius: 50%;
  transition-timing-function: ease-out;
  transition-duration: 200ms;
  pointer-events: none;
  mix-blend-mode: difference;
  transform: ${(props) =>
    `translate3d(${props.position.x}px, ${props.position.y}px, ${props.position.z}px)`};
`);

const Cursor = () => {
  const [x, y, z] = useCursor();
  const rootNode = document.getElementById("root");

  return rootNode
    ? createPortal(
        <CustomCursor position={{ x, y, z }}></CustomCursor>,
        rootNode
      )
    : null;
};

export default Cursor;
