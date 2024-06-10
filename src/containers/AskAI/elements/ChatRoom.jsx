import React, { useState } from "react";
import { Chat } from "./Chat";
import { ChatForm } from "./ChatForm";
import moment from "moment";
import Link from "next/link";
import profileImage from "../../../../public/images/profileImage.png";
import aiRobot from "../../../../public/images/aiRobot.png";
import { useScreenWidth } from "@/hooks";
import { ArrowRightIcon } from "@/svgs/ArrowRightIcon";
import { useInbox } from "@/contexts/Inbox";
import Image from "next/image";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { DotMenu } from "@/svgs/icons";

export const ChatRoom = () => {
  const width = useScreenWidth();
  const { onSelectContact } = useInbox();
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello There! You can ask anything you want, i am here to help!",
      time: moment(),
      user: {
        image: aiRobot,
        firstName: "John",
        lastName: "Wick",
      },
    },
  ]);

  const sendMessage = ({ text, attachment }) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      attachment,
      time: moment(),
      status: messages.length >= 2 ? "delivered" : "alldone",
      user: {
        image: profileImage,
        id: 2,
        firstName: "John",
        lastName: "Doe",
      },
    };
    setMessages([...messages, newMessage]);
  };

  const handleBack = () => {
    onSelectContact({});
  };

  return (
    <div className="w-full mt-6 relative">
      <div className="bg-white rounded-2xl">
        <div className="text-white h-16 py-3 border-b text-lg flex items-center relative ">
          <div
            className="flex h-10 w-10 min-w-[2.5rem] border-grey-100 border items-center justify-center rounded-full xl:hidden absolute cursor-pointer top-3"
            onClick={handleBack}
          >
            <ArrowRightIcon className="text-black transform rotate-180" />
          </div>
          <div className="flex items-center gap-2.5 text-base font-semibold text-center xl:text-left w-full">
            <div>
              <Image
                className="rounded-full"
                src={aiRobot}
                alt=""
                width={40}
                height={40}
              />
            </div>
            <div>
              <h5 className="text-grey-400 ">AI</h5>
              <Link href="#" className="text-grey-400 decoration-primary ">
                Career Match
              </Link>
            </div>
          </div>
          <div>
            <Menu as="div" className="relative">
              <Menu.Button className="h-8 w-8 text-sm flex items-center justify-center rounded-full hover:border-primary  border border-dark-700">
                <DotMenu
                  className={`min-w-6 min-h-6 flex items-center rotate-90 relative text-dark-700 hover:text-primary`}
                  aria-hidden="true"
                />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`${
                          active ? "bg-gray-100" : ""
                        } block px-4 py-2 text-sm text-gray-700`}
                      >
                        Update Profile Image
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/notifications"
                        className={`${
                          active ? "bg-gray-100" : ""
                        } block px-4 py-2 text-sm text-gray-700`}
                      >
                        Account Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`${
                          active ? "bg-gray-100" : ""
                        } block px-4 py-2 text-sm text-gray-700`}
                      >
                        Log Out
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
        <div className="flex-grow overflow-y-auto app-scroll max-h-[calc(100vh-40rem)] min-h-[calc(100vh-40rem)] ">
          <Chat messages={messages} />
        </div>
        <ChatForm onSendMessage={sendMessage} />
      </div>
    </div>
  );
};
