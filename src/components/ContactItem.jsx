import React from "react";
import { useContactsContext } from "../context/ContactsProvider";
import Styles from "./ContactsItem.module.css";

function ContactItem() {
  const {
    inputs,
    contacts,
    dispatchContacts,
    contact,
    setContact,
    isEditing,
    setIsEditing,
    inputEdith,
    setInputEdith,
  } = useContactsContext();

  const showCheckbox = false;
  const checkboxHandler = (id) => {
    // selectedArray.findIndex((item) => item === id) === -1
    //   ? setSelectedArray((selectedArray) => [...selectedArray, id])
    //   : setSelectedArray((selectedArray) => [
    //       ...selectedArray.filter((item) => item !== id),
    //     ]);
  };

  const deleteHandler = (id) => {
    console.log(id);
    const newContacts = contacts.filter((contact) => contact.id !== id);
    console.log("deleted", newContacts);
    dispatchContacts({ type: "DELETE", payload: newContacts });
  };

  const editHandler = (id) => {
    console.log(id);
    // setEditing(id);
    setIsEditing(true);
    // console.log(inputs);
    // <div className={Styles.inputs}>
      {inputs.map((input, index) => {
        const editingContact = contacts.find((contact) => contact.id === id);
        console.log(input);
        // console.log(editingContact.name);
        const a = editingContact.name;
        console.log(a);
        setInputEdith({name: editingContact.name,
            lastName: editingContact.lastName,
            email: editingContact.email,
            phone: editingContact.phone,})
      })}
    // </div>;
    // const contactToChange = contacts.filter((contact) => contact.id === id)[0];
    // setNameInput(contactToChange.name);
    // setLastNameInput(contactToChange.lastName);
    // setEmailInput(contactToChange.email);
    // setPhoneInput(contactToChange.phone);
    // const editingContact = {
    //   id: contactToChange.id,
    //   name: contactToChange.name,
    //   lastName: contactToChange.lastName,
    //   email: contactToChange.email,
    //   phone: contactToChange.phone,
    // };
    // setContact(editingContact);
  };

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {showCheckbox && (
            <input
              className={Styles.checkbox}
              type="checkbox"
              onClick={() => checkboxHandler(contact.id)}
            />
          )}
          <p>
            {contact.name} {contact.lastName}
          </p>
          <p>
            <span>📞</span> {contact.phone}{" "}
          </p>
          <p>
            <span>📧</span>
            {contact.email}
          </p>
          <span
            className={Styles.delete}
            onClick={() => deleteHandler(contact.id)}
          >
            🗑️
          </span>
          <span className={Styles.edit} onClick={() => editHandler(contact.id)}>
            ✏️
          </span>
        </li>
      ))}
    </ul>
  );
}

export default ContactItem;
