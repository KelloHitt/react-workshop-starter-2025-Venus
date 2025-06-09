import ContactDisplay from "./components/ContactDisplay";
import Sidebar from "./components/Sidebar";
import { INITIAL_CONTACTS } from "./data/initial-contacts";
import { useState } from "react";


export default function App() {

  // TODO Add state for the currently selected contact. setSelectedContact function changes state of the contact
  const [selectedContact, setSelectedContact] = useState(INITIAL_CONTACTS[0]);

  return (
    <>
      {/* TODO Add sidebar here - contains contacts */}
      <Sidebar contacts={INITIAL_CONTACTS}
        onContactClick={setSelectedContact}
        selectedContact={selectedContact}
      />

      <main className="main-area">
        {/* TODO Contact display goes here */}
        <ContactDisplay contact={selectedContact} />

        {/* TODO Edit / Delete buttons section goes here */}
        <section style={{ display: "flex", gap: "1rem" }}>
          <button className="button">Edit</button>
          <button className="button red">Delete</button>
        </section>
      </main>

      {/* TODO Modal for adding new contacts */}

      {/* TODO Modal for editing existing contacts */}
    </>
  );
}


/* Timestamp - 00:56:31

jsx has similar syantx to html
{} lets us insert javascript expressions in html code e.g. src={DEFAULT_IMAGE}
In react to assign a class to an element use className instead of class
*/