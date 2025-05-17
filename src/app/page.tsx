import React from "react";
import { Metadata } from "next";
import Hero from "@/components/Hero";
import ChallengesSection from "@/components/ChallengesSection";
import AboutSection from "@/components/About/AboutSection";
import { CombinedFeatures3DGrid } from "./abc";
import AppPreview from "@/components/AppPreview/AppPreview";
import Testimonal from "@/components/Testimonal/Testimonal";
import BlogSection from "@/components/blog/BlogSection";
import TopSection from "@/components/top/top";





export const metadata: Metadata = {
  title: "Stepppps",
  description: "This is Landing page",
  // other metadata
};

export default function Home() {
  return (
    <>
     <TopSection />
      <Hero />
      

      
      <CombinedFeatures3DGrid />
    
          <AppPreview />
        
      
      <ChallengesSection />
      <BlogSection />
      <Testimonal  />
      <AboutSection />
      
      
      
            

      
    </>
  );
}