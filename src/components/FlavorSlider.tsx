import { useGSAP } from "@gsap/react"
import { flavorlists } from "../constants"
import gsap from "gsap"
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {

    const sliderRef = useRef<HTMLDivElement | null>(null);
    const isTablet = useMediaQuery({
        query: '(max-width: 1024px)',
    })

    useGSAP(() => {

        if (!sliderRef.current) return;
        const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.flavor-section',
                start: 'top top',
                end: `+=${isTablet ? scrollAmount - 2000 : scrollAmount + 1200}px`,
                scrub: true,
                pin: true,
            }
        })

        tl.to(`${!isTablet ? ".flavor-section" : ".slider-wrapper"}`, {
            x: `-${isTablet ? scrollAmount - 2000 : scrollAmount + 1200}px`,
            ease: "power1.inOut"
        })
        
        if (!isTablet) {
            const titleTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.flavor-section',
                    start: 'top top',
                    end: 'bottom 80%',
                    scrub: true,
                }
            })

            titleTl
             .to(".first-text-split", {
                xPercent: -30,
                ease: 'power1.inOut',
             })
             .to(".flavor-text-scroll", {
                xPercent: -22,
                ease: 'power1.inOut',
             }, '<')
             .to(".second-text-split", {
                xPercent: -10,
                ease: 'power1.inOut',
             }, '<')
        }

    })

    return (
        <div ref={sliderRef} className="slider-wrapper lg:h-dvh min-h-dvh md:min-h-fit w-full mt-0 md:mt-20 xl:mt-0">
            <div className="flavors h-full w-full flex md:flex-row flex-col items-center 2xl:gap-72 lg:gap-52 md:gap-24 gap-7 flex-nowrap">
                {
                    flavorlists.map((flavor) => (
                        <div 
                            key={flavor.name} 
                            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
                        >
                            <img src={`/images/${flavor.color}-bg.svg`} alt="flavor-bg" className="absolute bottom-0"/>
                            <img src={`/images/${flavor.color}-drink.webp`} alt="drink" className="drinks absolute left-1/2 -translate-x-1/2 bottom-0 md:h-full h-80" />
                            <img src={`/images/${flavor.color}-elements.webp`} alt="elements" className="elements absolute md:top-0 md:bottom-auto bottom-10 w-full" />
                            <h1 className="absolute md:bottom-10 md:left-10 bottom-5 left-5 text-milk md:text-6xl text-3xl font-semibold uppercase tracking-tighter">{flavor.name}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FlavorSlider
