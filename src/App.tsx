import { useState ,useEffect} from 'react'
import { createClient, Session } from '@supabase/supabase-js'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Guns from "./componentes/Gun/Guns"
const supabaseUrl = 'https://hcsmsnyvmcgkgvnppedi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhjc21zbnl2bWNna2d2bnBwZWRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3NzAxMjksImV4cCI6MjA1MzM0NjEyOX0.hjWIEc7zSW5xL7X2tHydujCl55yDPWY6aT30hi-80NM'
const supabase = createClient(supabaseUrl, supabaseKey)

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
  const [session, setSession] = useState<Session | null>(null)
  const [data,setData]= useState()

  async function getDataFromUser() {
    const { data, error } = await supabase.from('user').select().eq('uuid', session?.user.id).single()
    console.log(data)
    if (error) {
      console.log(error);
    } else {
      setData(data)
    }
  }
  async function addDataToUser() {
    const { data, error } = await supabase.from('user').insert([
      { uuid:session?.user.id, detergente: 15 }
    ]);
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  }
  const [armas, setArmas] = useState<Arma[]>([])
  
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

export default App
