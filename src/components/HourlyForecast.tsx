import React from 'react';
import { useWeatherStore } from '../store/weather';
import { formatTime } from '../lib/utils';

export function HourlyForecast() {
  const { forecast } = useWeatherStore();

  if (!forecast) return null;

  const hourlyData = forecast.forecastday[0].hour;

  return (
    <div className="bg-white/90 dark:bg-gray-800/90 rounded-lg p-6 backdrop-blur-sm">
      <h3 className="text-xl font-semibold mb-4">Hourly Forecast</h3>
      <div className="flex overflow-x-auto pb-4 gap-4">
        {hourlyData.map((hour: any) => (
          <div
            key={hour.time}
            className="flex flex-col items-center min-w-[80px] p-2"
          >
            <span className="text-sm">{formatTime(hour.time)}</span>
            <img
              src={hour.condition.icon}
              alt={hour.condition.text}
              className="w-8 h-8 my-1"
            />
            <span className="font-medium">{Math.round(hour.temp_c)}°</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {hour.chance_of_rain}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}