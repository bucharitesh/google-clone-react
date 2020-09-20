import React from "react";
import UserDropdown from "../../Components/RightHeader/Dropdown/UserDropdown/UserDropdown";

import { Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import { useStateValue } from "../../StateProvider";

const useStyles = makeStyles((theme) => ({
  loginButton: {
    marginLeft: 10,
  },
}));

function User() {
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue();

  const [{ user }] = useStateValue();

  const classes = useStyles();

  return (
    <div>
      {!user ? (
        <>
          <Link to="/login">
            <Button
              size="small"
              variant="contained"
              color="primary"
              className={classes.loginButton}
              disableElevation
            >
              login
            </Button>
          </Link>
          <Link to="/register">
            <Button
              size="small"
              variant="contained"
              color="primary"
              className={classes.loginButton}
              disableElevation
            >
              Register
            </Button>
          </Link>
        </>
      ) : (
        <UserDropdown />
      )}
    </div>
  );
}

export default User;
