import { useState ,useEffect} from 'react'
import './Game.css'
import Guns from "../../componentes/Gun/Guns"
import UpgradeContainer from '../../componentes/UpgradeContainer/UpgradeContainer'



type Arma = {
  nome:string,
  codigo_imagem:string,
  valor_segundo:number,
  valor_click:number,
  block:boolean,
  valor_desbloqueio:number,

  valorUpgrade:number
  adquiridoUpgrade:boolean
  tipoUpgrade:"Autoclicker"|"Multiplicador"|"Acelerador"|"Inexistente"
}

function Game({armas,setUpgradeVisible,showLore}:{armas:Arma[],setUpgradeVisible:any,showLore:any}) {
  const [Detergentes, setDetergente] = useState(0)
 
  useEffect(()=>{
    showLore()
  },[])
  function detergenteClick(dClick:number){
    setDetergente(Detergentes+dClick)
  }
  function comprar(dNumber:number):boolean{

    if(Detergentes-dNumber>0){
      setDetergente(Detergentes-dNumber)
      showLore()
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
                     
                     tipoUpgrade={arma.tipoUpgrade}
                     valorUpgrade={arma.valorUpgrade}
                     aplicadoUpgrade={arma.adquiridoUpgrade}
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
