import clsx from "clsx";
import { getPhotoUrl } from "../util/image-utils";

/**
 * A card / link to appear on the sidebar. When clicked, will allow the user to view
 * detailed info about that contact.
 */
export default function ContactListItem({ contact, onContactClick }) {

    function handleClick() {
        // TODO Call on the onContactClickFunction with the contact
        onContactClick(contact);
    }
    return (
        <li className="contact-list-item" onClick={handleClick}>
            <img src={getPhotoUrl(contact.photoUrl)} />
            {contact.name}
        </li>
    );
} 