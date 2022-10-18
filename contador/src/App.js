
import './App.css';
import Boton from './component/Boton';
import Contador from './component/Contador';
import logoSena from'./imagenes/logo-sena.png';
import {useState} from 'react';
function App() {
  const [numClics, setNumclics]= useState (0);



  const readyClic = () =>{
    setNumclics(numClics +1 );

  }
  const restartcontador = ()=>{
    setNumclics(0);

  }
  return (
    <div className='App'>
      <div className='logo-sena-contenedor'>
        <img 
        className='sena-logo'
          src={logoSena}
          alt= 'logo del sena'/>
          <h1>SENA</h1>

      </div>

      <div className='container-major'>
       <Contador numClics={numClics}/>
       <Boton 
       texto='clic'
       btnclic = {true}
       readyClic={readyClic}/>
      <Boton 
       texto= 'restart'
       btnclic= {false}
       readyClic={restartcontador}/>
      </div>


    </div>
  );
}

export default App;
