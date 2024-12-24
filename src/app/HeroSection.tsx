
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
     <div className="relative w-full h-screen bg-cover bg-center" >

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6 md:px-12">
        <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-4 animate__animated animate__fadeIn animate__delay-1s">
        Escape to Paradise at Hug Inn
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-3xl animate__animated animate__fadeIn animate__delay-2s font-family:ui-sanas-serif ">
          Nestled in the heart of Hikkaduwa, Hugg Inn offers a perfect blend of luxury, comfort, and authentic local flavors. Whether you're here for a relaxing stay or a memorable dining experience, let us provide you with the warmth of true hospitality and a serene atmosphere to unwind and enjoy the best of Sri Lanka’s coast.
        </p>

        {/* Call-to-Action Button */}
        <a
          href="#services"
          className="inline-block py-3 px-8 bg-yellow-500 text-black font-semibold text-lg rounded-full transition-all duration-300 hover:bg-yellow-600 hover:scale-105"
        >
         Book A Reservation
        </a>
      </div>
      </div>
    </>
  )
}

