import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";

import { headerStyles } from "./index.styles";

export default function Header() {
  const classes = headerStyles();

  return (
    <AppBar position="fixed">
      <div className={classes.header}>
        <div className={classes.mainContainer}>
          <Typography variant="h4">Widget Depot</Typography>
          <IconButton type="submit" aria-label="search">
            <AccountCircleIcon fontSize="large" color="secondary" />
          </IconButton>
        </div>
      </div>
    </AppBar>
  );
}
