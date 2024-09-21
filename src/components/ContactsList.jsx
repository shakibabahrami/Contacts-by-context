import React from "react";
import Styles from "./ContactsList.module.css";
import ContactItem from "./ContactItem";
import { useContactsContext } from "../context/ContactsProvider";

function ContactsList() {
  const { contacts, dispatchContacts, contact, setContact, isEditing } =
    useContactsContext();

  return (
    <div className={Styles.container}>
      <h3>Contacts List</h3>
      <ContactItem />
    </div>
  );
}

export default ContactsList;
