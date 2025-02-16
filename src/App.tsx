import React, { useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useWeatherStore } from './store/weather';
import { SearchBar } from './components/SearchBar';
import { CurrentWeather } from './components/CurrentWeather';
import { DailyForecast } from './components/DailyForecast';
import { HourlyForecast } from './components/HourlyForecast';
import { cn, getWeatherBackground } from './lib/utils';

function App() {
  const { current, darkMode, toggleDarkMode, fetchWeather } = useWeatherStore();

  useEffect(() => {
    fetchWeather('Mumbai');
  }, [fetchWeather]);

  return (
    <div
      className={cn(
        'min-h-screen transition-colors duration-300',
        darkMode ? 'dark' : ''
      )}
    >
      <div
        className="min-h-screen bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${
            current ? getWeatherBackground(current.condition.text) : ''
          })`,
        }}
      >
        <div className="min-h-screen bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
              <SearchBar />
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-white/90 dark:bg-gray-800/90 
                         text-gray-800 dark:text-gray-200 hover:bg-white 
                         dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            </div>

            <div className="space-y-6">
              <CurrentWeather />
              <HourlyForecast />
              <DailyForecast />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;