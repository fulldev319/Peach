import React from "react";
import cls from "classnames";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import IconButton from "@material-ui/core/IconButton";
import { useStyles } from "./index.styles";

export default function Product({ product, isSelected, onProductClick }) {
  const classes = useStyles();

  return (
    <Paper
      component="div"
      className={cls(classes.root, {
        [classes.selected]: isSelected,
      })}
      onClick={onProductClick}
    >
      <Box display={"flex"} flexDirection="column">
        <Typography variant="subtitle1">{product.name}</Typography>
        <Typography>Price</Typography>
        <Typography>{product.price}</Typography>
      </Box>
      <IconButton
        type="button"
        className={classes.iconButton}
        aria-label="arrow"
      >
        <ArrowForwardIosIcon fontSize="small" />
      </IconButton>
    </Paper>
  );
}
