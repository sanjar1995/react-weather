import { createContext, useState } from "react";
export const Context = createContext();
function ContextProvider({ children }) {
  const [search, setsearch] = useState("");
  const [weather, setweather] = useState(null);
  async function getWeather(city = 'Tashkent') {
    let res = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${
        import.meta.env.VITE_APIKEY
      }`
    );
    let data = await res.json();
    let { name, lat, lon } = data[0];
    let res2 = await fetch(
      `https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_APIKEY
      }&units=metric`
    );
    let data2 = await res2.json();
    setweather({ name, ...data2 });
}
  return (
    <Context.Provider value={{ search, setsearch, getWeather,weather }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
