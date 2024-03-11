import ContactForm from "../components/ContactForm";
import NavigationBar from "../components/NavigationBar";

export default function ContactPage() {
    return (
        <section>
            <NavigationBar />
            <section className="h-auto w-full background justify-evenly flex-wrap">
                <ContactForm />
            </section>
        </section>
    )
}