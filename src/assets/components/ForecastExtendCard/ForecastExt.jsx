import React from 'react'
//Iconos y estilos//

import './forecastExt.css'

const ForecastExt = ({apiForest, setForest}) => {
  const cityName = apiForest.city
  const {list} = apiForest

//Datos del pronóstico extendido//
  let diaDos = list[1].dt_txt,
      diaTres = list[9].dt_txt,
      diaCuatro = list[17].dt_txt,
      dateDia = diaDos.split(" "),
      dateDia2 = diaTres.split(" "),
      dateDia3 = diaCuatro.split(" ")

  let climaDay2 = list[1].main.temp,
      climaDay3 = list[9].main.temp,
      climaDay4 = list[17].main.temp
  let weatherDay2 = list[1].weather.map(des => des.description)[0],
      weatherDay3 = list[9].weather.map(des => des.description)[0],
      weatherDay4 = list[17].weather.map(des => des.description)[0]
   
  const close =(e) =>{
    e.preventDefault()
    setForest(false)
  }    

  return (
    <>
      <div className='containerForest'>
      <section className='forestData'>
        <section className='containerClosed'>
          <button
             type='submit'
             onClick={close}
             className="btnForest"
             >X</button>
             <h4>{dateDia[0]}</h4>
        </section>
          
          <h4>{Math.floor(climaDay2)}°</h4>
          <p className='pText'>{weatherDay2}</p>
       </section>
       <section className='forestData'>
       <section className='containerClosed'>
          <button
             type='submit'
             onClick={close}
             className="btnForest"
             >X</button>
             <h4>{dateDia2[0]}</h4>
        </section>
          
          <h4> {Math.floor(climaDay3)}°</h4>
          <p className='pText'> {weatherDay3}</p>
       </section>
       <section className='forestData'>
       <section className='containerClosed'>
          <button
             type='submit'
             onClick={close}
             className="btnForest"
             >X</button>
             <h4>{dateDia3[0]}</h4>
        </section>
       
          <h4>{Math.floor(climaDay4)}°</h4>
          <p className='pText'>{weatherDay4}</p>
       </section>
      </div>
    </>
  )
}

export {ForecastExt} 