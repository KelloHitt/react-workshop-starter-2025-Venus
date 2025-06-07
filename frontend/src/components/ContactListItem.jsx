import clsx from "clsx";
import { getPhotoUrl } from "../util/image-utils";

/**
 * A card / link to appear on the sidebar. When clicked, will allow the user to view
 * detailed info about that contact.
 */
export default function ContactListItem({ contact }) {
    return (
        <li className="contact-list-item">
            <img src={getPhotoUrl(contact.photoUrl)} />
            {contact.name}
        </li>
    );
} 