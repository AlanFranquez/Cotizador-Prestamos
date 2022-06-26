import { useState } from 'react';
import Formulario from './Components/Formulario';
import Header from './Components/Header';
import Mensaje from './Components/Mensaje';
import Resultado from './Components/Resultado';
import Spinner from './Components/Spinner';

function App() {
  // Definir el state
  // Se pone acá para poder usarse luego
  // Los componentes pueden ir del padre al hijo pero nunca del hijo al padre
  const [cantidad, setCantidad] = useState(0);

  const [plazo, setPlazo] = useState('');

  const [total, setTotal] = useState(0);

  const [cargando, setCargando] = useState(false)
  
  let componente;

  if(cargando) {
    componente = <Spinner />
  } else if(total === 0) {
    componente = <Mensaje />
  } else {
    componente = <Resultado total={total} plazo={plazo} cantidad={cantidad}/>
  }

  return (
    <>
      <Header titulo='Cotizador de Prestamos' />

      <div className='container'>
          <Formulario cantidad={cantidad} setCantidad={setCantidad} plazo={plazo} setPlazo={setPlazo} total={total} setTotal={setTotal} setCargando={setCargando}/>


          {/* <div className='mensajes'>
            {total === 0 ?  <Mensaje /> : <Resultado total={total} plazo={plazo} cantidad={cantidad}/>}
          </div> */}

          <div className='mensajes'>
            <div>{componente}</div>
          </div>
          
          
      </div>

      
      
    </>
  );
}




export default App;
