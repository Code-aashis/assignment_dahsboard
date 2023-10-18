import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import DashboardIcon from "@mui/icons-material/Dashboard";
const Header = ({ OpenSidebar }) => {
  return (
    <header className="header">
      <div className="menu-icon">
        <DashboardIcon className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <h2 style={{ color: "black" }}>Hello Aashis👏</h2>
      </div>
      <div className="header-right">
        <input type="text" placeholder="Search" />
        <SearchIcon className="icon icon_search" />
      </div>
    </header>
  );
};

export default Header;
