import React from "react";
import { useParams } from "react-router-dom";
import ChatsData from "../../temp/ChatsData.js";
import MessageData from "../../temp/MessageData.js"
import Message from "../../components/Message.jsx";

const Chat = () => {
  const { chatid } = useParams();
  const chat = ChatsData.find((item) => item.chatId === chatid);
  const user ={
    id:1,
    name:"sumit"
  }
  return (
    <>
      <div className="h-[80vh] p-5">
      {MessageData?.map((message) => (
        <Message message={message} user={user}/> 
      ))}
      </div>
    </>
  );
};

export default Chat;
