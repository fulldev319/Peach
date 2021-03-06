import { makeStyles } from "@material-ui/core/styles";

export const mainPageStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 100,
    paddingBottom: 40,
    display: "flex",
    justifyContent: "center",
  },
  mainContainer: {
    width: "100%",
    maxWidth: 1440,
    padding: "0px 40px",
    display: "flex",
    flexDirection: "column",
  },
  productsContainer: {
    display: "flex",
    flex: 1,
    marginTop: 20,
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  products: {
    width: 300,
    marginRight: 20,
    display: "flex",
    flexDirection: "column",
  },
  productDetails: {
    flex: 1,
  },
}));
