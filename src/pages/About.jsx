import HexBanner from "../components/HexBanner";


export default function AboutPage() {
    return (
        <section>
            <HexBanner title='About me'/>
            <section className="h-[20vh] w-full background flex justify-evenly flex-wrap content-center">
                <section className="text-Offwhite w-[70vw]">
                    <p className="text-Offwhite font-semibold sm:text-sm md:text-base lg:text-lg">
                        Hey everyone I&apos;m Matthew Scott and I am from Michigan. I studied and completed 
                        a full stack developer coding bootcamp from Michigan State University.
                        Apart from coding, I enjoy hanging out with friends and family, traveling, and anything to do with animals!
                    </p>
                </section>
                <section className="text-Offwhite w-[70vw]">
                    <p className="text-Offwhite font-bold text-lg">
                        Check out some of my skills below!
                    </p>
                </section>
            </section>
            <section className="h-[60vh] w-full background flex justify-evenly flex-wrap content-center">

                <div className="bg-gray-900 h-[28rem] rounded-lg sm:w-40 md:w-72 lg:w-[24rem]">
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
                            <div>
                                <h1 className="text-Offwhite mx-4 border-b-2 border-teal">Frontend</h1>
                            </div>
                            <section className="content-center flex-wrap align-middle">
                                <section className="flex justify-center h-48 content-center flex-wrap">
                                    <div>
                                        <p className="text-Offwhite mx-4 text-bold">Languages</p>
                                        <ul className="text-Offgray mx-6">
                                            <li className="list-disc">HTML</li>
                                            <li className="list-disc">CSS</li>
                                            <li className="list-disc">JavaScript</li>
                                            <li className="list-disc">Kotlin</li>
                                        </ul>
                                    </div>
                                </section>
                                <section className="flex justify-center h-48 content-center flex-wrap">
                                    <div>
                                        <p className="text-Offwhite mx-4 text-bold">Frameworks</p>
                                        <ul className="text-Offgray mx-6">
                                            <li className="list-disc">Tailwindcss</li>
                                            <li className="list-disc">React</li>
                                            <li className="list-disc">Vite</li>
                                        </ul>
                                    </div>
                                </section>
                            </section>
                        </div>



                <div className="bg-gray-900 h-[28rem] rounded-lg sm:w-40 md:w-72 lg:w-[24rem]">
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
                            <div>
                                <h1 className="text-Offwhite mx-4 border-b-2 border-teal">Backend</h1>
                            </div>
                            <section className="content-center flex-wrap align-middle">
                                <section className="flex justify-center h-48 content-center flex-wrap">
                                    <div>
                                        <p className="text-Offwhite mx-4 text-bold">Languages</p>
                                        <ul className="text-Offgray mx-6">
                                            <li className="list-disc">MySQL</li>
                                            <li className="list-disc">MongoDB</li>
                                        </ul>
                                    </div>
                                </section>
                                <section className="flex justify-center h-48 content-center flex-wrap">
                                    <div>
                                        <p className="text-Offwhite mx-4 text-bold">Frameworks</p>
                                        <ul className="text-Offgray mx-6">
                                            <li className="list-disc">NodeJS</li>
                                            <li className="list-disc">ExpressJS</li>
                                            <li className="list-disc">Mongoose</li>
                                        </ul>
                                    </div>
                                </section>
                            </section>
                        </div>

            </section>
        </section>
    )
}