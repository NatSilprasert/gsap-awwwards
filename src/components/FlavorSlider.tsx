import { useGSAP } from "@gsap/react"
import { flavorlists } from "../constants"
import gsap from "gsap"
import { useRef } from "react";

const FlavorSlider = () => {

    const sliderRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {

        if (!sliderRef.current) return;
        const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.flavor-section',
                start: '2% top',
                end: `+=${scrollAmount}px`,
                scrub: true,
                pin: true,
            }
        })

        tl.to(".flavor-section", {
            x: `-${scrollAmount}px`,
            ease: "power1.inOut"
        })
    })

    return (
        <div ref={sliderRef} className="slider-wrapper">
            <div className="flavors">
                {
                    flavorlists.map((flavor) => (
                        <div 
                            key={flavor.name} 
                            className={`${flavor.rotation} relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:h-[90vh] h-80 flex-none`}
                        >
                            <img src={`/images/${flavor.color}-bg.svg`} alt="flavor-bg" className="absolute bottom-0"/>
                            <img src={`/images/${flavor.color}-drink.webp`} alt="drink" className="drinks" />
                            <img src={`/images/${flavor.color}-elements.webp`} alt="elements" className="elements" />
                            <h1 className="absolute md:bottom-10 md:left-10 bottom-5 left-5 text-milk md:text-6xl text-3xl font-semibold uppercase tracking-tighter">{flavor.name}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FlavorSlider
