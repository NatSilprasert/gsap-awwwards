import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section className="footer-section 2xl:min-h-dvh overflow-hidden relative bg-[#222123]">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            #CHUGRESPONSIBLY
          </h1>
        </div>

        {isMobile ? (
          <img
            src="/images/footer-drink.png"
            className="absolute top-0 object-contain"
          />
        ) : (
          <video
            src="/videos/splash.mp4"
            autoPlay
            playsInline
            muted
            className="absolute top-0 object-contain mix-blend-lighten"
          />
        )}

        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <div className="border border-[#faeade33] md:size-[5vw] size-14 md:p-0 p-3 flex justify-center items-center rounded-full hover:bg-[#ffffff1a] transition-colors cursor-pointer">
            <img src="./images/yt.svg" alt="" />
          </div>
          <div className="border border-[#faeade33] md:size-[5vw] size-14 md:p-0 p-3 flex justify-center items-center rounded-full hover:bg-[#ffffff1a] transition-colors cursor-pointer">
            <img src="./images/insta.svg" alt="" />
          </div>
          <div className="border border-[#faeade33] md:size-[5vw] size-14 md:p-0 p-3 flex justify-center items-center rounded-full hover:bg-[#ffffff1a] transition-colors cursor-pointer">
            <img src="./images/tiktok.svg" alt="" />
          </div>
        </div>

        <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          <div className="flex items-center md:gap-16 gap-5">
            <div>
              <p>SPYLT Flavors</p>
            </div>
            <div>
              <p>Chug Club</p>
              <p>Student Marketing</p>
              <p>Dairy Dealers</p>
            </div>
            <div>
              <p>Company</p>
              <p>Contacts</p>
              <p>Tasty Talk</p>
            </div>
          </div>

          <div className="md:max-w-lg">
            <p>
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>
            <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
              {/* The input field and arrow icon for newsletter signup. */}{" "}
              {/* A
          border at the bottom for a clean, modern look. */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full placeholder:font-sans placeholder:text-[#999999]"
              />
              <img src="/images/arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>

        <div className="2xl:absolute w-full md:px-10 px-5 py-7 bottom-0 text-milk opacity-50 md:text-lg font-paragraph flex gap-7 md:flex-row flex-col-reverse md:justify-between justify-center items-center">
          {/* The final row with copyright and legal links. */}
          <p className="text-center">Copyright © 2025 Spylt - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <p className="text-center">Privacy Policy</p>
            <p className="text-center">Terms of Sеrvice</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
