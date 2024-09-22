import React from "react";
import Styles from "./SidebarButtons.module.css";
import { useContactsContext } from "../context/ContactsProvider";

function SidebarButtons() {
  const {
    contacts,
    dispatchContacts,
    contact,
    setContact,
    isEditing,
    showCheckbox,
    selectedArray,
    setSelectedArray,
    setShowCheckbox,
    isSearching,
    setIsSearching,
  } = useContactsContext();

  const deleteButton = () => {
    setShowCheckbox(!showCheckbox);
  };
  const deleteSelected = () => {
    let res = contacts;
    contacts.forEach((contact) => {
      selectedArray.includes(contact.id) &&
        (res = res.filter((c) => c.id !== contact.id));
    });
    dispatchContacts({ type: "DELETE", payload: res });
  };

  const searchButton = () => {
    console.log("search");
    setIsSearching(!isSearching);
  };

  return (
    <div className={Styles.sidebarButtons}>
      <button onClick={deleteButton}>Group Delete</button>
      <button onClick={searchButton}>Search Contact</button>
      {showCheckbox && (
        <button
          className={Styles.deleteSelectedButton}
          onClick={deleteSelected}
        >
          Delete Selected Contacts
        </button>
      )}
    </div>
  );
}

export default SidebarButtons;
