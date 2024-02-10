import logoImg from "@i/logo.svg";
import gulpImg from "@i/gulp.svg";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import tempImg from "@i/temp.svg";
import pressureImg from "@i/pressure.svg";
import precipitationImg from "@i/precipitation.svg";
import windImg from "@i/wind.svg";
import sunImg from "@i/sun.svg";
import cloudImg from "@i/mainly_cloudy.svg";
import rainImg from "@i/rain.svg";
import smallRainImg from "@i/small_rain.svg";
import notFound from "@i/error.png";
function Header() {
  const { search, setsearch, getWeather, weather } = useContext(Context);
  const [theme, settheme] = useState("light");
  const [time, settime] = useState(getTime());
  const [img, setimg] = useState(sunImg)
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    settime(getTime())
    changeWeatherIcon()
  }, [theme,weather]);
  function changeWeatherIcon(){
    let descr = weather?.current.weather[0].main
    if(descr == 'Clouds'){
        setimg(cloudImg)
    }else if(descr == 'Drizzle'){
        setimg(smallRainImg)
    }else if(descr == 'Rain'){
        setimg(rainImg)
    }else if(descr == 'Clear'){
        setimg(sunImg)
    }else{
        setimg(notFound)
    }
  }
  function changeTheme() {
    settheme(theme === "light" ? "dark" : "light");
  }
  function getTime() {
    return new Date().toLocaleString('ru-RU',{
        timeZone:weather?.timezone,
        hourCycle:'h24',
        timeStyle:'short'
    })
  }
   
  console.log(time);
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="" className="logo">
            <img src={logoImg} alt="" />
            <span>React weather</span>
          </a>
          <form
            action=""
            className="nav__form"
            onSubmit={(e) => {
              e.preventDefault();
              getWeather(search);
            }}
          >
            <img
              src={gulpImg}
              alt=""
              className="nav__form-img"
              onClick={() => changeTheme()}
            />
            <input
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              placeholder="Выбрать город"
              type="text"
              className="nav__form-input"
            />
          </form>
        </nav>
        <div className="header__content">
          <div className="header__left">
            <h1 className="header__left-temp">
              {weather && Math.round(weather?.current.temp)}°
            </h1>
            <h2 className="header__left-today">Сегодня</h2>
            <p className="header__left-date">Время: {time}</p>
            <p className="header__left-city">Город: {weather?.name}</p>
            <img src={img} alt="" className="header__left-img" />
          </div>
          <div className="header__right">
            <div className="header__right-item">
              <div className="header__right-img">
                <img src={tempImg} alt="" />
              </div>
              <span className="header__right-temp">Температура</span>
              <span className="header__right-descr">
                20° - ощущается как 17°
              </span>
            </div>{" "}
            <div className="header__right-item">
              <div className="header__right-img">
                <img src={pressureImg} alt="" />
              </div>
              <span className="header__right-temp">Давление </span>
              <span className="header__right-descr">
                765 мм ртутного столба - нормальное
              </span>
            </div>{" "}
            <div className="header__right-item">
              <div className="header__right-img">
                <img src={precipitationImg} alt="" />
              </div>
              <span className="header__right-temp">Осадки</span>
              <span className="header__right-descr">Без осадков</span>
            </div>{" "}
            <div className="header__right-item">
              <div className="header__right-img">
                <img src={windImg} alt="" />
              </div>
              <span className="header__right-temp">Ветер</span>
              <span className="header__right-descr">
                3 м/с юго-запад - легкий ветер
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
