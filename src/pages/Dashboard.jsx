import HexBanner from '../components/HexBanner'
import MainWelcome from '../components/MainWelcome'
import AboutPage from './About'
import ContactPage from './Contact'
import ProjectsPage from './Projects'
import ResumePage from './Resume'

export default function DashboardPage() {
        return (
            <section>
                <MainWelcome />
                <AboutPage />
                <ProjectsPage />
                <HexBanner title='Contact'/>
                <ContactPage />
                <HexBanner title='Resume'/>
                <ResumePage />
            </section>
        )
    }