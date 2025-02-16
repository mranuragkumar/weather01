import { create } from 'zustand';
import axios from 'axios';

const WEATHER_API_KEY = '20558d99d5dc421094d161705251502';
const BASE_URL = 'https://api.weatherapi.com/v1';

interface WeatherState {
  loading: boolean;
  error: string | null;
  current: any;
  forecast: any;
  location: string;
  darkMode: boolean;
  popularCities: string[];
  fetchWeather: (location: string) => Promise<void>;
  toggleDarkMode: () => void;
}

export const useWeatherStore = create<WeatherState>((set) => ({
  loading: false,
  error: null,
  current: null,
  forecast: null,
  location: '',
  darkMode: false,
  popularCities: [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Chennai',
    'Kolkata',
    'Hyderabad',
  ],

  fetchWeather: async (location: string) => {
    try {
      set({ loading: true, error: null });
      const response = await axios.get(
        `${BASE_URL}/forecast.json?key=${WEATHER_API_KEY}&q=${location}&days=10&aqi=yes`
      );
      set({
        current: response.data.current,
        forecast: response.data.forecast,
        location: response.data.location.name,
        loading: false,
      });
    } catch (error) {
      set({
        error: 'Error fetching weather data. Please try again.',
        loading: false,
      });
    }
  },

  toggleDarkMode: () => {
    set((state) => ({ darkMode: !state.darkMode }));
  },
}));