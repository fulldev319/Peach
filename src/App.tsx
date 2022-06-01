import React from "react";
// import { ThemeProvider, DefaultTheme } from "@material-ui/styles";
import Header from "./layouts/Header";
import Main from "./pages";

function App() {
  return (
    <>
      {/* <ThemeProvider theme={"DefaultTheme"}> */}
      <Header />
      <Main />
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;

