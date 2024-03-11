import fakeStore from "../assets/images/fakeStore.png"
import techblog from "../assets/images/techblog.png"
import JATE from "../assets/images/JATE.png"
import HexBanner from "../components/HexBanner"

export default function ProjectsPage() {
    return (
        <section>
            <HexBanner title='Projects'/>
            <div className=" flex flex-wrap justify-center my-10 gap-3 h-auto p-4">
                <div className="card lg:card-side bg-gray-900 shadow-xl w-[29rem] lg:w-auto md:w-60 sm:w-48">
                    <figure><img className="lg:w-72 md:w-60 sm:w-36" src={fakeStore} alt="Online Store"/></figure>
                    <div className="card-body lg:w-72 md:w-60 sm:w-48">
                        <h2 className="card-title text-Offwhite">Totally Real Fake Store</h2>
                        <p className="text-Offwhite shadow-lg">Mock-up eCommerce shop that features a not-so-diverse selection of 
                        clothes, accessories, and electronics</p>
                        <div className="card-actions justify-end">
                            <a href="https://github.com/MScott-Dev/Fake-store">
                                <button className="btn bg-teal border-teal text-Offwhite">GitHub</button>
                            </a>
                            <a href="https://boiling-harbor-15362-4fdcf0c8906a.herokuapp.com/">
                                <button  className="btn bg-teal border-teal text-Offwhite">Live</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card lg:card-side bg-gray-900 shadow-xl w-[29rem] lg:w-auto md:w-60 sm:w-48 p-4">
                    <figure><img className="lg:w-72 md:w-60 sm:w-48" src={techblog} alt="Blog website"/></figure>
                    <div className="card-body lg:w-72 md:w-60 sm:w-48">
                        <h2 className="card-title text-Offwhite">Binary Blend</h2>
                        <p className="text-Offwhite">The go-to destination for those looking to blend their love for technology and coding</p>
                        <div className="card-actions justify-end">
                            <a href="https://github.com/MScott-Dev/Tech-Blog-Website">
                                <button className="btn bg-teal border-teal text-Offwhite">GitHub</button>
                            </a>
                            <a href="https://safe-escarpment-21778-aea97de29b07.herokuapp.com/">
                                <button  className="btn bg-teal border-teal text-Offwhite">Live</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card lg:card-side bg-gray-900 shadow-xl w-[29rem] lg:w-auto md:w-60 sm:w-48 p-4">
                    <figure><img className="lg:w-72 md:w-60 sm:w-48" src={JATE} alt="Text editer PWA"/></figure>
                    <div className="card-body lg:w-72 md:w-60 sm:w-48">
                        <h2 className="card-title text-Offwhite">J.A.T.E</h2>
                        <p className="text-Offwhite">A Progressive Web App text editor website combines the features of a 
                        traditional text editor with the advantages of a Progressive Web App</p>
                        <div className="card-actions justify-end">
                            <a href="https://github.com/MScott-Dev/Text-Editor">
                                <button className="btn bg-teal border-teal text-Offwhite">GitHub</button>
                            </a>
                            <a href="https://just-another-text-editor-dfz1.onrender.com/">
                                <button  className="btn bg-teal border-teal text-Offwhite">Live</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}