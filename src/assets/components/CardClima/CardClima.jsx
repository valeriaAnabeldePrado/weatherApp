import React from 'react'
import { useState, useEffect } from 'react'

//Iconos y estilos//
import Button from '@mui/material/Button';
import soleado from '../icons/01d.png'
import algoDeNubes from '../icons/02d.png'
import nubesDispersas from '../icons/03d.png'
import muyNuboso from '../icons/04d.png'
import aguacero from '../icons/09d.png'
import lluvia from '../icons/10d.png'
import tormenta from '../icons/11d.png'
import nieve from '../icons/13d.png'
import neblina from '../icons/50d.png'
import polvo from '../icons/polvo.png'
import humo from '../icons/humo.png'
import lluviaM from '../icons/lluviamoderada.png'

//Backcronds
import clear from '../backgronds/soleado.png'
import cloud from '../backgronds/clouds.png'
import snow from '../backgronds/snow.png'
import drizzle from '../backgronds/Drizzle.png'
import rainn from '../backgronds/rain.png'
import tormentaa from '../backgronds/tormenta.png'
import './cardClima.css'


const CardClima = ({apiClima, tiempo, setForest, background}) => {

  const {name, main, sys, weather, wind, timezone, dt} = apiClima

  let humedad = main.humidity,
      temp = main.temp,
      tempMin = main.temp_min,
      tempMax = main.temp_max,
      sensación = main.feels_like,
      description = weather.map(el =>el.description),
      mainStatus = weather.map(el => el.main ),
      viento = wind.speed,
      fecha = new Date(dt * 1000).toLocaleDateString("es-AR")

  //console.log(mainStatus[0])
  //Thunderstorm, 	Drizzle, 	Rain, 	Snow, Clear, 	Clouds
//UseState area// 
const [fondoWather, setFondoWather] = useState("")
const [tiempoW, setTiempow] = useState("")
const [hora, setHora] = useState(null)
const [minutes, setMinutes] = useState(null)
const [seconds, setSeconds] = useState(null)

let timeZhora = timezone / 3600
    setInterval(() => {
      let tiempilloo = new Date(),
        horas = tiempilloo.getHours() + 3 + timeZhora,
        minute = tiempilloo.getMinutes(),
        second = tiempilloo.getSeconds()

        if(horas > 24) {
          let asd = horas-24
          setHora(asd)
        } else {
          setHora(horas)
        }
        setMinutes(minute)
        setSeconds(second)

    }, 1000);
//UseEffect area icons//
  useEffect(() => {
    if(tiempo){
      switch(tiempo){
          case "cielo claro":
            setTiempow(soleado)
           break
          case "nubes dispersas":
            setTiempow(algoDeNubes)
            break
           case "nubes":
             setTiempow(nubesDispersas)
             break
           case "algo de nubes":
            setTiempow(nubesDispersas)
            break
           case "muy nuboso":
            setTiempow(muyNuboso)
            break
           case "lluvia ligera":
            setTiempow(lluvia)
            break
           case "aguacero":
            setTiempow(aguacero)
             break
           case "tormenta":
            setTiempow(tormenta)
             break
           case "nevada ligera":
            setTiempow(nieve)
             break
           case "neblina":
            setTiempow(neblina)
             break
            case "lluvia moderada":
            setTiempow(lluviaM)
             break
            case "humo":
            setTiempow(humo)
             break
            case "polvo":
            setTiempow(polvo)
             break
      }
    }
  }, [tiempo])

  //UseEffect area backcrounds//
   useEffect(() => {
    if(background){
      switch(background){
          case "Clear":
            setFondoWather(clear)
           break
          case "Clouds":
            setFondoWather(cloud)
            break
           case "Snow":
            setFondoWather(snow)
             break
           case "Drizzle":
            setFondoWather(drizzle)
            break
           case "Rain":
            setFondoWather(rainn)
            break
           case "Thunderstorm":
            setFondoWather(tormentaa)
            break
      }
    }
  }, [background])
//console.log(background)
 
  const forestSearch = (e) => {
    e.preventDefault()
    setForest(true)
    console.log("click")
  }
  
  return (
    <>
      <section className='containerCard'>
        <div className='containerCity' style={{backgroundImage: `url(${fondoWather})`}} >
          <div>
            <h3>{Math.floor(temp)}°</h3>
            <h3>{name}</h3>
          </div>
          <div className='containerDesc'>
            <p className='pText'>{description}</p>
            <img className='iconW' src={tiempoW} alt="iconClima"/>
          </div>
        </div>
        
        <section className='containerPadreData'>
          <div className='containerData'>
            <p>Sensación T: {Math.floor(sensación)}°</p>
            <h5>{fecha}</h5>
            <h5>{hora<10?<span>0{hora}</span>:<span>{hora}</span>}:{minutes<10?<span>0{minutes}</span>:<span>{minutes}</span>}</h5>
          </div>
          <div className='containerData'>
            {tempMin === tempMax?<p>Máx: {Math.floor(tempMax + 1)}°</p>:<p>Máx: {Math.floor(tempMax)}°</p>}
            <p>Mín: {Math.floor(tempMin)}°</p>
            <p>Humedad: {humedad}%</p>
            <p>Viento: {Math.floor(viento)}/h</p>
          </div>
        </section>
          <Button type='submit' 
          style={{backgroundColor: "#A49DB8", height: "4.5vh", width: "5rem", alignSelf: "center", marginBottom: "1.5rem"}} 
          variant="contained" 
          onClick={forestSearch}>Ver +</Button>
      </section>
    </>
  )
}

export  {CardClima}