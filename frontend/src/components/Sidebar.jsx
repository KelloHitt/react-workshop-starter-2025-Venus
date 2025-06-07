import ContactListItem from "./ContactListItem";
import AddContactButton from "./AddContactButton";

/**
 * A sidebar with links to view each contact, or add new contacts.
 *
 * The contacts list can be filtered by name.
 */
export default function Sidebar({ contacts }) {
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
                    <ContactListItem contact={contacts[0]} />

                    <ContactListItem contact={contacts[1]} />

                    <ContactListItem contact={contacts[2]} />
                </ul>
            </section>

            {/* Add contact button */}
            <footer>
                <AddContactButton />
            </footer>
        </nav>
    );
}
