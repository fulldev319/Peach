import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: 24,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    border: "1px solid grey",
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconButton: {
    padding: 10,
  },
  productImage: {
    padding: "32px 48px",
    display: "flex",
    justifyContent: "center",
    "& img": {
      width: "600px",
      height: "400px",
    },
  },
  productDetails: {
    display: "flex",
    flexDirection: "column",
    padding: "16px 20px",
  },
  productDescription: {
    padding: "40px 48px",
  },
}));
