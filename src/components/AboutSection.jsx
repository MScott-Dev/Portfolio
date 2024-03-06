export default function About() {
    return (
        <section>
            <section className="h-[20vh] w-full background flex justify-evenly flex-wrap content-center">
                <section className="text-Offwhite w-[70vw]">
                    <p>
                        Hey I&apos;m Matt, I grew up in a small town in Michigan with most of my family. 
                    I&apos;m a person who loves travel, hanging out with family and friends, and any kind of animal. 
                    I have a cat named Shadow and a Samoyed named Luna. Iceland is probably my favorite destination 
                    I&apos;ve visited so far. I was working at the post office for years while hearing my brother talking about career in programming. 
                    So I started taking some online courses on diffferent programming topics and was hooked! A year after those online classes, 
                    I was enrolled in college to become a full stack developer and I never looked back!
                    </p>
                </section>
            </section>
            <section className="h-[60vh] w-full background flex justify-evenly flex-wrap content-center">

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
                            <div>
                                <h1 className="text-Offwhite mx-4 border-b-2 border-teal">Frontend </h1>
                            </div>
                            <section className="content-center flex-wrap align-middle">
                                <section className="flex justify-center h-48 content-center flex-wrap">
                                    <div>
                                        <p className="text-Offwhite mx-4 text-bold">Languages</p>
                                        <ul className="text-Offgray mx-6">
                                            <li className="list-disc">HTML</li>
                                            <li className="list-disc">CSS</li>
                                            <li className="list-disc">JavaScript</li>
                                        </ul>
                                    </div>
                                </section>
                                <section className="flex justify-center h-48 content-center flex-wrap">
                                    <div>
                                        <p className="text-Offwhite mx-4 text-bold">Frameworks</p>
                                        <ul className="text-Offgray mx-6">
                                            <li className="list-disc">HTML</li>
                                            <li className="list-disc">CSS</li>
                                            <li className="list-disc">JavaScript</li>
                                        </ul>
                                    </div>
                                </section>
                            </section>
                        </div>



                <div className="artboard phone-1 rounded-3xl bg-Offgray mx-1">
                    <section className="h-[60px]  w-full flex justify-center flex-wrap content-center px-2 bold text-2xl text-teal shadow-2xl border-b-black border-b-2">Backend</section>
                    <section className="w-full flex justify-center flex-wrap content-center">
                        <p  className="text-2xl font-bold">Languages</p>
                    </section>
                    <section className="h-[120px] w-full flex justify-center flex-wrap content-center">
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ul>
                    </section>
                    <section className="h-[120px] w-full flex justify-center flex-wrap content-center bold text-2xl">Dev Tools</section>
                </div>

            </section>
        </section>
    )
}