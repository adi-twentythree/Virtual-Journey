import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PhotoModal = ({ photo, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = photo ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [photo]);

  if (!photo) return null;

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="relative max-w-5xl w-full px-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-8 bg-white text-black h-10 w-10 rounded-full font-semibold hover:bg-red-500 hover:text-white transition"
        >
          ✕
        </button>
        <img
          src={photo.imgSrc}
          alt={photo.title}
          className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
        />
        <p className="mt-4 text-white text-lg text-center">{photo.title}</p>
      </div>
    </div>
  );
};

const Photos = ({ title, photosData = [] }) => {

  const location = useLocation();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
  const params = new URLSearchParams(location.search);
  const photoId = params.get('id');
  if (photoId) {
    const found = photosData.find((p) => p.id === photoId);
    if (found) setSelectedPhoto(found);
  }
}, [location.search, photosData]);



  const photosMemo = useMemo(() => photosData, []);

  return (
    <section className="lg:h-full py-40 bg-gray-50">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-wide leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-lg text-gray-600">Explore photographs of {title}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
        {photosMemo?.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="group relative overflow-hidden rounded-2xl shadow-md bg-white cursor-pointer"
          >
            <img
              src={photo.imgSrc}
              alt={photo.title}
              loading="lazy"
              className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            {/* <div className="absolute bottom-0 left-0 w-full translate-y-14 group-hover:translate-y-0 transition-transform duration-300 text-white px-4 py-3 bg-gradient-to-b from-transparent to-black/70">
              <h3 className="text-lg font-semibold truncate">{photo.title}</h3>
            </div> */}
          </div>
        ))}
      </div>

      {/* Modal */}
      <PhotoModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
    </section>
  );
};

export default React.memo(Photos);
