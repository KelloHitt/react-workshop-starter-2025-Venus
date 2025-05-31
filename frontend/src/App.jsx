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
      </main>

      {/* TODO Modal for adding new contacts */}

      {/* TODO Modal for editing existing contacts */}
    </>
  );
}


/* Timestamp - 00:06:09

jsx has similar syantx to html
{} lets us insert javascript expressions in html code e.g. src={DEFAULT_IMAGE}
In react to assign a class ot an elment use className instead of class
*/