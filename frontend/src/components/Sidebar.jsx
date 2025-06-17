import ContactListItem from "./ContactListItem";
import AddContactButton from "./AddContactButton";
import { useContacts } from "../context/ContactsContextProvider";
import { useState } from "react";

/**
 * A sidebar with links to view each contact, or add new contacts.
 *
 * The contacts list can be filtered by name.
 */
export default function Sidebar() {

    const [searchTerm, setSearchTerm] = useState("");
    const { contacts, selectedContact, setSelectedContact } = useContacts();

    function handleSearchChange(e) {
        // Updating the searchTerm to be the value inputted by the user through onChange={handleSearchChange} in the input html tag for search bar
        // e.target is the event that is changed by user's input in the search bar  
        setSearchTerm(e.target.value);

    }

    // Filter contacts based on the search term
    function isMatch(contact) {
        return contact.name.toLowerCase().includes(searchTerm.toLowerCase());
    }
    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <nav className="side-bar">
            {/* Search box */}
            <header>
                <h2>Friends</h2>
                <input type="text" value={searchTerm} onChange={handleSearchChange} />
            </header>

            {/* List of contacts */}
            <section>
                <ul>
                    {filteredContacts.map((contact) => (
                        <ContactListItem key={contact._id}
                            contact={contact}
                            onContactClick={setSelectedContact}
                            isActive={contact._id == selectedContact?._id}
                        />
                    ))}
                </ul>
            </section>

            {/* Add contact button */}
            <footer>
                <AddContactButton />
            </footer>
        </nav>
    );
}

/* 
for (let i = 0;  i < contacts.length; i++){
    contactListItem.push(
        <ContactListItem key={contacts[i]._id} contact={contacts[i]} /> 
        );
    } 
    Need to give key for each contact as you React needs to uniquely identify which contact
    associates with what "key" like an id


Using ? in selectedContact?._id is useful as
if the selectedContact is not null the id is returned and if it is null, then inst
ead of throwing an exception, undefined is returned. Avoids handling uncessary exception handling

*/