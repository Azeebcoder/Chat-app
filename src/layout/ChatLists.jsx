import React from "react";
import ChatItem from "./ChatItem";
import { Link } from "react-router-dom";

const ChatLists = ({ chats }) => {
  return (
    <>
      <div className="flex flex-col py-4">
        {chats?.map((chat) => (
            <ChatItem key={chat.chatId} chat={chat} />
        ))}
      </div>
    </>
  );
};

export default ChatLists;
