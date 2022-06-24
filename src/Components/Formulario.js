import React, { useState } from 'react'
import { calcularTotal } from '../helpers';

function Formulario({cantidad, setCantidad, plazo, setPlazo}) {

    // Definir state
    const [error, setError] = useState(false)

    function leerCantidad(e) {
        setCantidad(parseInt(e.target.value));
    }

    function leerPlazo(e) {
        setPlazo(e.target.value)
    }
    

    function calcularPrestamos(e) {
        e.preventDefault();
        
        
        // Validar form
        if(cantidad === 0 || plazo === "" || isNaN(plazo) || isNaN(cantidad)) {
            setError(true)

            setTimeout(() => {
                setError(false)
            }, 3000);

            return;
        }

        // Eliminar el error previo
        setError(false)

        // Realizar la cotizacion
        const total = calcularTotal(cantidad, parseInt(plazo))

        console.log(total)
    }

  return (

    <>
        <form onSubmit={calcularPrestamos}>
            
          <div className="row">
              <div>
                  <label>Cantidad Prestamo</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      min={0}
                      placeholder="Ejemplo: 3000"
                      onChange={ leerCantidad } 
                  />
              </div>
              <div>
                  <label>Plazo para Pagar</label>
                  <select 
                      className="u-full-width"
                      onChange={leerPlazo}
                  >
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width" 
                  />
              </div>
          </div>

        </form>

        {error ? <p className='error'>Todos los campos son obligatorios</p> : null}
        
    </>   
  )
}

export default Formulario