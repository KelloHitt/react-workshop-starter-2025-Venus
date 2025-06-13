import clsx from "clsx";
import { getPhotoUrl } from "../util/image-utils";

/**
 * A card / link to appear on the sidebar. When clicked, will allow the user to view
 * detailed info about that contact.
 */
export default function ContactListItem({ contact, onContactClick, isActive }) {

    function handleClick() {
        // TODO Call on the onContactClickFunction with the contact
        onContactClick(contact);
    }
    return (
        <li className={clsx("contact-list-item", isActive && "active")} onClick={handleClick}>
            <img src={getPhotoUrl(contact.photoUrl)} />
            {contact.name}
        </li>
    );
}

/*
clsx is a helper function which skips contacts that are null or undefined

*/