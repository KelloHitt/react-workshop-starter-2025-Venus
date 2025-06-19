import ContactDisplay from "./components/ContactDisplay";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import EditContactModel from "./components/EditContactModel";


export default function App() {

  const [isEditContactModalVisible, setEditContactModalVisible] = useState(false);

  return (
    <>
      {/* TODO Add sidebar here - contains contacts */}
      <Sidebar />

      <main className="main-area">
        {/* TODO Contact display goes here */}
        <ContactDisplay />

        {/* TODO Edit / Delete buttons section goes here */}
        <section style={{ display: "flex", gap: "1rem" }}>
          <button className="button" onClick={() => setEditContactModalVisible(true)}>Edit</button>
          <button className="button red">Delete</button>
        </section>
      </main>

      {/* TODO Modal for adding new contacts */}
      <EditContactModel
        visible={isEditContactModalVisible}
        onClose={() => setEditContactModalVisible(false)}
      />
      {/* TODO Modal for editing existing contacts */}
    </>
  );
}


/* Timestamp - 02:47:21

jsx has similar syantx to html
{} lets us insert javascript expressions in html code e.g. src={DEFAULT_IMAGE}
In react to assign a class to an element use className instead of class

useState(INITIAL_CONTACTS[0]) it's only used to define the state at the beginning, not to control updates. 
The updates happen later using the setSelectedContact (can be called anything)
function when the user interacts with the UI.
*/