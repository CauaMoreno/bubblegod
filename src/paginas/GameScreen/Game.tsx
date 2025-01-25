import { useState ,useEffect} from 'react'
import { createClient, Session } from '@supabase/supabase-js'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Game.css'
import Guns from "../../componentes/Gun/Guns"
const supabaseUrl = 'https://hcsmsnyvmcgkgvnppedi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhjc21zbnl2bWNna2d2bnBwZWRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3NzAxMjksImV4cCI6MjA1MzM0NjEyOX0.hjWIEc7zSW5xL7X2tHydujCl55yDPWY6aT30hi-80NM'
const supabase = createClient(supabaseUrl, supabaseKey)

type Arma = {
  nome:string,
  codigo_imagem:string,
  valor_segundo:number,
  valor_click:number,
  block:boolean,
}
function Game({armas}:{armas:Arma[]}) {
  const [Detergentes, setDetergente] = useState(0)
  const [iniciado, setIniciado] = useState(true);
  function detergentesSegundo():number{
    const armasDesbloqueadas = armas.filter(
      (arma:Arma)=>{
        if(arma.block){
          return true
        }else{
          return false
        }
      }
    )
    let detSec = 0;
    console.log(armas)

    armasDesbloqueadas.forEach((arma:Arma) => detSec+=arma.valor_click);
    return detSec
  }
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
  }, [iniciado,Detergentes]);
  function detergenteClick(dClick:number){
    setDetergente(Detergentes+dClick)
  }
  function comprar(dNumber:number):boolean{
    if(Detergentes-dNumber>0){
      setDetergente(Detergentes-dNumber)
      return true
    }
    return false
  }

  return (
    <div className='GameScreen'> 
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
                    url={arma.codigo_imagem}
                    dClick={arma.valor_click}
                    dSecond={arma.valor_segundo}
                    nome={arma.nome}
                    locked={arma.block}
                    detergenteClick={detergenteClick}
                    comprar={comprar}
                    valor={10}
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

export default Game
