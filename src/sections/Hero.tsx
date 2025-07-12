import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { SplitText } from "gsap/all"

const Hero = () => {

    useGSAP(() => {

        const titleSplit = SplitText.create('.hero-title', {
            type: "chars",

        });

        const tl = gsap.timeline({
            delay: 1,
        })

        tl.to(".hero-content", {
            opacity: 1,
            y: 0,
            ease: "power1.inOut"
        })
        tl.to(".hero-text-scroll", {
            duration: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out"
        }, "<")
        tl.from(titleSplit.chars, {
            yPercent: 200,
            stagger: 0.02,
            ease: "power1.inOut",
        })

        const heroTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero-container',
                start: '1% top',
                end: 'bottom top',
                scrub: true,
            }
        });
        heroTl.to('.hero-container', {
          rotate: 7,
          scale: 0.9,
          yPercent: 30,
          ease: 'power1.inOut'
        })
    })

    return (
        <section className="bg-main-bg"> 
            <div className="hero-container">
                <img 
                    src="/images/static-img.png" 
                    alt="static-img"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto scale-100 md:scale-150" 
                />
                <div className="hero-content opacity-0">
                    <div className="overflow-hidden">
                        <h1 className="hero-title">Freaking Delicious</h1>
                    </div>
                    <div 
                        style={{
                            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
                        }}
                        className="hero-text-scroll"
                    >
                        <div className="hero-subtitle">
                            <h1 className="uppercase 2xl:text-[8.5rem] md:text-[6.5rem] text-[3.3rem] font-bold text-[#fce1cd] leading-[9vw] tracking-[-.35vw] 2xl:px-[1.2vw] px-3 2xl:pb-[1vw] pb-5 2xl:py-0 py-3">Protein + Caffeine</h1>
                        </div>
                    </div>

                    <h2 className="font-paragraph text-dark-brown text-center md:max-w-lg max-w-sm px-5 md:text-lg leading-[115%] mt-3">
                        Live life to the fullest  with SPYLT: Shatter boredom and embrace your inner kid with every deliciously smooth chug.
                    </h2>

                    <div className="md:mt-16 mt-10 text-dark-brown bg-light-brown uppercase font-bold text-lg rounded-full md:p-5 p-3 md:px-16 px-10">
                        <p>Chug a SPYLT</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
