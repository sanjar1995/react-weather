import React from 'react'
import sunImg from "@i/sun.svg";
function Day() {
  return (
    <div className='day'>
        <h3 className="day__title">Сегодня</h3>
        <p className="day__date">28 авг</p>
        <img src={sunImg} alt="" className="day__img" />
        <p className="day__temp-day">+18°</p>
        <p className="day__temp-night">+15°</p>
        <p className="day__descr">Облачно</p>
    </div>
  )
}

export default Day