import { useState, createContext, useContext } from "react";
import { INITIAL_CONTACTS } from "../data/initial-contacts";

// Creating a context object
const ContactsContext = createContext();

export function useContacts() {
    return useContext(ContactsContext);
}

export default function ContactsContextProvider({ children }) {

    const [contacts, setContacts] = useState(INITIAL_CONTACTS);
    const [selectedContact, setSelectedContact] = useState(contacts[0]);

    const context = {
        contacts,
        selectedContact,
        setSelectedContact

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