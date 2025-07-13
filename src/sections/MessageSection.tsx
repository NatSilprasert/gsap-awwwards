import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

const MessageSection = () => {

  useGSAP(() => {
    
    const firstMsgSplit = SplitText.create('.first-message', {
      type: "words",
    })
    const secondMsgSplit = SplitText.create('.second-message', {
      type: "words",
    })
    const paragraphMsgSplit = SplitText.create('.message-content p', {
      type: "words, lines",
      linesClass: "text-nowrap overflow-hidden",
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "75% center",
        scrub: true,
      }
    })
    tl.to(firstMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
    })
    tl.to(secondMsgSplit.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 1,
    })

    gsap.from(paragraphMsgSplit.words, {
      scrollTrigger: {
        trigger: '.message-content p',
        start: 'top center',
      },
      yPercent: 300,
      rotate: 3,
      ease: 'power1.inOut',
      duration: 1,
      stagger: 0.01
    })

    const revealTl = gsap.timeline({
      delay: 0.5,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 60%",
      }
    })
    revealTl.to(".msg-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
    })

  })

  return (
    <section className='message-content bg-[#7f3b2d] text-milk min-h-dvh overflow-hidden flex justify-center items-center relative z-20'>
      <div className='container mx-auto flex-center py-28 relative'>
        <div className='w-full h-full'>

          <div className='msg-wrapper 2xl:text-[8.5rem] md:text-8xl text-5xl font-bold uppercase leading-[9vw] tracking-[-.35vw] flex flex-col justify-center items-center md:gap-24 gap-14'>

            <h1 className='first-message 2xl:max-w-4xl md:max-w-2xl max-w-xs text-center text-[#faeade10] leading-none'>
              Stir up your fearless past and
            </h1>

            <div 
              style={{
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
              }}
              className='msg-text-scroll rotate-[3deg] 2xl:translate-y-5 -translate-y-5 absolute z-10 border-[.5vw] border-[#7f3b2d]'
            >
              <div className='bg-light-brown md:pb-5 pb-3 px-5'>
                <h2 className='text-red-brown'>Fuel Up</h2>
              </div>
            </div>

            <h1 className='second-message 2xl:max-w-7xl md:max-w-4xl max-w-xs text-center text-[#faeade10] leading-none'>
              your future with every gulp of Perfect Protein
            </h1>

          </div>

          <div className='flex-center md:mt-20 mt-10'>
            <div className='max-w-md px-10 flex-center overflow-hidden'>
              <p className='text-center font-paragraph'>
                Rev up your rebel spirit and feed the adventure of life
                with SPYLT, where you’re one chug away from epic
                nostalgia and fearless fun.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MessageSection
