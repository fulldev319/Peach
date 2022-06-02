import { createTheme } from "@material-ui/core/styles";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#000000f2",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f7f5f5",
      contrastText: "#fff",
    },
    text: {
      primary: "#000000c4",
      secondary: "#0000008a",
    },
  },
  typography: {
    h4: {
      fontWeight: 700,
    },
    subtitle1: {
      fontWeight: 700,
    },
  },
});
