import FlavorSlider from "../components/FlavorSlider"
import FlavorTitle from "../components/FlavorTitle"

const Flavor = () => {
  return (
    <section className="flavor-section min-h-dvh bg-milk">
        <div className="min-h-screen flex lg:flex-row flex-col items-center relative">
            <div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
                <FlavorTitle />
            </div>
            <div className="h-full">
                <FlavorSlider />
            </div>
        </div>
    </section>
  )
}

export default Flavor
