import * as React from "react";
import { ThemeProvider } from "styled-components";

const ThemePicker = (props: any) => {
  return <ThemeProvider theme={{}}>{props.children}</ThemeProvider>;
};

export default React.memo(ThemePicker);
