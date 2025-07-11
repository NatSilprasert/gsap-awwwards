
const Hero = () => {
  return (
    <section className="bg-main-bg"> 
        <div className="relative bg-milk w-screen h-dvh overflow-hidden">
            <img 
                src="/images/hero-img.png" 
                alt="hero-img" 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto scale-100 md:scale-150" 
            />  
            <div className="relative z-10 w-full h-full flex flex-col 2xl:justify-center items-center translate-y-10 2xl:pt-0 md:pt-32 pt-24">
                <div className="overflow-hidden">
                    <h1 className="text-dark-brown 2xl:text-[8.5rem] md:text-[6.5rem] text-[3.3rem] font-bold uppercase leading-[9vw] tracking-[-.35vw] 2xl:mb-0 mb-5">Freaking Delicious</h1>
                </div>
                <div 
                    style={{
                        clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
                    }}
                    className="rotate-[-3deg] mb-8 border-[.5vw] border-milk"
                >
                    <div className="bg-mid-brown">
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
