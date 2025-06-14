import { getPhotoUrl } from "../util/image-utils";
import { useContacts } from "../context/ContactsContextProvider";

// Creating a componenet for displaying the contact
export default function ContactDisplay() {

    const { selectedContact } = useContacts();


    // object destructuring in javascript instead of having to repeatedly use contacts.photoUrl, contacts.funFact etc
    const { name, phoneNumber, funFact, photoUrl } = selectedContact;

    return (
        <section className="contact-display">
            <img src={getPhotoUrl(photoUrl)} />
            <h1>{name}</h1>
            <h3>{phoneNumber}</h3>
            <p>Fun fact: {funFact}</p>
        </section>

    )
}
/* 
Instead of having 
export default function ContactDisplay(props) {const contact = props.contact; ...} to simplify the code 
just use export default function ContactDisplay({contacts}) {...}

*/