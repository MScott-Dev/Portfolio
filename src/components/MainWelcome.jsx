import { ReactTyped } from "react-typed";
import emailLogo from "../assets/images/email.png"
import githubLogo from "../assets/images/github.png"
import instagramLogo from "../assets/images/instagram.png"
import linkedinLogo from "../assets/images/linkedin.png"
import slackLogo from "../assets/images/slack.png"

export default function MainWelcome() {
   return ( 
    <section className="h-[95vh] w-full inline-flex justify-evenly flex-wrap content-center background pl-3">
        <section>
            <h1 className="font-bold text-[5rem] text-Offwhite">Matthew Scott</h1>
            <p className="text-[1.5rem] text-Offwhite"> I&apos;m{" "}
                <ReactTyped
                strings={["a Developer", "Passionate", "Designer"]}
                typeSpeed={100}
                loop
                backSpeed={20}
                cursorChar="|"
                showCursor={true}
                />
            </p>
            <section className="flex w-1/4">
                <img className="p-2" src={githubLogo}  />
                <img className="p-2" src={emailLogo}  />
                <img className="p-2" src={instagramLogo}  />
                <img className="p-2" src={linkedinLogo}  />
                <img className="p-2" src={slackLogo}  />
            </section>
        </section>
        <section>
            <a href="https://app.daily.dev/mscottdev"><img 
            src="https://api.daily.dev/devcards/v2/QWMzwv2jQdL2QHcMCCK3E.png?type=default&r=170" width="356" alt="Matt Scott's Dev Card"/>
            </a>
        </section>
    </section>
   )
}