import React, { useEffect, useState } from "react";
import "../assets/styles/climaWidget.css";

const ClimaWidget = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const results = [];

        const cities = [
            { name: "Buenos Aires", lat: -34.61, lon: -58.38 },
            { name: "La Plata", lat: -34.92, lon: -57.95 },
            { name: "Rosario", lat: -32.95, lon: -60.65 },
            { name: "Córdoba", lat: -31.42, lon: -64.18 },
            { name: "Mendoza", lat: -32.89, lon: -68.83 },
            { name: "Santa Fe", lat: -31.63, lon: -60.7 },
            { name: "Salta", lat: -24.79, lon: -65.41 },
            { name: "Bariloche", lat: -41.13, lon: -71.31 },
            { name: "Ushuaia", lat: -54.8, lon: -68.3 },
            { name: "Islas Malvinas", lat: -51.7, lon: -59.0 },
        ];


        cities.forEach((city) => {
            fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true`
            )
                .then((res) => res.json())
                .then((data) => {
                    results.push({
                        name: city.name,
                        temperature: data.current_weather.temperature,
                        weathercode: data.current_weather.weathercode,
                    });

                    // Cuando llegamos al último elemento, actualizamos el estado
                    if (results.length === cities.length) {
                        setWeatherData(results);
                        setLoading(false);
                    }
                })
                .catch((error) => console.error("Error al obtener el clima:", error));
        });
    }, []);

    const climaIcons = {
        0: "☀️",      // despejado
        1: "🌤️",     // mayormente soleado
        2: "⛅",      // parcialmente nublado
        3: "☁️",      // nublado
        45: "🌫️",     // niebla
        48: "🌫️",     // niebla
        51: "🌦️",     // llovizna ligera
        61: "🌧️",     // lluvia
        71: "❄️",      // nieve
        80: "🌦️",     // chubascos ligeros
        81: "🌦️",     // chubascos moderados
        82: "🌧️",     // chubascos fuertes/violentos
        95: "⛈️",      // tormenta
    };

    if (loading) return <p className="clima-loading">Cargando clima...</p>;

    // duplicamos la lista para el scroll continuo
    const loopData = [...weatherData, ...weatherData];

    return (
        <div className="clima-banner" role="region" aria-label="Resumen del clima">
            <div className="clima-track" tabIndex={0}>
                {loopData.map((city, idx) => (
                    <div key={`${city.name}-${idx}`} className="clima-card">
                        <b>{city.name}</b>
                        <span>{climaIcons[city.weathercode] || "🌡️"}</span>
                        <span>{city.temperature}°C</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClimaWidget;
