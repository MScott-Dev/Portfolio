import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import iceland from "../assets/images/Iceland.jpg"


export default function Banner(props) {
    return (
        <section className="background w-full">
            <ParallaxBanner style={{ aspectRatio: '3 / 1' }}>
                <ParallaxBannerLayer speed={-20}>
                    <img
                    src={iceland}
                    alt="Sahara Desert landscape"
                    loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-8xl text-Offwhite font-thin border-b mb-3">{props.title}</h1>
                    </div>
                </ParallaxBannerLayer>
            </ParallaxBanner>


        </section>
    )
}