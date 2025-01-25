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
  valor_desbloqueio:number
}
function Game({armas}:{armas:Arma[]}) {
  const [Detergentes, setDetergente] = useState(0)
 
  
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
          <img src='https://hcsmsnyvmcgkgvnppedi.supabase.co/storage/v1/object/sign/assets/guns/New%20Piskel%20(6).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvZ3Vucy9OZXcgUGlza2VsICg2KS5wbmciLCJpYXQiOjE3Mzc4MDMyNDUsImV4cCI6MTczODQwODA0NX0.zhs2imk2leXGe2-VUje0I8ynhIrScDduPhVU30RVJK4&t=2025-01-25T11%3A07%3A25.901Z'></img>
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
                    valor={arma.valor_desbloqueio}
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
