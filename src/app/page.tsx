import HeroSection from "./HeroSection"
import Navbar from "./Navbar"

export default function Home() {
  return (
    <>
     <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/Photos/WhatsApp Image 2024-12-24 at 23.09.54_c934ecad.jpg')" }}>
     <div className="absolute inset-0 bg-black opacity-50"></div>
    <Navbar/>
    <HeroSection/>
    </div>


  </>
  );
}
