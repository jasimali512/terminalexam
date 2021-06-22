import { Button, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import userService from "../../services/UserService";
import { toast } from "react-toastify";
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
const Register = () => {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [gender, setGender] = React.useState("");

  return (
    <div className={classes.container}>
      <div className={classes.child}>
        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        <br />
        <TextField
          label="GEnder"
          fullWidth
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />{" "}
        <br />
        <TextField
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br />
        <TextField
          label="Password"
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
              .register(name, gender, email, password)
              .then((data) => {
                console.log(data);
                toast.success("Successfully Registered !", {
                  position: toast.POSITION.TOP_CENTER,
                });
                window.location.href = "/login";
              })
              .catch((err) => {
                console.log(err);
                toast.error(err.response.data, {
                  position: toast.POSITION.TOP_LEFT,
                });
              });
          }}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default Register;
