import React from 'react';
import { BlogImage1, BlogImage2, BlogImage3 } from '../assets/Images/Images'; // Replace with actual images

const Blog = () => {

  const blogPosts = [
    {
      id: 1,
      title: 'Preserving Assam’s Heritage Through Virtual Tours',
      description:
        'Learn how modern technology, including 360 virtual tours, is playing a crucial role in preserving Assam’s rich cultural heritage for future generations.',
      imgSrc: BlogImage1,
      author: 'John Doe',
      date: 'October 10, 2024',
      link: '/blog/preserving-heritage',
    },
    {
      id: 2,
      title: 'A Photographer’s Guide to Capturing Monuments',
      description:
        'Explore tips and techniques from professional photographers on how to capture the essence of heritage monuments with your camera.',
      imgSrc: BlogImage2,
      author: 'Jane Smith',
      date: 'September 22, 2024',
      link: '/blog/photography-guide',
    },
    {
      id: 3,
      title: 'The Historical Significance of the Kachari Ruins',
      description:
        'Dive deep into the history of the Kachari Ruins and why it’s one of Northeast India’s most important archaeological sites.',
      imgSrc: BlogImage3,
      author: 'Robert Williams',
      date: 'August 18, 2024',
      link: '/blog/kachari-ruins-history',
    },
  ];

  return (
    <>
      {/* Blog Posts Section */}
      <section className="py-40 bg-neutral-900">
        <div className='flex flex-col items-center px-6'>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white tracking-wide leading-tight">Explore Our Blog</h1>
          <p className="text-lg py-2 lg:text-2xl mb-20 text-gray-300 max-w-3xl">Discover articles on heritage, culture, and history for you. </p>

          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 lg:max-w-7xl mx-auto">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-500 flex flex-col"
                >
                  <img
                    src={post.imgSrc}
                    alt={post.title}
                    className="w-full h-56 object-cover transition-opacity duration-300 hover:opacity-90"
                  />
                  <div className="px-6 pt-6 flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 h-24 overflow-hidden">
                      {post.description}
                    </p>
                  </div>
                  <div className='p-6'>
                    <p className="text-sm text-gray-500 mb-4">
                      By <span className="font-semibold">{post.author}</span> | {post.date}
                    </p>
                    <a
                      href={post.link}
                      className="inline-block bg-orange-500 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
