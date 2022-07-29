const WeatherCard = ({ weather }) => {
  const { location, current, forecast } = weather;

  return (
    <>
      <div className="flex flex-col w-10/12 gap-3 p-5 mx-auto mt-10 md:w-3/5 bg-slate-800 rounded-xl">
        <div className="flex">
          <div>
            <h1 className="font-bold lg:text-3xl">{location.name}</h1>
            <h2 className="font-semibold lg:text-2xl">{location.region}</h2>
            <h3 className="text-gray-400 lg:text-xl">{location.country}</h3>
          </div>
          <div>
            <p></p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img className="w-20" src={current.condition.icon} alt="" />
            <div>
              <p className="text-xl font-semibold lg:text-3xl">{current.temp_c}°</p>
              <p className="text-sm lg:text-xl">{current.condition.text}</p>
            </div>
          </div>

          <div className="text-sm lg:text-lg">
            <p className="font-semibold">
              Humedad: <span className="font-normal">{current.humidity}%</span>
            </p>
            <p className="font-semibold">
              Indice UV: <span className="font-normal">{current.uv}%</span>
            </p>
            <p className="font-semibold">
              Viento:{" "}
              <span className="font-normal">{current.wind_kph} km/h</span>
            </p>
          </div>
        </div>

        <div className="mt-5">
            <h2 className="p-2 text-xl font-semibold">Previsión</h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 ">
            {forecast.forecastday.map((day) => (
              <div
                key={day.date}
                className="flex flex-col items-center p-2 rounded-xl bg-slate-700"
              >
                <p className="text-sm">{day.date}</p>
                <p>{day.day.condition.text}</p>
                <div className="flex items-center justify-center w-full gap-7">
                  <img className="w-16" src={day.day.condition.icon} alt="" />

                  <div className="flex flex-col text-sm">
                    <p>Min: {day.day.mintemp_c}°</p>
                    <p>Max: {day.day.maxtemp_c}°</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
