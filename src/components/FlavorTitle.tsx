import { useGSAP } from "@gsap/react"
import gsap, { SplitText } from "gsap/all"

const FlavorTitle = () => {

    useGSAP(() => {

        const firstTextSplit = SplitText.create('.first-text-split h1', {
            type: "chars",
        })
        const secondTextSplit = SplitText.create('.second-text-split h1', {
            type: "chars",
        })

        gsap.from(firstTextSplit.chars, {
            yPercent: 200,
            stagger: 0.02,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.flavor-section',
                start: 'top 30%',
            }
        })

        gsap.from(secondTextSplit.chars, {
            yPercent: 200,
            stagger: 0.02,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.flavor-section',
                start: 'top 1%',
            }
        })

        gsap.to('.flavor-text-scroll', {
            duration: 1,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            scrollTrigger: {
                trigger: '.flavor-section',
                start: 'top 10%',
            }
        })


    })

    return (
        <div className="general-title col-center h-full 2xl:gap-32 xl:gap-24 gap-16">
            <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
                <h1>We have 6</h1>
            </div>

            <div
                style={{
                    clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
                }}
                className="flavor-text-scroll rotate-[-3deg] md:translate-y-5 border-[.5vw] border-milk absolute z-10"
            >
                <div className="bg-mid-brown pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
                    <h2 className="text-milk">freaking</h2>
                </div>
            </div>

            <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
                <h1>deilicious flavors</h1>
            </div>
        </div>
    )
}

export default FlavorTitle
