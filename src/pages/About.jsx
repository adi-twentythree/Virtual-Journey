import React from 'react'
import { Bgh1 } from '../assets/Images/Images';

const About = () => {
  return (
    <>
<section className="py-36 overflow-hidden bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col lg:flex-row items-stretch gap-10 h-full">
      
      {/* Left Side - Text (60%) */}
      <div className="w-full lg:w-4/7 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl mb-10 font-bold tracking-wide leading-tight text-center lg:text-left">
          Inside the Archive
        </h1>
        <div className="text-justify">
          <p className="text-lg py-3 mb-6 leading-relaxed">
            This digital repository serves as a gateway to the rich and diverse history of Northeast
            India, with a particular focus on the ancient ruins and heritage monuments of the
            Dimasa Kingdom in Assam, India. The virtual archive showcases 3D models and
            immersive 360-degree views of monumental ruins, enabling users to explore intricate
            design motifs, structural layouts, and historical narratives from multiple perspectives.
            Leveraging advanced 3D technologies, the platform offers an engaging exploration of
            architectural marvels, artifacts, and design patterns that have shaped the cultural
            identity of the region.
          </p>
          <p className="text-lg py-3 mb-6 leading-relaxed">
            The mission of this initiative is to preserve and present these invaluable remnants of
            the past, making them accessible to researchers, students, and heritage enthusiasts
            worldwide. This platform not only contributes to the safeguarding of these monuments
            but also fosters a deeper appreciation of Assam’s historical and architectural
            significance.
          </p>
          <p className="text-lg py-3 mb-6 leading-relaxed">
            Step into the past, examine the intricate details of our heritage, and gain insight into a
            culture that has endured through time. We invite you to embark on this journey of
            discovery and appreciation for the enduring legacy of Assam’s monuments—now
            preserved in the digital realm for future generations.
          </p>
        </div>
      </div>

      {/* Right Side - Image (40%) */}
      <div className="w-full lg:w-3/7 h-auto lg:h-auto flex items-stretch">
        <img
          src={Bgh1} // Replace with your preferred image import
          alt="Inside the Archive"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />
      </div>

    </div>
  </div>
</section>


    </>
  )
}

export default About
