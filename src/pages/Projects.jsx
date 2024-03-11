import fakeStore from "../assets/images/fakeStore.png"
import techblog from "../assets/images/techblog.png"
import JATE from "../assets/images/JATE.png"
import HexBanner from "../components/HexBanner"
import Card from "../components/Card"

export default function ProjectsPage() {
    return (
        <section>
            <HexBanner title='Projects'/>
            <div className=" flex flex-wrap justify-center my-10 gap-3 h-auto p-4">

                <Card 
                image={fakeStore} 
                title="Totally Real Fake Store" 
                description="Mock-up eCommerce shop that features a not-so-diverse selection of 
                        clothes, accessories, and electronics"
                github="https://github.com/MScott-Dev/Fake-store"
                live="https://boiling-harbor-15362-4fdcf0c8906a.herokuapp.com/" 
                />

                <Card 
                image={techblog} 
                title="Binary Blend" 
                description="The go-to destination for those looking to blend their love for technology and coding"
                github="https://github.com/MScott-Dev/Tech-Blog-Website"
                live="https://safe-escarpment-21778-aea97de29b07.herokuapp.com/" 
                />

                <Card 
                image={JATE} 
                title="J.A.T.E" 
                description="A Progressive Web App text editor website combines the features of a 
                            traditional text editor with the advantages of a Progressive Web App"
                github="https://github.com/MScott-Dev/Text-Editor"
                live="https://just-another-text-editor-dfz1.onrender.com/" 
                />
            </div>

        </section>
    )
}