import DownloadButton from "../components/DownloadButton";

export default function ResumePage() {
    return (
        <section>
            <section className="flex flex-wrap justify-center">
                <h1 className="text-Offwhite ">Download my Resume</h1>
            </section>
            <section className="flex flex-wrap justify-center">
                
            </section>
            <section className="h-[80vh] w-full background flex justify-evenly flex-wrap content-center">
                <DownloadButton />
            </section>
        </section>
    )
}