import { Button, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import userService from "../../services/UserService";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
  },
  child: {
    width: "60%",
  },
}));
const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <div className={classes.container}>
      <div className={classes.child}>
        <TextField
          label="email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br />
        <TextField
          label="password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{" "}
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            userService
              .login(email, password)
              .then((data) => {
                console.log(data);
                window.location.href = "/";
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
