import { useState } from "react";
import React from "react";
import { useReducer, createContext } from "react";
import Contacts from "./components/Contacts";
import Styles from "./App.module.css";
import ContactsList from "./components/ContactsList";
import SidebarMenu from "./components/SidebarMenu";
import { useContactsContext } from "./context/ContactsProvider";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return;
  }
};

function App() {
  const { contacts } = useContactsContext();
  // console.log(contacts.length);
  return (
    <div className={Styles.container}>
      <div className={Styles.leftSideContainer}>
        <Contacts />
        {contacts.length ? (
          <ContactsList />
        ) : (
          <>
            <h3 className={Styles.header}>Contacts List</h3>
            <p className={Styles.nothingAdded}>No Contacts Added yet!</p>
          </>
        )}
      </div>
      <SidebarMenu />
    </div>
  );
}

export default App;
