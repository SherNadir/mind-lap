"use client";
import React, { createContext, useCallback, useContext, useState } from "react";
import userImg from "../../public/images/profileImage.png";

const Inbox = createContext(false);

const data = [
  {
    id: 1,
    image: userImg,
    firstName: "Qasim",
    lastName: "Fida",
    clinicName: "Mount Sinai Hospital",
    lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
    newMessages: 2,
  },
  {
    id: 2,
    image: null,
    firstName: "John",
    lastName: "Wick",
    clinicName: "Mount Sinai Hospital",
    lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
    newMessages: 0,
  },
  {
    id: 3,
    image: userImg,
    firstName: "Qasim",
    lastName: "Fida",
    clinicName: "Mount Sinai Hospital",
    lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
    newMessages: 0,
  },
  {
    id: 4,
    image: null,
    firstName: "John",
    lastName: "Wick",
    clinicName: "Mount Sinai Hospital",
    lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
    newMessages: 2,
  },
  {
    id: 5,
    image: null,
    firstName: "Qasim",
    lastName: "Fida",
    clinicName: "Mount Sinai Hospital",
    lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
    newMessages: 2,
  },
  {
    id: 6,
    image: null,
    firstName: "John",
    lastName: "Wick",
    clinicName: "Mount Sinai Hospital",
    lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
    newMessages: 2,
  },
  {
    id: 7,
    image: null,
    firstName: "Qasim",
    lastName: "Fida",
    clinicName: "Mount Sinai Hospital",
    lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
    newMessages: 2,
  },
  {
    id: 8,
    image: null,
    firstName: "John",
    lastName: "Wick",
    clinicName: "Mount Sinai Hospital",
    lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
    newMessages: 2,
  },
  // {
  //   id: 9,
  //   image: null,
  //   firstName: "Qasim",
  //   lastName: "Fida",
  //   clinicName: "Mount Sinai Hospital",
  //   lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
  //   newMessages: 2,
  // },
  // {
  //   id: 10,
  //   image: null,
  //   firstName: "John",
  //   lastName: "Wick",
  //   clinicName: "Mount Sinai Hospital",
  //   lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
  //   newMessages: 2,
  // },
  // {
  //   id: 1,
  //   image: null,
  //   firstName: "Qasim",
  //   lastName: "Fida",
  //   clinicName: "Mount Sinai Hospital",
  //   lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
  //   newMessages: 2,
  // },
  // {
  //   id: 1,
  //   image: null,
  //   firstName: "John",
  //   lastName: "Wick",
  //   clinicName: "Mount Sinai Hospital",
  //   lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
  //   newMessages: 2,
  // },
  // {
  //   id: 1,
  //   image: null,
  //   firstName: "Qasim",
  //   lastName: "Fida",
  //   clinicName: "Mount Sinai Hospital",
  //   lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
  //   newMessages: 2,
  // },
  // {
  //   id: 1,
  //   image: null,
  //   firstName: "John",
  //   lastName: "Wick",
  //   clinicName: "Mount Sinai Hospital",
  //   lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
  //   newMessages: 2,
  // },
  // {
  //   id: 1,
  //   image: null,
  //   firstName: "Qasim",
  //   lastName: "Fida",
  //   clinicName: "Mount Sinai Hospital",
  //   lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
  //   newMessages: 2,
  // },
  // {
  //   id: 1,
  //   image: null,
  //   firstName: "John",
  //   lastName: "Wick",
  //   clinicName: "Mount Sinai Hospital",
  //   lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
  //   newMessages: 2,
  // },
  // {
  //   id: 1,
  //   image: null,
  //   firstName: "Qasim",
  //   lastName: "Fida",
  //   clinicName: "Mount Sinai Hospital",
  //   lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
  //   newMessages: 2,
  // },
  // {
  //   id: 1,
  //   image: null,
  //   firstName: "John",
  //   lastName: "Wick",
  //   clinicName: "Mount Sinai Hospital",
  //   lastMessageTime: new Date().setSeconds(new Date().getSeconds() - 30),
  //   newMessages: 2,
  // },
];

export const InboxProvider = ({ children }) => {
  const [selectedContact, setSelectedContact] = useState({});
  const [contacts, setContacts] = useState(data);
  const [user, setUser] = useState({ id: 1 });

  const resetInbox = () => setSelectedContact();

  const value = {
    selectedContact,
    contacts,
    user,
    onSelectContact: useCallback((a) => {
      setSelectedContact(a);
    }, []),
    setContacts: useCallback((a) => {
      setContacts(a);
    }, []),
    resetInbox: useCallback(() => {
      resetInbox();
    }, []),
  };

  return <Inbox.Provider value={value}>{children}</Inbox.Provider>;
};

export const useInbox = () => useContext(Inbox);
