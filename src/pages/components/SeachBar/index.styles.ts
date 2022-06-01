import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 8px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));
