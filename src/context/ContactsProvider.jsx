import React from "react";
import { useReducer, createContext, useContext, useState } from "react";

const ContactsContext = createContext();
// const initialState = JSON.parse(localStorage.getItem("data")) || [];
const initialState =  [];

const inputs = [
  { type: "text", name: "name", placeholder: "Name" },
  { type: "text", name: "lastName", placeholder: "LastName" },
  { type: "text", name: "email", placeholder: "Email" },
  { type: "text", name: "phone", placeholder: "Phone" },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "DELETE":
      return action.payload;

    default:
      throw new Error("invalid action");
  }
};

const ContactsProvider = ({ children }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [contacts, dispatchContacts] = useReducer(reducer, initialState);
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [inputEdith, setInputEdith] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  // console.log("provider", contacts);
  // localStorage.setItem("data", JSON.stringify(contacts));
  console.log(inputEdith);

  // const

  return (
    <ContactsContext.Provider
      value={{
        inputs,
        contacts,
        dispatchContacts,
        contact,
        setContact,
        isEditing,
        setIsEditing,
        inputEdith,
        setInputEdith,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export { ContactsProvider };
export const useContactsContext = () => {
  return useContext(ContactsContext);
};
