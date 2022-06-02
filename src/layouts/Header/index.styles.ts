import { makeStyles } from "@material-ui/core/styles";

export const headerStyles = makeStyles((theme) => ({
  header: {
    height: 80,
    background: "#4674df",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mainContainer: {
    width: "100%",
    padding: "0px 40px",
    maxWidth: 1440,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));
