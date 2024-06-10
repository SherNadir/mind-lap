import { Icon } from "@/svgs";
import React, { useState } from "react";
import cls from "classnames";

export const ChatForm = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [externalUpload, setExternalUpload] = useState([]);

  const handleSend = () => {
    if (message.trim() || externalUpload?.length > 0) {
      const data = { text: message, attachment: externalUpload };
      onSendMessage(data);
      setMessage("");
      setExternalUpload([]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const deleteFile = (fileId) => {
    setExternalUpload(externalUpload.filter((file) => file.id !== fileId));
  };

  return (
    <div className="p-4 border-t border-grey-100 flex flex-col">
      <div className="flex items-start space-x-2">
        <div className="w-full relative flex flex items-center ">
          <div
            className={cls`relative w-full items-center flex z-[2]  ${
              externalUpload.length > 0
                ? "border border-grey-100 border border-grey-100 rounded-[1.875rem] flex flex-col px-5 py-3"
                : ""
            } `}
          >
            <div className="flex items-center justify-between w-full">
              <input
                className={` w-full h-11 min-h-11 max-h-11 appearance-none focus:outline-none focus:ring-grey-500 ${
                  externalUpload.length > 0
                    ? "h-auto ring-0"
                    : "ring-1 ring-grey-100 px-5"
                } rounded-[1.875rem] font-medium text-sm text-left text-grey-400 placeholder:font-medium placeholder:text-sm placeholder:text-grey-400  pr-10`}
                value={message}
                placeholder="Type your message"
                type={externalUpload.length > 0 ? "textarea" : "text"}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
          </div>
        </div>
        <Icon
          name="send"
          className={`h-11 w-11 min-w-[2.75rem] ${
            externalUpload.length > 0 ? "mt-4" : ""
          }`}
          filled
          onClick={handleSend}
        />
      </div>
    </div>
  );
};
