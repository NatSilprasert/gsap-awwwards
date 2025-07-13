import { useEffect, useState } from 'react'
import { nutrientLists } from '../constants';
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

const Nutrition = () => {

    const isMobile = useMediaQuery({
        query: "(max-width: 768px)",
    });

    const [lists, setLists] = useState(nutrientLists);

    useEffect(() => {
        if (isMobile) {
          setLists(nutrientLists.slice(0, 3));
        } else {
          setLists(nutrientLists);
        }
      }, [isMobile]);

      useGSAP(() => {

        const titleSplit = SplitText.create(".nutrition-title", {
          type: "chars",
        });
        const paragraphSplit = SplitText.create(".nutrition-section p", {
          type: "words, lines",
          linesClass: "paragraph-line",
        });
    
        const contentTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".nutrition-section",
            start: "top center",
          },
        });
        contentTl
          .from(titleSplit.chars, {
            yPercent: 100,
            stagger: 0.02,
            ease: "power2.out",
          })
          .from(paragraphSplit.words, {
            yPercent: 300,
            rotate: 3,
            ease: "power1.inOut",
            duration: 1,
            stagger: 0.01,
          }, '<');
    
        const titleTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".nutrition-section",
            start: "top 80%",
          },
        });
        titleTl.to(".nutrition-text-scroll", {
          duration: 1,
          opacity: 1,
          clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
          ease: "power1.inOut",
        });
      });

    return (
        <div className='nutrition-section min-h-dvh xl:h-[120dvh] overflow-hidden relative'>
            <img 
                src="/images/slider-dip.png" 
                alt="" 
                className='w-full object-cover'
            />
            <img 
                src="/images/big-img.png" 
                alt="" 
                className='xl:w-full absolute xl:h-full md:h-2/3 h-1/2 left-0 bottom-0 object-bottom xl:object-contain object-cover'
            />

            <div className='flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0'>
                <div className='relative inline-block md:translate-y-20 xl:translate-y-15'>
                    <div className='relative flex flex-col justify-center items-center gap-24 2xl:text-[8.5rem] xl:text-[7.2rem] md:text-8xl text-5xl font-bold uppercase leading-[9vw] tracking-[-.35vw]'>
                        <div className='overflow-hidden place-self-start'>
                            <h1 className='nutrition-title'>It still does</h1>
                        </div>
                        <div 
                            style={{clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"}} 
                            className='nutrition-text-scroll place-self-start rotate-[-3deg] border-[.5vw] border-[#e3d3bc] text-nowrap opacity-0 md:-mt-32 -mt-24'
                        >
                            <div className='bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3'>
                                <h2 className='text-milk-yellow'>Body Good</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex md:justify-center items-center translate-y-5 xl:translate-y-[-20px]">
                    <div className="md:max-w-xs max-w-md">
                        <p className="text-md md:text-right text-balance font-paragraph">
                        Milk contains a wide array of <br/>nutrients, including vitamins,
                        minerals, <br/>and protein, and this is lactose free
                        </p>
                    </div>
                </div>


            </div>
            <div className="nutrition-box absolute md:bottom-16 bottom-5 w-full md:px-5">
                <div className="list-wrapper bg-[#fdebd2] rounded-full border-[.5vw] border-[#e8ddca] mx-auto max-w-7xl md:py-8 py-5 md:px-0 px-5 flex justify-between items-center">
                    {lists.map((nutrient, index) => (
                    <div key={index} className="relative flex-1 col-center">
                        <div>
                        <p className="md:text-lg font-paragraph">{nutrient.label}</p>
                        <p className="font-paragraph text-sm mt-2">up to</p>
                        <p className="text-2xl md:text-4xl tracking-tighter font-bold">
                            {nutrient.amount}
                        </p>
                        </div>

                        {index !== lists.length - 1 && (
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 md:h-24 h-16 w-px bg-[#C89C6E]" />
                        )}
                    </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Nutrition
