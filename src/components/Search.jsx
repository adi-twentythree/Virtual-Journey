import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setFilteredResults([]);
      return;
    }

    const results = data.filter(item =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredResults(results);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const results = data.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResults(results);
  };

  const handleResultClick = () => {
    setSearchTerm('');
    setFilteredResults([]);
  };

  return (
    <div className="w-full items-center max-w-xl mx-auto px-4">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold my-4 text-center">Immerse in History</h2>

      <form
        onSubmit={handleSearch}
        className="flex bg-white w-full rounded-full overflow-hidden shadow-lg border border-gray-200"
      >
        <input
          type="text"
          placeholder="Search monuments or services..."
          value={searchTerm}
          onChange={handleInputChange}
          aria-label="Search"
          className="flex-grow px-6 py-3 text-base text-black focus:outline-none"
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 text-base font-semibold"
        >
          Search
        </button>
      </form>

      {filteredResults.length > 0 && (
        <div className="bg-white border border-gray-300 rounded-b-lg shadow-md max-h-60 overflow-y-auto mt-2">
          {filteredResults.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="block px-4 py-2 hover:bg-gray-100 text-black border-b border-gray-200 last:border-b-0"
              onClick={handleResultClick}
            >
              <div className="font-semibold">{item.title}</div>
              <div className="text-sm text-gray-600">{item.type}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
