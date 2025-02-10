import React from 'react'

const Message = ({message,user}) => {
  const sameuser = message.id === user.id;
  console.log(sameuser)
  return (
<div className={`flex ${sameuser ? "justify-end" : "justify-start"} mb-2`}>
  <div
    className={`${
      sameuser ? "bg-blue-500 text-white rounded-tr-[0px] " : "bg-gray-200 text-black rounded-tl-[0px]"
    } p-3 rounded-lg max-w-xs`}
  >
    {/* Name */}
    <div className="font-medium">{message.name}</div>

    {/* Message Content */}
    <div className="text-sm">{message.content}</div>
  </div>
</div>
  )
}

export default Message