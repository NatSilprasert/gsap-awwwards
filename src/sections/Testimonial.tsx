import { useRef } from "react"
import { cards } from "../constants"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Testimonial = () => {

    const vdRef = useRef<HTMLVideoElement[]>([]);

    const handlePlay = (index: number) => {
        const video = vdRef.current[index];
        video?.play();
    }

    const handlePause = (index: number) => {
        const video = vdRef.current[index];
        video?.pause();
    }

    useGSAP(() => {
        gsap.set(".testimonials-section", {
          marginTop: "-140vh",
        });
    
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".testimonials-section",
            start: "top bottom",
            end: "200% top",
            scrub: true,
          },
        });
    
        tl.to(".testimonials-section .first-title", {
          xPercent: 70,
        })
          .to(
            ".testimonials-section .sec-title",
            {
              xPercent: 25,
            },
            "<"
          )
          .to(
            ".testimonials-section .third-title",
            {
              xPercent: -50,
            },
            "<"
          );
    
        const pinTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".testimonials-section",
            start: "top top",
            end: "200% top",
            scrub: 1.5,
            pin: true,
          },
        });
    
        pinTl.from(".vd-card", {
          yPercent: 150,
          x: "-50vw",
          stagger: 0.2,
          ease: "power1.inOut",
        });
       
    });

    return (
        <section className='testimonials-section bg-milk relative w-full h-[120dvh]'>
            <div className="text-box absolute size-full flex flex-col items-center pt-[5vw]">
                <h1 className="text-black first-title uppercase text-[20.5vw] leading-[105%] tracking-[-.4vw] ml-[2vw] font-bold">What's</h1>
                <h1 className="text-light-brown sec-title uppercase text-[20.5vw] leading-[105%] tracking-[-.4vw] ml-[2vw] font-bold">Everyone</h1>
                <h1 className="text-black third-title uppercase text-[20.5vw] leading-[105%] tracking-[-.4vw] ml-[2vw] font-bold">Talking</h1>
            </div>

            <div className="pin-box flex gap-2 items-center justify-center w-full ps-52 absolute xl:bottom-72 bottom-[70vh]">
                {
                    cards.map((card, index) => (
                        <div 
                            key={index} 
                            className={`vd-card xl:w-84 md:w-96 w-80 flex-none md:rounded-[2vw] rounded-3xl -ms-44 overflow-hidden xl:relative absolute border-[.5vw] border-milk ${card.translation} ${card.rotation}`}
                            onMouseEnter={() => handlePlay(index)}
                            onMouseLeave={() => handlePause(index)}
                        >
                            <video 
                                ref={(el: HTMLVideoElement) => {if (el) vdRef.current[index] = el}} 
                                className="size-full object-cover" 
                                src={card.src} 
                                playsInline 
                                muted 
                                loop 
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Testimonial