// components/SearchBar.tsx
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Call the onSearch function to notify the parent component
  };

  return (
    <div className="mb-6">
      <div className="flex items-center border rounded-md shadow-sm bg-[#FFF7ED]">
        <input
          type="text"
          placeholder="Search Product"
          className="w-full px-3 py-2 bg-transparent text-black focus:outline-none"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="px-4 bg-[#FF9F0D] text-white rounded-r-md flex items-center justify-center"
          onClick={() => onSearch(searchTerm)} // Trigger search on button click as well
        >
          <FaSearch className="h-12 w-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;