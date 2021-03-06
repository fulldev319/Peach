import React from "react";

import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";

import { useStyles } from "./index.styles";

export default function ProductDetails({ product }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h4" color="primary">
          {product.name}
        </Typography>
        <IconButton
          type="button"
          className={classes.iconButton}
          aria-label="arrow"
        >
          <AddShoppingCartIcon fontSize="large" color="primary" />
        </IconButton>
      </div>
      <div className={classes.productImage}>
        <img src={product.image} alt="product_image" />
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
            <Typography variant="h6" color="textPrimary">
              {product.specifications?.dimensions}
            </Typography>
            <Typography variant="body2" color="textPrimary">
              Dimensions
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection="column" alignItems={"center"}>
            <Typography variant="h6" color="textPrimary">
              {product.specifications?.weight}
            </Typography>
            <Typography variant="body2" color="textPrimary">
              Weight
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection="column" alignItems={"center"}>
            <Typography variant="h6" color="textPrimary">
              {product.specifications?.capacity}
            </Typography>
            <Typography variant="body2" color="textPrimary">
              Capacity
            </Typography>
          </Box>
        </Box>
      </div>
      <Divider />
      <div className={classes.productDescription}>
        <Typography variant="body1" color="textSecondary">
          {product.description}
        </Typography>
      </div>
    </div>
  );
}
