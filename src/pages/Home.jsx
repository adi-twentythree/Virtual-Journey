import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { VM, KM, CR, Bgh1, Bgh2 } from '../assets/Images/Images';
import { Learn, Monument, Navigation, Share, VirtualTour, Videography, Photography, } from '../assets/Icons/Icon';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import Search from '../components/Search';
import { monumentsData } from './Portfolio';
import { galleryData } from './Gallery';
// import { videosData } from './Videos';


const Home = () => {

  const images = [Bgh1, Bgh2,]; // Add as many as you want
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);


  const services = [
    {
      icon: VirtualTour,
      title: '360 VIRTUAL TOUR',
      description:
        'This virtual 3D archive is dedicated to preserving the ancient ruins and heritage monuments of Assam, Northeast India.',
      bgClass: 'bg-gradient-to-r from-red-500 to-orange-500',
      link: '/portfolio',
    },
    {
      icon: Videography,
      title: 'VIDEOGRAPHY',
      description:
        'High-quality videography and mini-documentaries that vividly capture Assam’s heritage monuments.',
      bgClass: 'bg-gradient-to-r from-violet-600 to-indigo-600',
      link: '/videos',
    },
    {
      icon: Photography,
      title: 'PHOTOGRAPHY',
      description:
        'Curated collections of photographs offer detailed views of heritage ruins, capturing their historical essence.',
      bgClass: 'bg-gradient-to-r from-emerald-400 to-cyan-400',
      link: '/photos',
    },
  ];

  const Monuments = [
    {
      id: 1,
      title: "Baradwari",
      description: "The unfinished two storied residential building of the Cachar kings.",
      imgSrc: CR,
      link: "/baradwari",
    },
    {
      id: 2,
      title: "Vishnu Mandir",
      description: "Vishnu Temple in Khaspur Rajbari, built during King Krishnachandra Narayan Hasnu's reign.",
      imgSrc: VM,
      link: "/vishnumandir"
    },
    {
      id: 3,
      title: "Kali Mandir",
      description: "Dimasa Kali Mandir in Khaspur, built by Dimasa Kachari King Ramchandra Narayan Hasnu.",
      imgSrc: KM,
      link: "/kalimandir"
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      quote:
        'The 360-degree virtual tour of Assam’s heritage monuments was a truly immersive experience. I felt like I was right there exploring the ancient ruins.',
      occupation: 'Historian',
    },
    {
      id: 2,
      name: 'Jane Smith',
      quote:
        'As a photography enthusiast, I was impressed by the detailed shots of the ancient monuments. The virtual archive is beautifully curated!',
      occupation: 'Photographer',
    },
    {
      id: 3,
      name: 'Robert Williams',
      quote:
        'An incredible platform that preserves and promotes the heritage of Assam. The videography and virtual tours offer a unique perspective on assams history.',
      occupation: 'Teacher',
    },
  ];

  const searchItems = [
    ...monumentsData.map((item) => ({
      key: item.id,
      title: item.title,
      description: item.description,
      link: item.link,
      type: '3D Tour',
    })),
    ...galleryData.map((item) => ({
      key: item.id,
      title: item.title,
      description: item.description,
      link: `/gallery/${item.id}`,
      type: 'Image',
    })),
    // ...videosData.map((item) => ({
    //   key: item.id,
    //   title: item.title,
    //   description: item.description,
    //   link: `/videos?id=${item.id}`,
    //   type: 'Video',
    // })),
  ];


  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[55vh] text-white overflow-hidden transition-all duration-1000">
        {/* Background Image */}
        <img
          src={images[currentIndex]}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-amber-950/20" />

        {/* Hero Text */}
        <div className="relative z-10 flex flex-col gap-5 justify-center items-center h-full text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-2">
            Discover the 360° Virtual Archive
          </h1>
          <p className="text-sm sm:text-lg lg:text-2xl mb-4">
            Cultural heritage monuments of Northeast India
          </p>
          <Link
            to="/About"
            className="bg-orange-500 hover:bg-red-500 transition-transform duration-300 hover:scale-105 hover:shadow-lg text-white py-2 px-6 rounded-full text-base font-semibold"
          >
            Learn More
          </Link>
        </div>

        {/* Circles Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
            />
          ))}
        </div>
      </section>

      <section className="py-8">
        <Search data={searchItems} />
      </section>


      {/* What We Do Section */}
      <section className="bg-gray-50 py-8">
        <div className="flex flex-col items-center justify-center px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {services.slice(0, 3).map((service, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-lg shadow-md px-6 py-6 flex flex-col justify-between h-full"
              >
                <div>
                  <div className={`w-12 h-12 mb-4 rounded-full flex items-center justify-center ${service.bgClass}`}>
                    <img src={service.icon} alt={service.title} className="w-6 h-6" />
                  </div>
                  <h3 className={`text-md font-bold mb-2 text-transparent bg-clip-text hover:bg-black-500 ${service.bgClass}`}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                </div>

                <div>
                  <Link
                    to={service.link}
                    className={`text-sm font-semibold text-transparent bg-clip-text hover:bg-black-500 ${service.bgClass}`}
                  >
                    Explore
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Featured Monuments Section */}
      <section className="lg:py-20 py-16">
        <div className="flex flex-col items-center px-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-10 font-bold tracking-wide leading-tight">Explore our latest work</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Monuments.map((monument) => (
              <div key={monument.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-500 flex flex-col">
                <img src={monument.imgSrc} alt={monument.title} className="w-full h-56 object-cover transition-opacity duration-300 hover:opacity-90" />
                <div className="px-6 pt-6 flex-grow">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">{monument.title}</h3>
                  <p className="text-base lg:text-lg text-gray-600 h-24">{monument.description}</p>
                </div>
                <div className='p-6'>
                  <Link
                    to={monument.link}
                    className="inline-block bg-orange-500 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="lg:py-10 py-16 mb-20">
        <div className="bg-white p-10">
          <h2 className="text-3xl text-center mb-12">How Our Virtual Tours Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">

            <div className="flex flex-col items-center">
              <img src={Monument} alt="Step 1" className="w-20 h-20 mb-4" />
              <h3 className="text-xl">Select a Monument</h3>
            </div>

            <div className="flex flex-col items-center">
              <img src={Navigation} alt="Step 2" className="w-20 h-20 mb-4" />
              <h3 className="text-xl ">Navigate in 360</h3>
            </div>

            <div className="flex flex-col items-center">
              <img src={Learn} alt="Step 3" className="w-20 h-20 mb-4" />
              <h3 className="text-xl ">Learn History</h3>
            </div>

            <div className="flex flex-col items-center">
              <img src={Share} alt="Step 4" className="w-20 h-20 mb-4" />
              <h3 className="text-xl">Share the Experience</h3>
            </div>
          </div>
        </div>


        <div className="p-10 max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            What Our Viewers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.occupation}</p>
                </div>

                <div className="relative mb-4">
                  <FaQuoteLeft className="absolute top-0 left-0 text-orange-500" />
                  <p className="text-gray-600 text-sm leading-relaxed pl-6">
                    {testimonial.quote}
                  </p>
                  <FaQuoteRight className="absolute bottom-0 right-0 text-orange-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
