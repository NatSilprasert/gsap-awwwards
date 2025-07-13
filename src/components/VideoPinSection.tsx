import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useMediaQuery } from "react-responsive";

const VideoPinSection = () => {

    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
      });

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.vd-pin-section',
                start: '-15% top',
                end: '200% top',
                scrub: 1.5,
                pin: true,
            }
        })

        tl.to('.video-box', {
            clipPath: 'circle(100% at 50% 50%)',
            ease: 'power1.inOut',
        })

    })

    return (
        <section className='vd-pin-section md:h-[110vh] h-dvh overflow-hidden md: !-translate-y-[15%] md:mt-0 mt-20'>
            <div 
                style={{
                    clipPath: isMobile
                      ? "circle(10% at 50% 50%)"
                      : "circle(6% at 50% 50%)",
                  }}
                className='video-box size-full'
            >
                <video className='size-full absolute inset-0 object-cover' src="/videos/pin-video.mp4" playsInline muted loop autoPlay />

                <div className="abs-center md:scale-100 scale-200">
                    <img src="/images/circle-text.svg" className='spin-circle size-[15vw]' alt="" />
                    <div className="play-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[9vw] flex justify-center items-center bg-[#ffffff1a] backdrop-blur-xl rounded-full">
                        <img src="/images/play.svg" alt="" className="size-[3vw] ml-[.5vw]" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoPinSection
