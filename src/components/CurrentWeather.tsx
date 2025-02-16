import React from 'react';
import { useWeatherStore } from '../store/weather';
import { Cloud, Droplets, Wind, MapPin } from 'lucide-react';

export function CurrentWeather() {
  const { current, location } = useWeatherStore();

  if (!current) return null;

  return (
    <div className="bg-white/90 dark:bg-gray-800/90 rounded-lg p-6 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-2">
        <MapPin className="text-red-500" size={24} />
        <h2 className="text-3xl font-bold">{location}</h2>
      </div>
      <div className="flex items-center gap-4">
        <img
          src={current.condition.icon}
          alt={current.condition.text}
          className="w-24 h-24"
        />
        <div>
          <div className="flex items-baseline gap-2">
            <p className="text-4xl font-bold">{current.temp_c}°C</p>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Feels like {current.feelslike_c}°C
            </p>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {current.condition.text}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="flex items-center gap-2">
          <Droplets className="text-blue-500" />
          <div>
            <span className="block font-medium">Humidity</span>
            <span>{current.humidity}%</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Wind className="text-blue-500" />
          <div>
            <span className="block font-medium">Wind</span>
            <span>{current.wind_kph} km/h</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Cloud className="text-blue-500" />
          <div>
            <span className="block font-medium">Cloud</span>
            <span>{current.cloud}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}