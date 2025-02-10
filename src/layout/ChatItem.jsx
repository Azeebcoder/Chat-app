import { Link, useParams } from "react-router-dom";

const ChatItem = ({chat}) => {
  const { chatId, name, profilePicture, messageContent, timestamp } = chat; 
  const { chatid } = useParams();
  const isActive = chatId === chatid;

  // Format time as "HH:MM AM/PM"
  const formatTime = (time) => {
    return new Date(time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Link to={`/chat/${chatId}`}>
      <div
        className={`flex items-center p-3 rounded-lg mb-2 cursor-pointer transition-all
        ${isActive ? "bg-black text-white" : "bg-white text-black"}
        ${isActive ? "hover:bg-gray-950" : "hover:bg-gray-200 hover:text-black"}`}
      >
        {/* Profile Picture */}
        <img
          src={profilePicture || "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"}
          alt={`${name}'s profile`}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />

        {/* Chat Info */}
        <div className="flex-1">
          <h2 className="text-lg font-medium">{name}</h2>
          <p className="text-sm text-gray-500 truncate">{messageContent}</p>
        </div>

        {/* Time */}
        <div className="text-sm text-gray-500">
          {formatTime(timestamp)}
        </div>
      </div>
    </Link>
  );
};

export default ChatItem;
