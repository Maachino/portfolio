import { Spin as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import { blue } from "@mui/material/colors";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import WorkIcon from "@mui/icons-material/Work";
import LogoDevIcon from "@mui/icons-material/LogoDev";

function Menu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="menu">
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <Paper sx={{ width: 150, maxWidth: "100%" }}>
          <MenuList>
            <MenuItem>
              <Avatar sx={{ bgcolor: blue[400] }}>
                <ListItemIcon>
                  <InfoIcon fontSize="large" />
                </ListItemIcon>
              </Avatar>
              <ListItemText>About Me</ListItemText>
            </MenuItem>
            <MenuItem>
              <Avatar sx={{ bgcolor: blue[400] }}>
                <ListItemIcon>
                  <WorkIcon fontSize="large" />
                </ListItemIcon>
              </Avatar>
              <ListItemText>Projects</ListItemText>
            </MenuItem>
            <MenuItem>
              <Avatar sx={{ bgcolor: blue[400] }}>
                <ListItemIcon>
                  <LogoDevIcon fontSize="large" />
                </ListItemIcon>
              </Avatar>
              <ListItemText>Skills</ListItemText>
            </MenuItem>
            <MenuItem>
              <Avatar sx={{ bgcolor: blue[400] }}>
                <ListItemIcon>
                  <ContactPageIcon fontSize="large" />
                </ListItemIcon>
              </Avatar>
              <ListItemText>Contact</ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      )}
    </div>
  );
}

export default Menu;
