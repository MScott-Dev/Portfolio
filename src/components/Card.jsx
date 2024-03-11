export default function Card(props) {
    return (
        <div className="card lg:card-side bg-gray-900 shadow-xl w-[29rem] lg:w-auto md:w-60 sm:w-48 p-4">
                    <figure><img className="lg:w-72 md:w-60 sm:w-48" src={props.image} alt="Text editer PWA"/></figure>
                    <div className="card-body lg:w-72 md:w-60 sm:w-48">
                        <h2 className="card-title text-Offwhite">{props.title}</h2>
                        <p className="text-Offwhite">{props.description}</p>
                        <div className="card-actions justify-end">
                            <a href={props.github}>
                                <button className="btn bg-teal border-teal text-Offwhite">GitHub</button>
                            </a>
                            <a href={props.live}>
                                <button  className="btn bg-teal border-teal text-Offwhite">Live</button>
                            </a>
                        </div>
                    </div>
                </div>
    )
}