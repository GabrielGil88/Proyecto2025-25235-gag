import React, { useEffect, useState } from "react";

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
            { name: "Bariloche", lat: -41.13, lon: -71.31 },
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
                .catch((err) => console.error("Error al obtener el clima:", err));
        });
    }, []);

    const weatherIcons = {
        0: "☀️",
        1: "🌤️",
        2: "⛅",
        3: "☁️",
        45: "🌫️",
        48: "🌫️",
        51: "🌦️",
        61: "🌧️",
        71: "❄️",
        95: "⛈️",
    };

    if (loading) return <p>Cargando clima...</p>;

    return (
        <div className="d-flex flex-wrap gap-3">
            {weatherData.map((city) => (
                <div
                    key={city.name}
                    className="card text-center p-3 shadow-sm"
                    style={{ minWidth: "120px" }}
                >
                    <h6>{city.name}</h6>
                    <div style={{ fontSize: "2rem" }}>
                        {weatherIcons[city.weathercode] || "🌡️"}
                    </div>
                    <p>{city.temperature}°C</p>
                </div>
            ))}
        </div>
    );
};

export default ClimaWidget;
