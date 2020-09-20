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

import { ReactComponent as EasyPharmIcon } from "../../../../Assets/Images/EasyPharmIcon.svg";
import BuchariteshIcon from "../../../../Assets/Images/BuchariteshIcon";
import { ReactComponent as TodoIcon } from "../../../../Assets/Images/TodoIcon.svg";
import { ReactComponent as DriveIcon } from "../../../../Assets/Images/GoogleDriveIcon.svg";

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
                <Link to="/drive">
                  <div className="AppDropdown__apps">
                    <DriveIcon height="36" width="36" />
                    <p className="AppDropdown__appsName">Drive</p>
                  </div>
                </Link>
                <a href="https://bucharitesh.in" target="__blank__" alt="">
                  <div className="AppDropdown__apps">
                    <BuchariteshIcon height="36" width="36" />
                    <p className="AppDropdown__appsName">Bucharitesh</p>
                  </div>
                </a>
                <a href="https://easypharm.web.app" target="__blank__" alt="">
                  <div className="AppDropdown__apps">
                    <EasyPharmIcon height="36" width="36" />
                    <p className="AppDropdown__appsName">EasyPharm</p>
                  </div>
                </a>
                <a href="https://todo.bucharitesh.in" alt="">
                  <div className="AppDropdown__apps">
                    <TodoIcon height="36" width="36" />
                    <p className="AppDropdown__appsName">Todo</p>
                  </div>
                </a>
              </div>
            </ClickAwayListener>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

export default AppDropdown;
