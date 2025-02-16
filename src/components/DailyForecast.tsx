import React from 'react';
import { useWeatherStore } from '../store/weather';
import { formatDate } from '../lib/utils';

export function DailyForecast() {
  const { forecast } = useWeatherStore();

  if (!forecast) return null;

  return (
    <div className="bg-white/90 dark:bg-gray-800/90 rounded-lg p-6 backdrop-blur-sm">
      <h3 className="text-xl font-semibold mb-4">10-Day Forecast</h3>
      <div className="space-y-4">
        {forecast.forecastday.map((day: any) => (
          <div
            key={day.date}
            className="flex items-center justify-between py-2 border-b 
                     border-gray-200 dark:border-gray-700 last:border-0"
          >
            <span className="w-24">{formatDate(day.date)}</span>
            <img
              src={day.day.condition.icon}
              alt={day.day.condition.text}
              className="w-8 h-8"
            />
            <div className="flex gap-2">
              <span className="text-gray-900 dark:text-gray-100">
                {Math.round(day.day.maxtemp_c)}°
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                {Math.round(day.day.mintemp_c)}°
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}