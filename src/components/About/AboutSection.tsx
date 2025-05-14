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
      <div className="relative z-10 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Left Text and Image */}
        <div>
          <p className="text-sm uppercase tracking-widest text-black dark:text-white mb-2">Our Story</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black dark:text-white mb-4">
            Fitness Should Be Easy <br />
            Fun, and Part of Your Day <br />
            <span className="text-green-500">With Steppps.</span>
          </h2>
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
        <div className="flex flex-col justify-between">
          <div className="flex gap-4 mb-8">
            <div className="relative w-full md:w-[200px] h-[200px] rounded-xl overflow-hidden">
            <a
    href="https://play.google.com/store/apps/details?id=com.mycompany.vruns"
    target="_blank"
    rel="noopener noreferrer"
  >
              <Image
                src="/images/about/google.png"
                  alt="Google Play Store"
                width={200}
                height={140}
                  className="object-contain w-full h-full"  
              />
              </a>
            </div>
            <div className="relative w-full md:w-[200px] h-[200px] rounded-xl overflow-hidden">
            <a
    href="https://apps.apple.com/us/app/steppps-steps-to-fitness/id6608976790"
    target="_blank"
    rel="noopener noreferrer"
  >
              <Image
                src="/images/about/apple.png"
                alt="Blog 2"
                width={200}
                height={140}
                className="object-contain"
              />
              </a>
              </div>
          </div>

          <p className="text-[#006F5B] dark:text-white mb-4 md:mb-6">
            Steppps makes fitness accessible and enjoyable for everyone. Our mission is to help you achieve your health goals through the power of habit, making physical activity a natural part of your daily routine.
          </p>

         

          {/* CTA */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 md:gap-0">
            <Link href="/about" className="inline-flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white text-xl cursor-pointer">
                ▶
              </div>
              <span className="uppercase text-sm tracking-wide">Learn More</span>
            </Link>
            <div className="relative w-[80px] h-[80px] rounded-xl overflow-hidden md:w-[100px] md:h-[100px]">
              <Image
                src="/images/about/scan.png"
                alt="Steppps Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
