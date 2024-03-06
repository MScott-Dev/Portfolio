import fakeStore from "../assets/images/fakeStore.png"

export default function Projects() {
    return (
        <section>

            <div className="flex flex-wrap justify-center my-10 gap-3">

                
                <div className="card lg:card-side bg-base-100 shadow-xl w-[29rem] lg:w-auto md:w-60 sm:w-48">
                    <figure><img className="lg:w-72 md:w-60 sm:w-36" src={fakeStore} alt="Album"/></figure>
                    <div className="card-body lg:w-72 md:w-60 sm:w-48">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>

                <div className="card lg:card-side bg-base-100 shadow-xl lg:w-auto md:w-60 sm:w-48">
                    <figure><img className="lg:w-72 md:w-60 sm:w-48" src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
                    <div className="card-body lg:w-72 md:w-60 sm:w-48">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>

                <div className="card lg:card-side bg-base-100 shadow-xl lg:w-auto md:w-60 sm:w-48">
                    <figure><img className="lg:w-72 md:w-60 sm:w-48" src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
                    <div className="card-body lg:w-72 md:w-60 sm:w-48">
                        <h2 className="card-title">New album is released!</h2>
                        <p>Click the button to listen on Spotiwhy app.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}