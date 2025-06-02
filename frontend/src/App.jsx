import ContactDisplay from "./components/ContactDisplay";
import Sidebar from "./components/Sidebar";
import { INITIAL_CONTACTS } from "./data/initial-contacts";

export default function App() {
  return (
    <>
      {/* TODO Add sidebar here - contains contacts */}
      <Sidebar />

      <main className="main-area">
        {/* TODO Contact display goes here */}
        <ContactDisplay contact={INITIAL_CONTACTS[0]} />

        {/* TODO Edit / Delete buttons section goes here */}
        <section style={{ display: "flex", gap: "1rem" }}>
          <button className="button">
            Edit
          </button>
          <button className="button red">
            Delete
          </button>
        </section>
      </main>

      {/* TODO Modal for adding new contacts */}

      {/* TODO Modal for editing existing contacts */}
    </>
  );
}


/* Timestamp - 00:28:10

jsx has similar syantx to html
{} lets us insert javascript expressions in html code e.g. src={DEFAULT_IMAGE}
In react to assign a class to an element use className instead of class
*/