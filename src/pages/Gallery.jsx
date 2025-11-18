import { Link } from 'react-router-dom';
import { BDA, BDF, BDS, KMB, VMA, RTF, SG, SD } from '../assets/Images/Images';

export const galleryData = [
  { id: 'baradwari', title: 'Baradwari', imgSrc: BDA, info: 'Photo Collection of Baradwari.' },
  { id: 'kali-mandir', title: 'Kali Mandir', imgSrc: KMB, info: 'Photo Collection of Kali Mandir.' },
  { id: 'vishnu-mandir', title: 'Vishnu Mandir', imgSrc: VMA, info: 'Photo Collection of Vishnu Mandir.' },
  { id: 'ranachandi-temple', title: 'Ranachandi Temple', imgSrc: RTF, info: 'Photo Collection of Ranachandi Temple.' },
  { id: 'shan-ghar', title: 'Shan Ghar', imgSrc: SG, info: 'Photo Collection of Shan Ghar.' },
  { id: 'singha-dwar', title: 'Singha Dwar', imgSrc: SD, info: 'Photo Collection of Singha Dwar.' },
];

const Gallery = () => (
  <section className="lg:h-full py-40 bg-gray-50">
    <div className="text-center mb-16">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-wide leading-tight">
        Photo Gallery
      </h1>
      <p className="mt-4 text-lg text-gray-600">A curated collection of heritage photograp</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
      {galleryData.map((place) => (
        <Link
          key={place.id}
          to={`/gallery/${place.id}`}
          className="group relative rounded-2xl shadow-md overflow-hidden transition-transform bg-white hover:scale-105"
        >
          <div className="aspect-[4/3] ">
            <img
              src={place.imgSrc}
              alt={place.title}
              className="w-full h-full object-cover transition-transform duration-300"
              loading="lazy"
            />
            
          </div>

          <div className=" bottom-0 left-0 w-full text-black px-4 py-3  ">
              <h3 className="text-lg font-semibold truncate pb-2">{place.title}</h3>
              <p >{place.info}</p>
          </div>

        </Link>
      ))}
    </div>
  </section>
);

export default Gallery;
