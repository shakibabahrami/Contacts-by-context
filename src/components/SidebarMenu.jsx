import React from "react";
import Styles from "./SidebarMenu.module.css";
import SidebarButtons from "./SidebarButtons";
import { useContactsContext } from "../context/ContactsProvider";

function SidebarMenu() {
  const {
    contacts,
    dispatchContacts,
    setContact,
    setIsEditing,
    showCheckbox,
    selectedArray,
    setSelectedArray,
    isSearching,
    setIsSearching,
  } = useContactsContext();
  return (
    <div className={Styles.container}>
      <div className={Styles.iconContainer}>
        <span className={Styles.notebook}>📓</span>
      </div>
      <SidebarButtons />
      {!isSearching && <input className={Styles.searchBox} placeholder="Search here"></input>}
    </div>
  );
}

export default SidebarMenu;
