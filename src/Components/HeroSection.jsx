import React from 'react';
import heroImage from "/public/images/hero.webp"

const HeroSection = React.forwardRef((props, ref) => (
  <div ref={ref} className="bg-gray-800 font-[sans-serif] text-white p-6" id='HeroSection'>
    <div className="grid md:grid-cols-2 items-center gap-10 max-w-5xl max-md:max-w-md mx-auto">
      <div className="md:h-[400px]">
        <img src={heroImage} className="w-full h-full object-contain" />
      </div>
      <div className="max-md:text-center">
        <h3 className="md:text-3xl text-2xl md:leading-10">Find Your Next Learning Journey with SkillSeeker.</h3>
        <p className="mt-6 text-sm">Explore a world of knowledge with our vast selection of online courses. Whether you want to boost your career, pick up a new hobby, or acquire new skills, SkillSeeker has the ideal course for you.</p>
        <button type="button" className="px-6 py-2 mt-8 font-semibold rounded text-sm outline-none border-2 border-white"><a href="#SearchSection">Explore</a></button>
      </div>
    </div>
  </div>
))

HeroSection.displayName = 'HeroSection';

export default HeroSection