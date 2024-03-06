import fakeStore from "../assets/images/fakeStore.png"
import techblog from "../assets/images/techblog.png"
import JATE from "../assets/images/JATE.png"
import Banner from "./Banner"

export default function Projects() {
    return (
        <section>
            <Banner title={"Projects"} />
            <div className="flex flex-wrap justify-center my-10 gap-3">

                
                <div className="card lg:card-side bg-gray-900 shadow-xl w-[29rem] lg:w-auto md:w-60 sm:w-48">
                    <figure><img className="lg:w-72 md:w-60 sm:w-36" src={fakeStore} alt="Album"/></figure>
                    <div className="card-body lg:w-72 md:w-60 sm:w-48">
                        <h2 className="card-title text-Offwhite">Totally Real Fake Store</h2>
                        <p className="text-Offwhite shadow-lg">Mock-up eCommerce shop that features a not-so-diverse selection of 
                        clothes, accessories, and electronics</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-teal border-teal text-Offwhite">GitHub</button>
                            <button className="btn bg-teal border-teal text-Offwhite">Live</button>
                        </div>
                    </div>
                </div>

                <div className="card lg:card-side bg-gray-900 shadow-xl lg:w-auto md:w-60 sm:w-48">
                    <figure><img className="lg:w-72 md:w-60 sm:w-48" src={techblog} alt="Album"/></figure>
                    <div className="card-body lg:w-72 md:w-60 sm:w-48">
                        <h2 className="card-title text-Offwhite">Binary Blend</h2>
                        <p className="text-Offwhite">The go-to destination for those looking to blend their love for technology and coding</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-teal border-teal text-Offwhite">GitHub</button>
                            <button className="btn bg-teal border-teal text-Offwhite">Live</button>
                        </div>
                    </div>
                </div>

                <div className="card lg:card-side bg-gray-900 shadow-xl lg:w-auto md:w-60 sm:w-48">
                    <figure><img className="lg:w-72 md:w-60 sm:w-48" src={JATE} alt="Album"/></figure>
                    <div className="card-body lg:w-72 md:w-60 sm:w-48">
                        <h2 className="card-title text-Offwhite">J.A.T.E</h2>
                        <p className="text-Offwhite">A Progressive Web App text editor website combines the features of a 
                        traditional text editor with the advantages of a Progressive Web App</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-teal border-teal text-Offwhite">Listen</button>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}