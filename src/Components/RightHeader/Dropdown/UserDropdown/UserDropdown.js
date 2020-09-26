import React from "react";
import "./UserDropdown.css";
import { Link } from "react-router-dom";

import {
  Avatar,
  IconButton,
  Button,
  ClickAwayListener,
  Divider,
  Grow,
  makeStyles,
  Popper,
} from "@material-ui/core";

import { auth } from "../../../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const useStyles = makeStyles({
  root: {
    zIndex: 99999,
    width: 400,
  },
  avatar: {
    borderRadius: "50%",
  },
  Userimage: {
    border: null,
    marginRight: 6,
    height: 80,
    width: 80,
    marginTop: 25,
    marginBottom: 10,
  },
  UserAccountButton: {
    borderRadius: 50,
    margin: 12.5,
  },
  UserSignoutButton: {
    margin: 12.5,
  },
  UserDivider: {
    border: 10,
  },
});

function UserDropdown(props) {
  const [user] = useAuthState(auth);

  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const anchorRef = React.useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <IconButton
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Avatar src={user.photoURL} className={classes.avatar} />
      </IconButton>
      <Popper
        className={classes.root}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        placement="bottom-end"
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "right bottom" : "left bottom",
            }}
          >
            <ClickAwayListener onClickAway={handleClose}>
              <div className="UserDropdown__container">
                <div className="UserDropdown__header">
                  <Avatar className={classes.Userimage} src={user.photoURL} />
                  <p className="UserDropdown__name">{user.displayName}</p>
                  <p className="UserDropdown__email">{user.email}</p>
                  {/* <Button variant="outlined" className={classes.UserAccountButton}>Manage Your Account</Button> */}
                </div>
                <Divider className={classes.UserDivider} />
                <p className="UserDropdown__email">
                  More email adding option coming soon
                </p>
                <Divider />
                {auth.currentUser && (
                  <Button
                    className={classes.UserSignoutButton}
                    size="small"
                    variant="outlined"
                    onClick={() => auth.signOut()}
                  >
                    Sign Out
                  </Button>
                )}
                <Divider className={classes.UserDivider} />
                <div className="UserDropdown__policy">
                  <Link to="/privacypolicy">Privacy Policy</Link>
                  &#8226;
                  <Link to="/termsofservice">Terms of service</Link>
                </div>
              </div>
            </ClickAwayListener>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

export default UserDropdown;
