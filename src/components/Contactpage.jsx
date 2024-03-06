import Banner from "./Banner";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <section>
            <Banner title={"Contact me"}/>
            <section className="h-[80vh] w-full background justify-evenly flex-wrap">
                <ContactForm />
            </section>
        </section>
    )
}