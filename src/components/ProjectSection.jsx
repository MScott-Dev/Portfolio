import fakeStore from "../assets/images/fakeStore.png"

export default function Projects() {
    return (
        <section>

            <section className="h-[80vh] w-full background justify-evenly flex-wrap mt-5">
                <section>

                    <section className="w-full inline-flex px-10 justify-evenly">

                        <div className="bg-gray-900 w-[24rem] h-[28rem]rounded-lg">
                            <div className="flex p-2 gap-1">
                                <div className="">
                                    <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
                                </div>
                                <div className="circle">
                                    <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
                                </div>
                                <div className="circle">
                                    <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
                                </div>
                            </div>
                            <div className="card__content flex justify-center">
                                <img className="w-[22rem]" src={fakeStore} />
                            </div>
                            <div>
                                <p className="text-Offwhite mx-4">Fake Store</p>
                            </div>
                            <div>
                                <p className="text-Offwhite mx-4">
                                Lorem ipsum dolor, 
                                sit amet consectetur adipisicing elit. Quasi sit dicta voluptates 
                                culpa maxime eligendi tempore est blanditiis voluptatum cumque!
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-900 w-[24rem] h-[28rem] rounded-lg">
                            <div className="flex p-2 gap-1">
                                <div className="">
                                    <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
                                </div>
                                <div className="circle">
                                    <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
                                </div>
                                <div className="circle">
                                    <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
                                </div>
                            </div>
                            <div className="card__content flex justify-center">
                                <img className="w-[22rem]" src={fakeStore} />
                            </div>
                        </div>
                        
                        <div className="bg-gray-900 w-[24rem] h-[28rem] rounded-lg">
                            <div className="flex p-2 gap-1">
                                <div className="">
                                    <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
                                </div>
                                <div className="circle">
                                    <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
                                </div>
                                <div className="circle">
                                    <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
                                </div>
                            </div>
                            <div className="card__content flex justify-center">
                                <img className="w-[22rem]" src={fakeStore} />
                            </div>
                        </div>

                    </section>
                    
                    

                </section>
            </section>
        </section>
    )
}