import React from "react";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import IconButton from "@material-ui/core/IconButton";
import { useStyles } from "./index.styles";

export default function Product() {
  const classes = useStyles();

  return (
    <Paper component="div" className={classes.root}>
      <Box display={"flex"} flexDirection="column">
        <Typography variant="subtitle1">WIDGET1</Typography>
        <Typography>Price</Typography>
        <Typography>$750</Typography>
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
