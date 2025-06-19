import { useState, createContext, useContext } from "react";
import { retrieveContacts } from "../api/api";

// Creating a context object to set up a place where data is going to be stored
// createContext() is run once when the module is loaded at app startup,
// not each time the component renders — it defines a shared context object.
const ContactsContext = createContext();

// Using a custom hook so that any component that imports this custom hook can access all of the data stored in the context
export function useContacts() {
    return useContext(ContactsContext);
}

export default function ContactsContextProvider({ children }) {

    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);

    async function fetchContacts() {
        const data = await retrieveContacts();
        console.log("Fetched contacts:", data);
    }

    fetchContacts();

    async function editContact(contact) {
        console.log("Editing contact:", contact);
    }

    async function deleteContact(id) {
        console.log("Deleting contact with id:", id);
    }

    const context = {
        contacts,
        selectedContact,
        setSelectedContact,
        setContacts,
        editContact,
        deleteContact
    }

    // The value context is available to any descendant component (i.e child) that wants to access it which in this
    // case, all components are "children"  of App
    return (
        <ContactsContext.Provider value={context}>
            {children}
        </ContactsContext.Provider>
    )
}



/*
ContactContext is the context object and if this is accessed from anywhere then it accesses
the data within the object

useContext is a react hook 

chilren is special property which indicates a child compoent 
*/ 