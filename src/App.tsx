import gsap from 'gsap';
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import { ScrollTrigger } from 'gsap/all';
import MessageSection from './sections/MessageSection';
import Flavor from './sections/Flavor';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <div>
        <Hero />
        <MessageSection />
        <Flavor />
        <div className='h-dvh'></div>
      </div>
    </main>
  )
}

export default App
