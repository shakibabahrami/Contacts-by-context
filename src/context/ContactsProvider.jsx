import React, { useEffect } from "react";
import { useReducer, createContext, useContext, useState } from "react";
import Data from "../components/db.json";

const ContactsContext = createContext();
const initialState = JSON.parse(localStorage.getItem("data")) || [];
// const initialState = [];

const inputs = [
  { type: "text", name: "name", placeholder: "Name" },
  { type: "text", name: "lastName", placeholder: "LastName" },
  { type: "text", name: "email", placeholder: "Email" },
  { type: "text", name: "phone", placeholder: "Phone" },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "SETDATA":
      console.log(action);
      return state;
    case "ADD":
      return [...state, action.payload];

    case "DELETE":
      return action.payload;

    case "EDIT":
      console.log(state, action.payload.contact);
      state.splice(action.payload.editingIndex, 1, action.payload.contact);
      return [...state];

    default:
      throw new Error("invalid action");
  }
};

const ContactsProvider = ({ children }) => {
  // useEffect(() => {
  //   fetch(Data)
  //     .then((response) => response.json())
  //     .then((data) => dispatchContacts({ type: "SETDATA", payload: data }));
  // }, []);

  const [isEditing, setIsEditing] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [showCheckbox, setShowCheckbox] = useState(false);
  const [selectedArray, setSelectedArray] = useState([]);
  const [contacts, dispatchContacts] = useReducer(reducer, initialState);
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [inputEdith, setInputEdith] = useState(contact);
  localStorage.setItem("data", JSON.stringify(contacts));
  console.log(contacts);

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
        showCheckbox,
        setShowCheckbox,
        selectedArray,
        setSelectedArray,
        isSearching,
        setIsSearching,
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
