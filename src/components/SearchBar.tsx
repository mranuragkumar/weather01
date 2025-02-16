import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useWeatherStore } from '../store/weather';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const { fetchWeather, popularCities } = useWeatherStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      fetchWeather(query);
      setQuery('');
    }
  };

  return (
    <div className="w-full max-w-3xl">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for an Indian city..."
            className="w-full px-4 py-2 rounded-lg bg-white/90 dark:bg-gray-800/90 
                     border border-gray-300 dark:border-gray-700 focus:outline-none 
                     focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 
                     text-gray-500 hover:text-gray-700 dark:text-gray-400 
                     dark:hover:text-gray-200"
          >
            <Search size={20} />
          </button>
        </div>
      </form>
      <div className="flex flex-wrap gap-2">
        {popularCities.map((city) => (
          <button
            key={city}
            onClick={() => fetchWeather(city)}
            className="px-3 py-1 text-sm rounded-full bg-white/80 dark:bg-gray-800/80 
                     hover:bg-white dark:hover:bg-gray-700 transition-colors"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}