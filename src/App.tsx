import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "./layouts/Header";
import Main from "./pages";
import { defaultTheme } from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;

