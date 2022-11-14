import React from 'react'
import { useState } from 'react'

//componentes y estilos
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './formSearch.css'


const FormSearch = ({setCity, error, setApiClima, setError, setForest}) => {
//UseState area//
const [search, setSearch] = useState(null)   
const [validacion, setValidacion] = useState(true) 
const [validacionDos, setValidacionDos] = useState(false)



  const handleSubmit = (e) =>{
    e.preventDefault()
  if(!search){
    setValidacion(true)
    setApiClima("")
    setValidacionDos(true)
    setForest(false)
  } else {
    setValidacion(false)
    setValidacionDos(false)
    setCity(search)
    setApiClima(null)
    setError(false)
    setForest(false)
  }
  }
  return (
    <>
         <Box
            onSubmit={handleSubmit}
            component="form"
            sx={{
             '& .MuiTextField-root': { m: 1, width: '25ch'} ,
            }}
            autoComplete="off" >
                <div className='formContainer'>
                    <h3 className='h3C'>WEATHER APP</h3>
                    <section className='inputContainer'>
                        <div className='containerTextInp'>
                            <input 
                            style={{color: "#8E8B9A"}}
                            className='input'
                            type="text"
                            onChange={(e) => setSearch(e.target.value)}
                            />
                            <Button type='submit' 
                            style={{backgroundColor: "#A49DB8", height: "4.5vh"}} 
                            variant="contained">Buscar</Button>
                        </div>
                           {validacion && <p className='pData'>Ingrese el nombre de la ciudad</p>}   
                           {validacionDos && <p className='pData'>Debes ingresar algún dato</p>} 
                           {error && <p style={{color: "red"}}>Ingresa bien los datos</p>}
                    </section>
                    
                </div>
         </Box>
    </>
  )
}

export  {FormSearch}