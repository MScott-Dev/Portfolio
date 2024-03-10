/* eslint-disable react/jsx-no-undef */
import { ReactTyped } from "react-typed";
import emailLogo from "../assets/images/email.png"
import githubLogo from "../assets/images/github.png"
import linkedinLogo from "../assets/images/linkedin.png"

export default function MainWelcome() {
   return ( 
    <section className="h-[95vh] w-full inline-flex justify-evenly flex-wrap content-center background pl-3">
        <section>
            <h1 className="font-bold text-[5rem] text-Offwhite">Matthew Scott</h1>
            <p className="text-[1.5rem] text-Offwhite"> I&apos;m{" "}
                <ReactTyped
                strings={["a Full-Stack Developer", "Passionate", "Hard-working"]}
                typeSpeed={100}
                loop
                backSpeed={20}
                cursorChar="|"
                showCursor={true}
                />
            </p>
            <section className="flex">
                <a href="https://github.com/MScott-Dev">
                    <img className="p-2" src={githubLogo} />
                </a>
                <a href="mailto:MScott0199@gmail.com">
                    <img className="p-2" src={emailLogo} />
                </a>
                <a href="https://www.linkedin.com/in/mattrscott/">
                    <img className="p-2" src={linkedinLogo} />
                </a>
            </section>
        </section>
        <section>
            <a className="w-56 sm:w-56 md:w-64 lg:w-96 flex" href="https://app.daily.dev/mscottdev"><img 
            src="https://api.daily.dev/devcards/v2/QWMzwv2jQdL2QHcMCCK3E.png?type=default&r=170" width="356" alt="Matt Scott's Dev Card"/>
            </a>
        </section>
    </section>
   )
}