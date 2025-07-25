import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import Style from "./Sidebar.module.css";
import { IoPerson } from "react-icons/io5";

import { MdEdit } from "react-icons/md";
import { FaShopify } from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";

export default function CustomSidebar() {
  const[iscollapsed,setIscollapsed]=useState(false);
  const Togglecollapsed = ()=>{
setIscollapsed(!iscollapsed);
  }
  return (
    <div>
      <Sidebar collapsed={iscollapsed} className={Style.side}>

      {iscollapsed ? <HiChevronRight 
        onClick={Togglecollapsed } 
        className={Style.icon}
        size={30} // الحجم
      /> : <HiChevronLeft 
        onClick={Togglecollapsed } 
        className={Style.icon}
        size={30} // الحجم
      />}
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
           
            <IoPerson /> Info
          </MenuItem>
          <MenuItem className={Style.item2} component={<Link to="/profile/Orders" />}>
           
          <FaShopify />  Orders
          </MenuItem>
                <MenuItem className={Style.item2} component={<Link to="/profile/EditImg"/>}>
           
          <MdEdit /> Edit Image
          </MenuItem>
        </Menu>
      </Sidebar>
      
    </div>
  );
}
