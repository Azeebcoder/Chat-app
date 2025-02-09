import React, { useState,useEffect } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import HoverDetails from "../components/HoverDetails";
import SearchOverlay from "../components/SearchOverlay";

const Header = () => {

  const [isSearch,setIsSearch] = useState(false);
  const [isNewGroup,setIsNewGroup] = useState(false);
  const [isNotifications,setIsNotifications] = useState(false);
  const [isProfile,setIsProfile] = useState(false);
  const [isLogOut,setIsLogOut] = useState(false);



  return (
    <>
      <nav className="w-full bg-gray-700 px-8 py-4 text-white font-bold">
        <ul className="flex justify-between">
          <li>Sumyy Chat</li>
          <li className="flex gap-8">
            <HoverDetails text={"Search"} handleCLick={setIsSearch} show={isSearch}>
              <FaSearch />
            </HoverDetails>
            <HoverDetails text={"New Group"} handleCLick={setIsNewGroup} show={isNewGroup}>
              <FaPlus />
            </HoverDetails>
            <HoverDetails text={"Notifications"} handleCLick={setIsNotifications} show={isNotifications}>
              <IoMdNotifications />
            </HoverDetails>
            <HoverDetails text={"Profile"} handleCLick={setIsProfile} show={isProfile}>
              <IoPerson />
            </HoverDetails>
            <HoverDetails text={"Log Out"} handleCLick={setIsLogOut} show={isLogOut}>
              <ImExit />
            </HoverDetails>
          </li>
        </ul>
      </nav>

      {/* Search Overlay */}
      {isSearch ? <SearchOverlay handleCloseSearch={()=>setIsSearch(!isSearch)}/>:<></>}
    </>
  );
};

export default Header;
