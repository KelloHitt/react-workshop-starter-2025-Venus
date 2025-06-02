import { DEFAULT_IMAGE } from "./util/image-utils";
import ContactDisplay from "./components/ContactDisplay";

export default function App() {
  return (
    <>
      {/* TODO Add sidebar here - contains contacts */}

      <main className="main-area">
        {/* TODO Contact display goes here */}
        <ContactDisplay />

        {/* TODO Edit / Delete buttons section goes here */}
        <section style={{ display: flex, gap: "1rem" }}>
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