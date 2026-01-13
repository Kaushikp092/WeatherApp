Weather App
This is a simple weather application built with React and Vite. It allows users to input a city name and fetches real-time weather data from the OpenWeatherMap API, displaying details like temperature, humidity, max/min temps, weather description, and feels-like temperature.

Features

User input for city name
Real-time weather data fetching via OpenWeatherMap API
Responsive UI with Material-UI components
Environment variable support for API configuration

## Project Structure
weatherapp/
├── public/                # Static files (e.g., favicon, index.html)
├── src/                   # All source code
│   ├── components/        # Reusable UI components
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point (React render)
│   └── ...                # Other files (styles, assets, etc.)
├── .env                   # API key and URL (keep private)
├── .gitignore
├── package.json           # Dependencies and scripts
├── README.md              # Project documentation
└── vite.config.js         # Vite configuration
