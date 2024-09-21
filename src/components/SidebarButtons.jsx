import React from "react";
import Styles from "./SidebarButtons.module.css";

function SidebarButtons() {
  let res = [];

  const deleteButton = () => {};
  const showCheckbox = false;
  const deleteSelected = () => {
    // contacts.forEach((contact) => {
    //   selectedArray.includes(contact.id) &&
    //     (res = contacts.filter((c) => c.id !== contact.id));
    // });
    // console.log(res);
    // console.log(contacts);
    // console.log(selectedArray);
    // setContacts(res);
  };

  const themeButton = () => {};

  return (
    <div className={Styles.sidebarButtons}>
      <button onClick={deleteButton}>Delete</button>
      <button onClick={themeButton}>Theme</button>
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
