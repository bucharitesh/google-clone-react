import React from "react";
import UserDropdown from "../../Components/RightHeader/Dropdown/UserDropdown/UserDropdown";

import firebase from "firebase";
import { auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  loginButton: {
    marginLeft: 10,
  },
}));

function User() {
  const [user] = useAuthState(auth);
  const classes = useStyles();
  const SignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div>
      {user ? (
        <UserDropdown />
      ) : (
        <Button
          size="small"
          variant="contained"
          color="primary"
          className={classes.loginButton}
          onClick={SignInWithGoogle}
          disableElevation
        >
          login
        </Button>
      )}
    </div>
  );
}

export default User;
