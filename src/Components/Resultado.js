import React from 'react'

function Resultado({total, cantidad, plazo}) {
  return (
    <div className='u-full-width resultado'>
        <h3>Resumen</h3>
        <p>La cantidad solicitada es: ${cantidad}</p>
        <p>El plazo para pagar es {plazo} meses</p>

        {/* Para que solo muestre dos valores despues de la coma */}
        <p>Su pago mensual es de ${(total / plazo).toFixed(2)}</p>

        <p>
            El total serían: ${total.toFixed(2)}
        </p>
    </div>
  )
}

export default Resultado