import { useGSAP } from "@gsap/react"
import ClipPathTitle from "../components/ClipPathTitle"
import gsap from "gsap"

const Benefit = () => {

    useGSAP(() => {
        const revealTl = gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger: '.benefit-section',
                start: 'top 60%',
                end: 'top top',
                scrub: 1.5,
            }
        })

        revealTl
            .to('.benefit-section .first-title', {
                duration: 1,
                opacity: 1,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                ease: 'circ.out'
            })
            .to('.benefit-section .second-title', {
                duration: 1,
                opacity: 1,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                ease: 'circ.out'
            })
            .to('.benefit-section .third-title', {
                duration: 1,
                opacity: 1,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                ease: 'circ.out'
            })
            .to('.benefit-section .fourth-title', {
                duration: 1,
                opacity: 1,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                ease: 'circ.out'
            })
    })

    return (
        <div className="benefit-section min-h-dvh bg-[#222123] overflow-hidden relative">
            <div className="container mx-auto pt-20">
                <div className="col-center">
                    <p className="text-milk font-paragraph text-center text-lg">
                        Unlock the Advantages:<br/>
                        Explore the Key Benefits of Choosing SPYLT  
                    </p>

                    <div className="mt-20 col-center">
                        <ClipPathTitle
                            title={"Shelf stable"}
                            color={"#faeade"}
                            bg={"#c88e64"}
                            className={"first-title rotate-[3deg] relative z-10"}
                            borderColor={"#222123"}
                        />
                        <ClipPathTitle
                            title={"Protein + Caffeine"}
                            color={"#222123"}
                            bg={"#faeade"}
                            className={"second-title rotate-[-1deg] md:-translate-y-5"}
                            borderColor={"#222123"}
                        />
                        <ClipPathTitle
                            title={"Infinitely recyclable"}
                            color={"#faeade"}
                            bg={"#7F3B2D"}
                            className={"third-title rotate-[1deg] md:-translate-y-12 relative z-10"}
                            borderColor={"#222123"}
                        />
                        <ClipPathTitle
                            title={"Lactose free"}
                            color={"#2E2D2F"}
                            bg={"#FED775"}
                            className={"fourth-title rotate-[-5deg] md:-translate-y-12"}
                            borderColor={"#222123"}
                        />   
                    </div>

                    <div className="md:mt-0 mt-10">
                        <p className="text-milk font-paragraph text-center text-lg">And much more ...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefit
