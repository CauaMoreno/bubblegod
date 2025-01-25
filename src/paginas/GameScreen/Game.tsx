import { useState ,useEffect} from 'react'
import './Game.css'
import Guns from "../../componentes/Gun/Guns"
import UpgradeContainer from '../../componentes/UpgradeContainer/UpgradeContainer'


type Upgrade = {
  nome:string
  valor:number
  aplicado:boolean
  tipo:"Autoclicker"|"Multiplicador"|"Acelerador"|"Inexistente"
}
type Arma = {
  nome:string,
  codigo_imagem:string,
  valor_segundo:number,
  valor_click:number,
  block:boolean,
  valor_desbloqueio:number,
  upgrade:Upgrade,
}



function Game({armas,setUpgradeVisible}:{armas:Arma[],setUpgradeVisible:any}) {
  const [Detergentes, setDetergente] = useState(0)
  //const [iniciado, setIniciado] = useState(false);
 

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
                    upgrade={arma.upgrade}
                  >
                  </Guns>
                )
              },
            )
          } 
          <button onClick={ () => {
            setUpgradeVisible(true)
          } }>UPGRADES</button>
      </div>
      
    </div>
    )
}

export default Game
