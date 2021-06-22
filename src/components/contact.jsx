import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
// import emailjs from "emailjs-com";
import {
  Button,
  InputAdornment,
  makeStyles,
  TextField,
} from "@material-ui/core";
import AboutCover from "./Aboutcover";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(3),
    width: "60%",
  },
  // btnmargin: {
  //   // margin: theme.spacing(2),
  //   marginLeft: theme.spacing(17),
  //   width: "10%",
  // },
}));

const Contact = () => {
  const classes = useStyles();
  // function sendEmail(e) {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "gmail",
  //       "contact_email",
  //       e.target,
  //       "user_pl4Tg37xSIrdPZf65OqKV"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   e.target.reset();
  // }
  return (
    <div>
      <div className="blogcover">
        <h1>Contact</h1>
        <AboutCover />
      </div>
      <div className="row" style={{ margin: "40px" }}>
        <div
          className="col"
          style={{
            borderLeft: "2px solid lightgrey",
            borderRight: "1px solid lightgrey",
            borderBottom: "2px solid lightgrey",
            borderTop: "2px solid lightgrey",
            marginLeft: "40px",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          <div className="col" style={{ margin: "20px", alignSelf: "center" }}>
            <p
              style={{
                fontSize: "30px",
                color: "lightblack",
                marginLeft: "3rem",
              }}
            >
              Send Us A Message
            </p>
            <form
              className="contact-form"
              //  onSubmit={}
            >
              <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                // label="Email"
                placeholder="Your Email Address"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                className={classes.margin}
                id="outlined-multiline-static"
                // label="Multiline"
                multiline
                rows={10}
                variant="outlined"
                placeholder="How can we help?"
              />
              <br />
              <Button
                className={classes.margin}
                type="submit"
                variant="contained"
                // color="primary"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
        <div
          className="col"
          style={{
            borderLeft: "1px solid lightgrey",
            borderRight: "2px solid lightgrey",
            borderBottom: "2px solid lightgrey",
            borderTop: "2px solid lightgrey",
            marginRight: "40px",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          <div className="col-5" style={{ margin: "20px" }}>
            <p style={{ fontSize: "20px", color: "lightblack" }}>
              <LocationOnIcon /> Address
            </p>
            <p style={{ color: "grey", marginLeft: "2rem" }}>
              Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US
            </p>
            <br />
            <p style={{ fontSize: "20px", color: "lightblack" }}>
              <CallIcon /> Lets Talk
            </p>
            <p style={{ color: "#2196f3", marginLeft: "2rem" }}>
              +1 800 1236879
            </p>
            <br />
            <p style={{ fontSize: "20px", color: "lightblack" }}>
              <MailOutlineIcon /> Sale Support
            </p>
            <p style={{ color: "#2196f3", marginLeft: "2rem" }}>
              contact@example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
