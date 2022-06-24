import { useState } from 'react';
import Formulario from './Components/Formulario';
import Header from './Components/Header';

function App() {
  // Definir el state
  // Se pone acá para poder usarse luego
  // Los componentes pueden ir del padre al hijo pero nunca del hijo al padre
  const [cantidad, setCantidad] = useState(0);

  const [plazo, setPlazo] = useState('')

  return (
    <>
      <Header titulo='Cotizador de Prestamos' />

      <div className='container'>
          <Formulario cantidad={cantidad} setCantidad={setCantidad} plazo={plazo} setPlazo={setPlazo}/>
      </div>
      
    </>
  );
}




export default App;
