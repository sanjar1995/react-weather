import logoImg from "@i/logo.svg";
import gulpImg from "@i/gulp.svg";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import tempImg from "@i/temp.svg";
import pressureImg from "@i/pressure.svg";
import precipitationImg from "@i/precipitation.svg";
import windImg from "@i/wind.svg";
function Header() {
    const {search, setsearch,getWeather,weather} = useContext(Context)
    const [theme, settheme] = useState('light')
    useEffect(()=>{
        document.documentElement.dataset.theme = theme
        getWeather()
    },[theme])
    function changeTheme(){
        settheme(theme === 'light' ? 'dark' : 'light')
    }
  return (
    <header className="header">
        <div className="container">
            <nav className="nav">
                <a href="" className="logo">
                    <img src={logoImg} alt="" /><span>React weather</span>
                    </a>
                    <form action="" className="nav__form" onSubmit={(e)=>{
                        e.preventDefault()
                        getWeather(search)
                    }}>
                        <img src={gulpImg} alt="" className="nav__form-img" onClick={()=>changeTheme()}/>
                        <input value={search} onChange={(e)=>setsearch(e.target.value)} placeholder="Выбрать город" type="text" className="nav__form-input" />
                    </form>
            </nav>
            <div className="header__content">
                <div className="header__left">
                    <h1 className="header__left-temp">{weather  && Math.round(weather?.current.temp)}°</h1>
                    <h2 className="header__left-today">Сегодня</h2>
                    <p className="header__left-date">Время: 21:54</p>
                    <p className="header__left-city">Город: Санкт-Петербург</p>
                </div>
                <div className="header__right">
                    <div className="header__right-item">
                        <img src={tempImg} alt="" className="header__right-img" />
                        <span className="header__right-temp">Температура</span>
                        <span className="header__right-descr">20° - ощущается как 17°</span>
                    </div> <div className="header__right-item">
                        <img src={pressureImg} alt="" className="header__right-img" />
                        <span className="header__right-temp">Давление </span>
                        <span className="header__right-descr">765 мм ртутного столба - нормальное</span>
                    </div> <div className="header__right-item">
                        <img src={precipitationImg} alt="" className="header__right-img" />
                        <span className="header__right-temp">Осадки</span>
                        <span className="header__right-descr">Без осадков</span>
                    </div> <div className="header__right-item">
                        <img src={windImg} alt="" className="header__right-img" />
                        <span className="header__right-temp">Ветер</span>
                        <span className="header__right-descr">3 м/с юго-запад - легкий ветер</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header