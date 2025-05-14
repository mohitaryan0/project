import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#D5F6F0] to-[#BAE8E1] dark:bg-gray-dark text-[#006F5B] dark:text-white py-12 px-4 sm:py-20 sm:px-20">
      <div className="absolute inset-0">
        <Image
          src="/images/features/image.png"
          alt="Background"
          fill
          className="object-cover opacity-30 "
          priority
        />
      </div>
      {/* Our Story Label */}
      <p className="text-sm uppercase tracking-widest text-black dark:text-white mb-2 text-center">Our Story</p>
      {/* Centered Heading */}
      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-center text-black dark:text-white mb-10">
        Fitness Should Be Easy, Fun, and Part of Your Day With <span className="text-green-500"> Steppps.</span>
      </h2>
      <div className="relative z-10 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Left Text and Image */}
        <div>
          <div className="rounded-lg overflow-hidden mt-6 md:mt-10 shadow-xl transition-all duration-300 hover:scale-[1.05]">
            <Image
              src="/images/about/walking.png"
              alt="Team collaboration"
              width={400}
              height={300}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Right Media and Stats */}
      
          {/* QR/App Logos Card */}
          <div className="bg-white/80 dark:bg-gray-800 rounded-xl shadow-lg flex flex-col justify-center items-center gap-6 mb-8 w-full md:w-[600px] h-[360px] mx-auto mt-10 p-8">
            <p className="text-center text-lg text-[#006F5B] dark:text-white font-medium px-2 mt-4">
              Steppps makes fitness accessible and enjoyable for everyone. Our mission is to help you achieve your health goals through the power of habit, making physical activity a natural part of your daily routine.
            </p>
            <div className="w-full border-t border-gray-300 dark:border-gray-600 my-4"></div>
            <div className="flex justify-between items-center w-full gap-6">
              <div className="flex gap-6">
                <Image src="/images/about/google.png" alt="Google Play" width={140} height={130} className="object-contain" />
                <Image src="/images/about/apple.png" alt="Apple Store" width={120} height={120} className="object-contain" />
              </div>
              <Image src="/images/about/scan.png" alt="Steppps QR" width={120} height={120} className="object-contain" />
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 md:gap-0">
            <Link href="/about" className="inline-flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white text-xl cursor-pointer">
                ▶
              </div>
              <span className="uppercase text-sm tracking-wide">Learn More</span>
            </Link>
          </div>
        </div>
    </section>
  );
}
