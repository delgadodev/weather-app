import Form from "./components/Form";
import WeatherAPI from "./components/WeatherAPI";

function App() {
  return (
    <div className="App">
      <div className="grid content-center h-screen ">
        <h1 className="p-2 mt-10 text-xl font-semibold text-center lg:text-3xl">
          Weather App ⛅
        </h1>
        <WeatherAPI />
      </div>

      <a
        href="https://github.com/xhungen"
        target="_blank"
        className="block p-5 mt-5 text-center"
      >
        Delgado Dev ©
      </a>
    </div>
  );
}

export default App;
