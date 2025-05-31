import { DEFAULT_IMAGE } from "../util/image-utils"

// Creating a componenet for displaying the contact
export default function ContactDisplay() {
    return (
        <section className="contact-display">
            <img src={DEFAULT_IMAGE} />
            <h1>Contact names goes here</h1>
            <h3>022 498 3644</h3>
            <p>Fun fact goes here</p>
        </section>

    )
}