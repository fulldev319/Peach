import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: 24,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    border: "3px solid #e3e3e3",
    borderRadius: 8,
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
    [theme.breakpoints.down("sm")]: {
      "& img": {
        width: "600px",
        height: "400px",
      },
    },
    [theme.breakpoints.down("xs")]: {
      "& img": {
        width: "300px",
        height: "200px",
      },
    },
  },
  productDetails: {
    display: "flex",
    flexDirection: "column",
    padding: "16px 20px",
  },
  productDescription: {
    padding: "40px 48px",
    fontStyle: "italic",
  },
}));
