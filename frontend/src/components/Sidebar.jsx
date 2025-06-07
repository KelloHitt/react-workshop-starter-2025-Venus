import ContactListItem from "./ContactListItem";
import AddContactButton from "./AddContactButton";

/**
 * A sidebar with links to view each contact, or add new contacts.
 *
 * The contacts list can be filtered by name.
 */
export default function Sidebar({ contacts }) {

    const contactListItems = [];
    for (let i = 0; i < contacts.length; i++) {
        contactListItems.push(
            <ContactListItem key={contacts[i]._id} contact={contacts[i]} />
        );
    }
    return (
        <nav className="side-bar">
            {/* Search box */}
            <header>
                <h2>Friends</h2>
                <input type="text" />
            </header>

            {/* List of contacts */}
            <section>
                <ul>
                    {contactListItems}
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
*/