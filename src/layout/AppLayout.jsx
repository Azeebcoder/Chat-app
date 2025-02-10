import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import ChatLists from "./ChatLists";
import ChatsData from "../temp/ChatsData.js";

const AppLayout = () => {
  
  return (
    <>
      <Header />
      <div className="grid grid-cols-3 px-3">
        <ChatLists chats={ChatsData} />
        <Outlet/>
      </div>
    </>
  );
};

export default AppLayout;
