import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Guns from "./componentes/Gun/Guns"
type Arma = {
  nome:string,
  url:string,
  dClick:number,
  dSecond:number,
  locked:boolean
}
function App() {
  const [Detergentes, setDetergente] = useState(0)
  const [iniciado, setIniciado] = useState(true);
  
  const [armas, setArmas] = useState<Arma[]>([
    {
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8217AgF0fmdDqiONeR7PO0kJXF9m85VrBdA&s',
      dClick:10,
      dSecond:10,
      nome:'bubblegun',
      locked:true,
    },
    {
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8217AgF0fmdDqiONeR7PO0kJXF9m85VrBdA&s',
      dClick:5,
      dSecond:5,
      nome:'bubblegun',
      locked:true,
    },
    {
      url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8217AgF0fmdDqiONeR7PO0kJXF9m85VrBdA&s',
      dClick:10,
      dSecond:10,
      nome:'bubblegun',
      locked:false,
    },
    
  ])
  function detergentesSegundo():number{
    const armasDesbloqueadas = armas.filter(
      (arma:Arma)=>{
        if(arma.locked){
          return true
        }else{
          return false
        }
      }
    )
    let detSec = 0;
    armasDesbloqueadas.forEach((arma:Arma) => detSec+=arma.dSecond);
    console.log(detSec)
    return detSec
  }
  function cresceClick
  useEffect(() => {
      let interval:any;
      if (iniciado) {
          interval = setInterval(() => {
              const det =detergentesSegundo()/100
              setDetergente(Detergentes => Detergentes + det);
          }, 10);
      } else {
          clearInterval(interval);
      }
      return () => clearInterval(interval);
  }, [iniciado]);

  return (
    <div className='App'> 
      <header>
        <span>Bubble Gun</span>
        <div className='detergentes'>
          <img></img>
          <span>{Detergentes.toFixed(1)}</span>
        </div>
      </header>
      <div className='ArmasContainer'>
          {
            armas.map(
              (arma:Arma)=>{
                return (
                  <Guns
                  url={arma.url}
                  dClick={arma.dClick}
                  dSecond={arma.dSecond}
                  nome={arma.nome}
                  locked={arma.locked}
                  >

                  </Guns>
                )
              }
            )
          } 
      </div>
    </div>
    
     
      
  )
}

export default App
