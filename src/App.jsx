import React from "react";
import Contacts from "./components/Contacts";
import Styles from "./App.module.css";
import ContactsList from "./components/ContactsList";
import SidebarMenu from "./components/SidebarMenu";
import { useContactsContext } from "./context/ContactsProvider";

function App() {
  const { contacts } = useContactsContext();
  
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
