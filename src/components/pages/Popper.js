import React from "react";
import { Paper, ClickAwayListener } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import PersonIcon from "@material-ui/icons/Person";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  paper: {
    border: "1px solid",
    padding: theme.spacing(1),
    // backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimplePopper() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  const handleClickAway = () => {
    setAnchorEl(!anchorEl);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <button
          aria-describedby={id}
          type="button"
          onClick={handleClick}
          style={{
            backgroundColor: "transparent",
            border: "none",
            marginRight: 50,
          }}
        >
          <span style={{ color: "#2196f3" }}>Mr. Aliyu</span>
          <ArrowDropDownIcon
            style={{
              position: "relative",
              top: 7,
              color: "#2196f3",
              cursor: "pointer",
            }}
          />
        </button>
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <Paper
            style={{
              width: "150px",
              height: "auto",
              textAlign: "center",
              padding: "10px 10px",
              position: "relative",
              left: "15px",
              top: 13,
              zIndex: "-99px",
              transform: "scale(1)",
              marginLeft: 25,
            }}
          >
            <div style={{ display: "flex", columnGap: "10px" }}>
              <PersonIcon style={{ color: "#2196f3" }} />
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Profile
              </button>
            </div>
            <hr
              style={{
                marginTop: 10,
                height: "1px",
                backgroundColor: "#ccc",
                border: "none",
              }}
            />

            <div style={{ display: "flex", columnGap: "10px", marginTop: 10 }}>
              <PowerSettingsNewIcon style={{ color: "#2196f3" }} />
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
            </div>
          </Paper>
        </Popper>
      </div>
    </ClickAwayListener>
  );
}
