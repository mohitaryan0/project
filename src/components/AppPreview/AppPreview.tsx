'use client';

import { ThreeDMarquee } from "../ui/3d-marquee";
import Image from "next/image";

const AppPreview = () => {
  const images = [
    "/images/app-preview/1.png",
    "/images/app-preview/2.png",
    "/images/app-preview/3.png",
    "/images/app-preview/4.png",
    "/images/app-preview/5.png",
    "/images/app-preview/6.png",
    "/images/app-preview/1.png",
    "/images/app-preview/2.png",
    "/images/app-preview/3.png",
    "/images/app-preview/4.png",
    "/images/app-preview/5.png",
    "/images/app-preview/6.png",
    "/images/app-preview/1.png",
    "/images/app-preview/2.png",
    "/images/app-preview/3.png",
    "/images/app-preview/4.png",
    "/images/app-preview/5.png",
    "/images/app-preview/6.png",
    "/images/app-preview/1.png",
    "/images/app-preview/2.png",
    "/images/app-preview/1.png",
    "/images/app-preview/2.png",
    "/images/app-preview/3.png",
    "/images/app-preview/4.png",
    "/images/app-preview/5.png",
    "/images/app-preview/6.png",
    "/images/app-preview/1.png",
    "/images/app-preview/2.png",
    "/images/app-preview/5.png",
    "/images/app-preview/6.png",
    "/images/app-preview/1.png"
  ];

  return (
    <div className="relative mx-auto my-10 flex h-[350px] md:h-[500px] w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl">
      <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-[#ffffff] md:text-4xl lg:text-6xl">
        This is your life and it&apos;s ending one{" "}
        <span className="relative z-20 inline-block rounded-xl bg-[#6bbe6b] px-4 py-1 text-white underline decoration-sky-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
          moment
        </span>{" "}
        at a time.
      </h2>
      <p className="relative z-20 mx-auto max-w-2xl py-4 text-center text-sm text-neutral-200 md:text-base">
      ​Steppps is an app that allows you to build on the habit of &apos;Walking&apos; and create health outcomes for you!
      </p>

      <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
        <button className="rounded-lg bg-[#33ccbb] px-15 py-2.5 text-lg font-medium text-black">
          Join us
        </button>
      </div>

      {/* Test image */}
      <Image src="/images/features/track.png" alt="Test" width={500} height={192} className="w-full h-32 object-cover mb-2" />

      {/* overlay */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  );
};

export default AppPreview;
