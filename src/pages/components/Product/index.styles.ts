import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: 260,
    padding: 16,
    background: "#f7f5f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    cursor: "pointer",
    borderRadius: 8,
    "&:hover": {
      boxShadow:
        "0px 10px 24px rgba(19, 45, 38, 0.25), 0px 31px 44px -13px rgba(0, 0, 0, 0.02)",
      transform: "scale(1.02)",
    },
  },
  selected: {
    border: "3px solid #6464d3de",
  },
  iconButton: {
    padding: 10,
  },
}));
