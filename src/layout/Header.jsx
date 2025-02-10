import React, { useState, useEffect } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import HoverDetails from "../components/HoverDetails";
import SearchOverlay from "../components/SearchOverlay";

const Header = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotifications, setIsNotifications] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isLogOut, setIsLogOut] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="w-full bg-gray-700 px-4 md:px-10 py-4 text-white font-bold">
        <div className="flex justify-between items-center">
          <span className="text-lg">Sumyy Chat</span>
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden block text-white focus:outline-none z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="text-2xl">&#9776;</span>
          </button>
          {/* Desktop Menu */}
          <ul
            className={`md:flex gap-8 ${
              isMenuOpen ? "flex" : "hidden"
            } md:block md:mt-0 flex-col md:flex-row absolute md:relative top-0 md:top-0 right-0 bg-gray-700 md:bg-transparent md:space-y-0 space-y-4 p-4 md:p-0 md:space-x-0 w-full md:w-auto py-20 h-full md:h-auto`}
          >
            <li className="flex items-center justify-center gap-4">
              <HoverDetails
                text={"Search"}
                handleCLick={setIsSearch}
                show={isSearch}
              >
                <FaSearch />
              </HoverDetails>
              {isMenuOpen?"Search":null}
            </li>
            <li className="flex items-center justify-center gap-4">
              <HoverDetails
                text={"New Group"}
                handleCLick={setIsNewGroup}
                show={isNewGroup}
              >
                <FaPlus />
              </HoverDetails>
              {isMenuOpen?"New Group":null}
            </li>
            <li className="flex items-center justify-center gap-4">
              <HoverDetails
                text={"Notifications"}
                handleCLick={setIsNotifications}
                show={isNotifications}
              >
                <IoMdNotifications />
              </HoverDetails>
              {isMenuOpen?"Notifications":null}
            </li>
            <li   className="flex items-center justify-center gap-4">
              <HoverDetails
                text={"Profile"}
                handleCLick={setIsProfile}
                show={isProfile}
              >
                <IoPerson />
              </HoverDetails>
              {isMenuOpen?"Profile":null}
            </li>
            <li  className="flex items-center justify-center gap-4">
              <HoverDetails
                text={"Log Out"}
                handleCLick={setIsLogOut}
                show={isLogOut}
              >
                <ImExit />
              </HoverDetails>
              {isMenuOpen?"Log Out":null}
            </li>
          </ul>
        </div>
      </nav>

      {/* Search Overlay */}
      {isSearch ? (
        <SearchOverlay handleCloseSearch={() => setIsSearch(!isSearch)} />
      ) : (
        <></>
      )}
      {isNewGroup ? (
        <SearchOverlay handleCloseSearch={() => setIsNewGroup(!isNewGroup)} />
      ) : (
        <></>
      )}
      {isNotifications ? (
        <SearchOverlay
          handleCloseSearch={() => setIsNotifications(!isNotifications)}
        />
      ) : (
        <></>
      )}
      {isProfile ? (
        <SearchOverlay handleCloseSearch={() => setIsProfile(!isProfile)} />
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
