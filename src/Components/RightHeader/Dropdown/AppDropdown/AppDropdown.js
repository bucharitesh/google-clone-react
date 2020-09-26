import React from "react";
import "./AppDropdown.css";
import { Link } from "react-router-dom";

import {
  IconButton,
  ClickAwayListener,
  Grow,
  makeStyles,
  Popper,
} from "@material-ui/core";

import AppsIcon from "@material-ui/icons/Apps";

import { Apps } from "../../../../Links";
import Icon from "../../../Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 99999,
    width: 400,
    flexGrow: 1,
  },
}));

function AppDropdown(props) {
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
        <AppsIcon />
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
              <div className="AppDropdown__container">
                {Apps.map(({ path, icon, appName }) => (
                  <Link to={path}>
                    <div className="AppDropdown__apps">
                      <Icon icon={icon} size="36" />
                      <p className="AppDropdown__appsName">{appName}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </ClickAwayListener>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

export default AppDropdown;
