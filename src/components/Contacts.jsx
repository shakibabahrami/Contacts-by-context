import React, { useState } from "react";
// import { useContext } from "react";
// import ContactsContext from "../App";
import { useContactsContext } from "../context/ContactsProvider";
import styles from "./Contacts.module.css";
import { v4 } from "uuid";

function Contacts() {
  const {
    inputs,
    contacts,
    dispatchContacts,
    contact,
    setContact,
    isEditing,
    setIsEditing,
    inputEdith,
  } = useContactsContext();
  const [alert, setAlert] = useState("");

  const changeHandler = (event) => {
    if (isEditing) {
      // console.log(isEditing);
      const name = event.target.name;
      const value = event.target.value;
      // console.log([name]);
      setContact((contact) => ({ ...contact, [name]: value }));
    }
    const name = event.target.name;
    const value = event.target.value;
    // console.log([name]);
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("please enter a valid data");
      return;
    }
    setAlert("");
    const newContact = { ...contact, id: v4() };
    dispatchContacts({ type: "ADD", payload: newContact });
    setContact({
      id: "",
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  const editHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("please enter a valid data");
      return;
    }
    setAlert("");
    // console.log(contact);
    // console.log(contacts);

    const editingIndex = contacts.findIndex((c) => c.id === contact.id);
    console.log(editingIndex);

    dispatchContacts({ type: "EDIT", payload: { editingIndex, contact } });
    setContact({
      id: "",
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
    setIsEditing(false)
  };
  // console.log(contact);

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Contacts</h3>
      <div className={styles.inputs}>
        {inputs.map((input, index) => (
          <input
            className={styles.input}
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}
      </div>
      {!isEditing ? (
        <button onClick={addHandler}>Add</button>
      ) : (
        <button onClick={editHandler}>Edit</button>
      )}
      <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
    </div>
  );
}

export default Contacts;
