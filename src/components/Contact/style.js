import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  Container: {
    display: "flex",
    flexDirection: "column",
    marginTop: "150px",
  },

  SendBtn: {
    width: "20%",
    height: "40px",
    background: " #009ccf",
    border: "1px solid #009ccf",
    boxSizing: "border-box",
    borderRadius: "5px",
    cursor: "pointer",
    color: "#ffffff",
    marginLeft: "25px",
  },

  getInTouch: {
    fontSize: "30px",
    fontWeight: 700,
    textTransform: "uppercase",
    color: "#009ccf",
    lineHeight: "10px",
    letterSpacing: "5px",
    marginBottom: "50px",
  },
  contactDetailsContainer: {
    textAlign: "center",
  },
  contactTitle: {
    display: "block",
    color: "#009ccf",
    fontSize: "18px",
    textTransform: "uppercase",
    marginBottom: "10px",
  },
});
