import Image from "next/image";


export default function AboutSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#D5F6F0] to-[#BAE8E1] dark:bg-gray-dark text-[#006F5B] dark:text-white py-8 px-2 sm:py-12 sm:px-4 md:py-20 md:px-20">
      <div className="absolute inset-0">
        <Image
          src="/images/features/image.png"
          alt="Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <p className="text-m uppercase tracking-widest text-black dark:text-white mb-2 text-center">
        Our Story
      </p>

      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-center text-black dark:text-white mb-4 md:mb-6 px-2">
      Step into Better Habits with {" "}
        <span className="text-green-500">Steppps.</span>
      </h2>

     

      <div className="relative z-10 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
        <div className="flex flex-col items-center md:items-start">
          <div className="rounded-lg overflow-hidden mt-4 md:mt-10 shadow-xl transition-all duration-300 hover:scale-[1.05] w-full max-w-[400px] md:max-w-full">
            <Image
              src="/images/about/walking.png"
              alt="People walking in park"
              width={400}
              height={300}
              className="w-full h-auto object-cover"
            />
            {/* TODO: Convert /images/about/walking.png to .webp for better performance */}
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start w-full">
          <div className="bg-white/80 dark:bg-gray-800 rounded-xl shadow-lg flex flex-col justify-center items-center gap-4 mb-6 md:mb-8 w-full max-w-[95vw] md:w-[600px] h-auto md:h-[360px] mx-auto mt-8 md:mt-10 p-4 md:p-8">
            <p className="hidden md:block text-center text-base md:text-lg text-[#006F5B] dark:text-white font-medium px-2">
              Steppps is your friendly fitness buddy, helping you move more, feel better, and make activity part of your daily rhythm. We believe small steps lead to big changes—and we are here to make every step enjoyable, sustainable, and simple.
            </p>
            <div className="w-full border-t border-gray-300 dark:border-gray-600 my-2 md:my-4"></div>
            <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full gap-4 md:gap-6">
              <div className="flex flex-row items-center justify-between w-full sm:w-auto gap-2 md:gap-6">
                <div className="order-1 sm:order-3">
                  <Image 
                    src="/images/about/scan.png" 
                    alt="Steppps QR" 
                    width={70} 
                    height={70} 
                    className="object-contain w-[40px] h-[40px] md:w-[120px] md:h-[120px]" 
                  />
                </div>
                <div className="flex gap-2 md:gap-6 order-2 sm:order-1">
                  <div className="relative w-[120px] h-[38px] md:w-[180px] md:h-[52px]">
                    <a href="https://apps.apple.com/us/app/steppps-steps-to-fitness/id6608976790" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/images/about/apple.png"
                        alt="Download on App Store"
                        fill
                        sizes="(max-width: 768px) 120px, 180px"
                      />
                    </a>
                  </div>
                  <div className="relative w-[120px] h-[38px] md:w-[180px] md:h-[52px]">
                    <a href="https://play.google.com/store/apps/details?id=com.mycompany.vruns" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/images/about/google.png"
                        alt="Get it on Google Play"
                        fill
                        sizes="(max-width: 768px) 120px, 180px"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fun note */}
         

          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 md:gap-0 w-full">
            
          </div>
        </div>
      </div>
    </section>
  );
}
