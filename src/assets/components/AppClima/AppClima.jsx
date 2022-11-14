import React from 'react'
import { useState, useEffect } from 'react'
//commponentes//
import { CardClima } from '../CardClima/CardClima'
import { ForecastExt } from '../ForecastExtendCard/ForecastExt'
import { FormSearch } from '../FormSearch/FormSearch'
//componente de animación
import {motion} from 'framer-motion'
//estilo
import './appClima.css'

const AppClima = () => {
//UseState area//
const [apiClima, setApiClima] = useState(null)
const [city, setCity] = useState(null)
const [error, setError] = useState(false)
const [tiempo, setTiempo] = useState("")
const [background, setBackground] = useState("")

//tiempo expendido
const [forest, setForest] = useState(false)
const [apiForest, setApiForest] = useState(null)

//UseEffect area//
useEffect(()=>{
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=001ed568f24a533f955d9bd6ab419bbe&units=metric&lang=es`
  if(!city) return 
  try {
      const getApi = async () =>{
          const getdata = await fetch(url)
          if(!getdata.ok) {
              let err= new Error("error de busqueda"),
              status = err.status || "00",
              statusText = err.statusText || "00"
              const errorSearch = true
              setError(errorSearch)
              throw err 
            }
            const responsedata = await getdata.json()
            setApiClima(responsedata) 

            let {weather} = responsedata
            let weatherBackground = weather.map(el=> el.main)
            setBackground(weatherBackground[0])
            let weatherStatus = weather.map(el=> el.description)
            setTiempo(weatherStatus[0])
          }
          
          getApi()  
          
        } catch (error) {
          console.log(error)
       
  } 
},[city])

//tiempo expendido
useEffect(() => {
  const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=001ed568f24a533f955d9bd6ab419bbe&units=metric&lang=es`
  if(!city) return
  try {
    const getApiForest = async () =>{
      const getdata = await fetch(url2)
      if(!getdata.ok) {
        let err= new Error("error de busqueda"),
        status = err.status || "00",
        statusText = err.statusText || "00"
        throw err 
      }
      const responsedata = await getdata.json()
      setApiForest(responsedata) 
    }
    getApiForest()
  } catch (error) {
    console.log(error)
  } 
}, [city])

console.log(apiClima)
console.log(city)
  return (
    <>
    <section className='backgrondCont'>
        <div className='containerClima'>
            <FormSearch
              setCity={setCity}
              error={error}
              setError={setError}
              setApiClima={setApiClima}
              setForest={setForest}
            />
            {!apiClima? <div className='espacio'></div>: 
            <motion.section 
            animate={{y : 40}}
            transition={{ type: "spring" }}
            className='container2'>
              {apiClima && <CardClima
                apiClima={apiClima}
                tiempo={tiempo}
                background={background}
                setForest={setForest}
              />}
              {forest && <motion.div
                animate={{x: 50}}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <ForecastExt
                apiForest={apiForest}
                setForest={setForest}/>
              </motion.div>} 
            </motion.section>}
        </div>    
    </section>
    
    </>
  )
}

export  {AppClima}