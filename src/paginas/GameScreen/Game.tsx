import { useEffect} from 'react'
import './Game.css'
import Guns from "../../componentes/Gun/Guns"
import { signOut } from '../../componentes/Api/config'
import {Arma} from '../../tipos'
import { Session } from '@supabase/supabase-js'
import { useNavigate } from 'react-router-dom'

let iniciado =false

function Game({armas,setUpgradeVisible,showLore,detergente,setDetergente,session,salvarjogo,setSession}:{
  armas:Arma[],setUpgradeVisible:any,showLore:any,detergente:number,setDetergente:any,salvarjogo:any,session:Session|undefined,setSession:Function}) {
  const navigate = useNavigate();
  useEffect(() => {
      let interval:any;
      if (iniciado) {
          interval = setInterval(() => {
              setDetergente((detergente: number) => detergente + 1);
          }, 200);
      } else {
          clearInterval(interval);
      }
      return () => clearInterval(interval);
  }, [iniciado]);


  useEffect(()=>{
    showLore()
  },[])
  function detergenteClick(dClick:number){
    setDetergente(
      ()=>{
        return(detergente+dClick)
      }
    )
  }
  function comprar(dNumber:number):boolean{

    if(detergente-dNumber>0){
      setDetergente(detergente-dNumber)
      showLore()
      return true
    }
    return false
  }
  if(!!session){
    return (
      <div className='GameScreen'> 
        <header>
          <span>Bubble Guns</span>
          <div className='detergentes'>
            <img src='https://hcsmsnyvmcgkgvnppedi.supabase.co/storage/v1/object/sign/assets/guns/New%20Piskel%20(6).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvZ3Vucy9OZXcgUGlza2VsICg2KS5wbmciLCJpYXQiOjE3Mzc4MDMyNDUsImV4cCI6MTczODQwODA0NX0.zhs2imk2leXGe2-VUje0I8ynhIrScDduPhVU30RVJK4&t=2025-01-25T11%3A07%3A25.901Z'></img>
            <span>{detergente.toFixed(1)}</span>
          </div>
          <button
          onClick={()=>{

            salvarjogo()
            signOut()
            setSession(undefined)
            navigate('/bubbleguns')
          }}>
            Salvar <br></br> e sair
          </button>
        </header>
        <div className='ArmasContainer'>
            {
              armas.map(
                (arma:Arma)=>{
                  if(arma.tipoUpgrade=='Autoclicker'&&arma.adquiridoUpgrade){
                    iniciado=true
                  }
                  return (
                    <Guns
                      arma={arma}
                      detergenteClick={detergenteClick}
                      comprar={comprar}
                      detergente={detergente}
                      session={session!}
                      
                    >
                    </Guns>
                  )
                },
              )
            } 
             <button className="upButton" onClick={ () => {
                setUpgradeVisible(true)
              } }>UPGRADES</button>
             
           
        </div>
        
      </div>
      )
  }else{
    navigate('/bubbleguns')
  }
  
}

export default Game
