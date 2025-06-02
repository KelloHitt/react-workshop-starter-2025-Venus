import { getPhotoUrl } from "../util/image-utils";

// Creating a componenet for displaying the contact
export default function ContactDisplay(props) {

    const contact = props.contact;

    return (
        <section className="contact-display">
            <img src={getPhotoUrl(contact.photoUrl)} />
            <h1>{contact.name}</h1>
            <h3>{contact.phoneNumber}</h3>
            <p>Fun fact: {contact.funFact}</p>
        </section>

    )
}