import React from "react";

import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { useStyles } from "./index.styles";

export default function ProductDetails() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography>WIDGET1</Typography>
        <IconButton
          type="button"
          className={classes.iconButton}
          aria-label="arrow"
        >
          <AddShoppingCartIcon fontSize="default" />
        </IconButton>
      </div>
      <div className={classes.productImage}>
        <img src={require("assets/products/1.jpeg")} alt="product_image" />
      </div>
      <Divider />
      <div className={classes.productDetails}>
        <Typography>Specifications</Typography>
        <Box
          display="flex"
          alignItems={"center"}
          justifyContent="space-between"
          px={3}
          py={1}
        >
          <Box display={"flex"} flexDirection="column" alignItems={"center"}>
            <Typography>14" * 20" * 5"</Typography>
            <Typography>Dimensions</Typography>
          </Box>
          <Box display={"flex"} flexDirection="column" alignItems={"center"}>
            <Typography>41bs</Typography>
            <Typography>Weight</Typography>
          </Box>
          <Box display={"flex"} flexDirection="column" alignItems={"center"}>
            <Typography>10L</Typography>
            <Typography>Capacity</Typography>
          </Box>
        </Box>
      </div>
      <Divider />
      <div className={classes.productDescription}>
        Rolex watches show time accurately and are robust, sturdy and reliable.
        Maintaining consistently high quality with estimated annual production
        numbers of about three-quarters of a million pieces is an art unto
        itself. And it's to Rolex's advantage to omit unusual complications.
        Rolex watches show time accurately and are robust, sturdy and reliable.
        Maintaining consistently high quality with estimated annual production
        numbers of about three-quarters of a million pieces is an art unto
        itself. And it's to Rolex's advantage to omit unusual complications.
        Rolex watches show time accurately and are robust, sturdy and reliable.
        Maintaining consistently high quality with estimated annual production
        numbers of about three-quarters of a million pieces is an art unto
        itself. And it's to Rolex's advantage to omit unusual complications.
      </div>
    </div>
  );
}
