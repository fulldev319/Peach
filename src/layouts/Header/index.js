import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { headerStyles } from "./index.styles";

export default function Header() {
  const classes = headerStyles();

  return (
    <AppBar position="fixed">
      <div className={classes.header}>
        <div className={classes.mainContainer}>
          <Typography variant="h5">Widget Depot</Typography>
          <AccountCircleIcon fontSize="large" />
        </div>
      </div>
    </AppBar>
  );
}
