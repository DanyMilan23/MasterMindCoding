import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  list: {
    zIndex: 100,
  },
}));

export default function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleToggle2 = () => {
    setOpen(false);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }


  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <Button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        color="primary"
      >
        ABOUT US
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                  color="primary"
                >
                  <MenuItem
                    onClick={handleClose}
                    onMouseEnter={(e) => (
                      (e.target.style.color = "#ffff"),
                      (e.target.style.backgroundColor = "#171c48")
                    )}
                    onMouseLeave={(e) => (
                      (e.target.style.color = "#495054"),
                      (e.target.style.backgroundColor = "#ffff")
                    )}
                    style={{ borderLeft: "2px solid #171c48" }}
                  >
                    Who we are
                  </MenuItem>
                  <Divider />
                  <MenuItem
                    onClick={handleClose}
                    onMouseEnter={(e) => (
                      (e.target.style.color = "#ffff"),
                      (e.target.style.backgroundColor = "#171c48")
                    )}
                    onMouseLeave={(e) => (
                      (e.target.style.color = "#495054"),
                      (e.target.style.backgroundColor = "#ffff")
                    )}
                    style={{ borderLeft: "2px solid #171c48" }}
                  >
                    Mission
                  </MenuItem>
                  <Divider />
                  <MenuItem
                    onClick={handleClose}
                    onMouseEnter={(e) => (
                      (e.target.style.color = "#ffff"),
                      (e.target.style.backgroundColor = "#171c48")
                    )}
                    onMouseLeave={(e) => (
                      (e.target.style.color = "#495054"),
                      (e.target.style.backgroundColor = "#ffff")
                    )}
                    style={{ borderLeft: "2px solid #171c48" }}
                  >
                    Vission
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
