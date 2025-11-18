import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import {
  BDA,
  BDF,
  BDS,
  KMB,
  KMF,
  KMS,
  RTF,
  RTS,
  SD,
  SG,
  VMA,
  VMB,
  VMF,
} from '../assets/Images/Images';

const PhotoModal = ({ video, onClose }) => {

  useEffect(() => {
    document.body.style.overflow = video ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [video]);

  if (!video) return null;

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
          src={video.imgSrc}
          alt={video.title}
          className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
        />
        <p className="mt-4 text-white text-lg text-center">{video.title}</p>
      </div>
    </div>
  );
};

export const videosData = [
  { id: 'bda', tag: 'Photo', title: 'Baradwari Arial', imgSrc: BDA },
  { id: 'bdf', tag: 'Photo', title: 'Baradwari Front', imgSrc: BDF },
  { id: 'bds', tag: 'Photo', title: 'Baradwari Side', imgSrc: BDS },
  { id: 'kmb', tag: 'Photo', title: 'Baradwari Back', imgSrc: KMB },
  { id: 'kmf', tag: 'Photo', title: 'Kali Mandir Front', imgSrc: KMF },
  { id: 'kms', tag: 'Photo', title: 'Kali Mandir Side', imgSrc: KMS },
  { id: 'vma', tag: 'Photo', title: 'Vishnu Mandir Aerial', imgSrc: VMA },
  { id: 'vmb', tag: 'Photo', title: 'Vishnu Mandir Back', imgSrc: VMB },
  { id: 'vmf', tag: 'Photo', title: 'Vishnu Mandir Front', imgSrc: VMF },
  { id: 'rtf', tag: 'Photo', title: 'Ranachandi Temple Front', imgSrc: RTF },
  { id: 'rts', tag: 'Photo', title: 'Ranachandi Temple Side', imgSrc: RTS },
  { id: 'sd', tag: 'Photo', title: 'Singha Dwar', imgSrc: SD },
  { id: 'sg', tag: 'Photo', title: 'Shan Ghar', imgSrc: SG },
];

const Photos = () => {
  const location = useLocation();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const videoId = params.get('id');
    if (videoId) {
      const found = videosData.find((p) => p.id === videoId);
      if (found) setSelectedPhoto(found);
    }
  }, [location.search]);

  const videos = useMemo(() => videosData, []);



  return (
    <section className="lg:h-full py-40 bg-gray-50">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-wide leading-tight">
          Photo Gallery
        </h1>
        <p className="mt-4 text-lg text-gray-600">A curated collection of heritage videography</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => setSelectedPhoto(video)}
            className="group relative overflow-hidden rounded-2xl shadow-md bg-white cursor-pointer"
          >
            <img
              src={video.imgSrc}
              alt={video.title}
              loading="lazy"
              className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full translate-y-14 group-hover:translate-y-0 transition-transform duration-300 text-white px-4 py-3 bg-black/50">
              <h3 className="text-lg font-semibold truncate">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <PhotoModal video={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
    </section>
  );
};

export default React.memo(Photos);
