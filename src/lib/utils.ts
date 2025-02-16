import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}

export function formatTime(time: string) {
  return new Date(time).toLocaleTimeString('en-US', {
    hour: 'numeric',
    hour12: true,
  });
}

export function getWeatherBackground(condition: string) {
  const conditions = {
    'clear': 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?auto=format&fit=crop&w=1920&q=80',
    'cloudy': 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1920&q=80',
    'rain': 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=1920&q=80',
    'snow': 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&w=1920&q=80',
    'default': 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1920&q=80',
  };

  const lowerCondition = condition.toLowerCase();
  if (lowerCondition.includes('clear') || lowerCondition.includes('sunny')) return conditions.clear;
  if (lowerCondition.includes('cloud')) return conditions.cloudy;
  if (lowerCondition.includes('rain')) return conditions.rain;
  if (lowerCondition.includes('snow')) return conditions.snow;
  return conditions.default;
}