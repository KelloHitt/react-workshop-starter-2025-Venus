import { useState, createContext, useContext } from "react";
import { INITIAL_CONTACTS } from "../data/initial-contacts";

const ContactContext = createContext();

export function useContacts() {
    return useContext(ContactsContext);
}

export default function ContactsContextProvider({ children }) {

    const [contacts, setContacts] = useState(INITIAL_CONTACTS);
    const [selectedContact, setSelectedContact] = useState(INITIAL_CONTACTS[0]);

    const context = {

    }
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