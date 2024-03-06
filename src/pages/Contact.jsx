import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
    return (
        <section>
            <Banner title={"Contact me"}/>
            <section className="h-[80vh] w-full background justify-evenly flex-wrap">
                <ContactForm />
            </section>
        </section>
    )
}