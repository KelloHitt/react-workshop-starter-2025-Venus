// Application entry point
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ContactsContextProvider from "./context/ContactsContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContactsContextProvider>
      <App />
    </ContactsContextProvider>
  </React.StrictMode>
);

/*
As <App /> is wrapped around ContactsContextProvider object, the entire application
will be bale to access the context information provided by the ContactsContextProvider object

*/



