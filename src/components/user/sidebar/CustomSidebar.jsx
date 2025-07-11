import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import Style from "./Sidebar.module.css";
export default function CustomSidebar() {
  return (
    <div>
      <Sidebar className={Style.side}>
        <Menu
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: "#13395e",
                color: "#b6c8d9",
              },
              '&:hover': {
          backgroundColor: '#cb4a4a',
          color: '#fff',
        },
            },
          }}
        >
          <MenuItem
            className={Style.item1}
            component={<Link to="/profile/Info" />}
          >
            {" "}
            Info
          </MenuItem>
          <MenuItem className={Style.item2} component={<Link to="/profile/Orders" />}>
            {" "}
           Orders
          </MenuItem>
          
        </Menu>
      </Sidebar>
      
    </div>
  );
}
