import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CloseIcon from "@mui/icons-material/Close";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import HelpIcon from "@mui/icons-material/Help";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";

const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
  const [value, setValue] = React.useState(0);
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <DashboardIcon className="icon_header" />
          Dashboard
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          <CloseIcon />
        </span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <DashboardIcon className="icon" />
            Dashboard <KeyboardArrowRightIcon className="icon-arrow" />
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <ProductionQuantityLimitsIcon className="icon" />
            Product
            <KeyboardArrowRightIcon className="icon-arrow" />
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <PersonIcon className="icon" />
            Customers
            <KeyboardArrowRightIcon className="icon-arrow" />
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <AccountBalanceWalletIcon className="icon" />
            Income
            <KeyboardArrowRightIcon className="icon-arrow" />
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <PriceChangeIcon className="icon" />
            Promote
            <KeyboardArrowRightIcon className="icon-arrow" />
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <HelpIcon className="icon" />
            Help
            <KeyboardArrowRightIcon className="icon-arrow" />
          </a>
        </li>
      </ul>
      <div className="box_img">
        <Box sx={{ width: 260 }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <div className="inner_img">
              <div className="img_name">
                <img
                  src="https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg"
                  className="image"
                  style={{ width: "45px", height: "45px" }}
                />
                Aashis Gupta
              </div>
              <KeyboardArrowDown />
            </div>
          </BottomNavigation>
        </Box>
      </div>
    </aside>
  );
};

export default Sidebar;
