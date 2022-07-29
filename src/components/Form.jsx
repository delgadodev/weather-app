import { useState } from "react";
import Swal from "sweetalert2";

const Form = ({ getLocation }) => {
  const [city, setCity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!city || city === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ingrese una ciudad",
      });
      return;
    }

    getLocation(city);
    setCity("");
  };

  return (
    <>
      <p className="text-center">Ingrese una ciudad</p>
      <form
        onSubmit={onSubmit}
        className="flex flex-col w-3/6 gap-4 mx-auto mt-5 text-center md:w-2/5 md:flex-row"
      >
        <input
          type="text"
          placeholder="Ej. Buenos Aires"
          className="w-full p-1 text-black border-2 rounded-lg"
          onChange={(e) => setCity(e.target.value)}
          value={city}
          id="ciudad"
        />
        <button className="p-2 rounded-full md:w-1/4 bg-slate-700">Buscar</button>
      </form>
    </>
  );
};

export default Form;
