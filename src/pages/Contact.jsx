import ContactForm from "../components/ContactForm";
import HexBanner from "../components/HexBanner";
import NavigationBar from "../components/NavigationBar";

export default function ContactPage() {
    return (
        <section>
            <NavigationBar />
            <HexBanner title='Contact'/>
            <section className="h-auto w-full background justify-evenly flex-wrap">
                <ContactForm />
            </section>
        </section>
    )
}