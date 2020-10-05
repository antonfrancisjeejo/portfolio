import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Modal,
  Fade,
  Backdrop,
  InputAdornment,
  Button,
} from "@material-ui/core";
import "./Modal.css";
import { AccountCircle, Email, Phone } from "@material-ui/icons";
import { db, timestamp } from "../../firebase";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "linear-gradient(to right top, #d8ff1e, #e8e800, #f4d200, #fbbb00, #fea400, #fe9e10, #fe971b, #fe9123, #fd9934, #fda143, #fca951, #fbb05f)",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 500,
    height: 300,
    outline: "none",
  },
}));

export default function TransitionsModal({ open, setOpen }) {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleClick = () => {
    if (name && email && phone) {
      setError("");
      db.collection("contact").add({
        name: name,
        email: email,
        phone: phone,
        timestamp: timestamp,
      });

      setName("");
      setPhone("");
      setEmail("");
      setOpen(false);
    } else {
      setError("Please fill all the details");
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title" className="modal__title">
              Join with Me
            </h2>
            <TextField
              id="standard-basic"
              label="Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <br />
            <TextField
              id="standard-basic1"
              label="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <TextField
              id="standard-basic2"
              label="Mobile No"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone />
                  </InputAdornment>
                ),
              }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            {error && <p className="modal__error">{error}</p>}
            <Button
              variant="outlined"
              className="modal__button"
              onClick={handleClick}
            >
              Join
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
