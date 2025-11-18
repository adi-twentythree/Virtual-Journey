import React from 'react';

import { Link } from 'react-router-dom';
import {
  BH,
  CR,
  VM,
  KM,
} from '../assets/Images/Images'


export const monumentsData = [
  {
    id: 1,
    title: "Baradwari",
    description: "The two-story palace in Khaspur Royal Campus, Cachar, stands alone as the rest has collapsed.",
    tag:"3D",
    imgSrc: CR,
    link: "/baradwari"
  },
  {
    id: 2,
    title: "Vishnu Mandir",
    description: "Vishnu Temple in Khaspur Rajbari, built during King Krishnachandra Narayan Hasnu's reign.",
    tag:"3D",
    imgSrc: VM,
    link: "/vishnumandir"
  },
  {
    id: 3,
    title: "Kali Mandir",
    description: "Dimasa Kali Mandir in Khaspur, built by Dimasa Kachari King Ramchandra Narayan Hasnu.",
    tag:"3D",
    imgSrc: KM,
    link: "/kalimandir"
  },
  {
    id: 4,
    title: "Bamuni Hills",
    description: "Discover Bamuni Hills, featuring ancient stone carvings from the 10th to 12th century A.D.",
    tag:"3D",
    imgSrc: BH,
    link: "/scenenew"
  },
];

const Portfolio = () => {
  return (
    <>
      <section className="lg:h-full py-40">
        <div className="flex flex-col items-center px-6">
         

          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-wide leading-tight">Immerse in History</h1>

          <p className="text-lg py-2 lg:text-2xl text-center mb-20  max-w-3xl">Explore the ancient ruins and monuments of Assam. </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {monumentsData.map((monument) => (
              <div key={monument.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-500 flex flex-col">
                <img
                    src={monument.imgSrc}
                    alt={monument.title}
                    className="w-full h-56 object-cover transition-opacity duration-300 hover:opacity-90"
                  />
                  <div className="px-6 pt-6 flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{monument.title}</h3>
                    <p className="text-gray-600 h-24 overflow-hidden">
                      {monument.description}
                    </p>
                  </div>
                  <div className='p-6 pt-0'>
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
    </>
  );
};

export default Portfolio;