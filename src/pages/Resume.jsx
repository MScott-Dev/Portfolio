import DownloadButton from "../components/DownloadButton";
import Resume from "../assets/images/resume.png"
import NavigationBar from "../components/NavigationBar";
import HexBanner from "../components/HexBanner";

export default function ResumePage() {
    return (
        <section>
            <NavigationBar />
            <HexBanner title='Resume'/>
            <section className="flex flex-wrap justify-center">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-Offwhite mt-3">Download my resume!</h2>
            </section>
            <section className="flex flex-wrap justify-center">
                <img className=" sm:w-3/5 md:w-3/5 lg:w-[40rem] h-auto p-5" src={Resume} />
            </section>
            <section className="h-[10vh] w-full background flex justify-evenly flex-wrap content-center">
                <DownloadButton />
            </section>
        </section>
    )
}