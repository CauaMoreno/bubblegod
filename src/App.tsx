import { createClient, Session } from '@supabase/supabase-js'

import './App.css'
import Game from "./paginas/GameScreen/Game"
import Login from "./paginas//LoginScreen/LoginScreen"
import Upgrades from './paginas/Upgrades/Upgrades'

import { BrowserRouter, Route, Routes } from 'react-router'
import { useEffect, useState } from 'react'
import { getDataFromUser } from './componentes/Api/config'
import LoreContainer from './componentes/LoreContainer/LoreContainer'

const supabaseUrl = 'https://hcsmsnyvmcgkgvnppedi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhjc21zbnl2bWNna2d2bnBwZWRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3NzAxMjksImV4cCI6MjA1MzM0NjEyOX0.hjWIEc7zSW5xL7X2tHydujCl55yDPWY6aT30hi-80NM'
const supabase = createClient(supabaseUrl, supabaseKey)
type Lore = {
    titulo:string,
    lore:string,
}
const Lores= new Map<number,Lore>([
    [0,{
        titulo:"Bubble Gun",
        lore:"A guerra entre as nações das Agulhas só se intensifica, e a situação fica cada vez mais crítica. Você, uma corporação bélica, se limita a vender arcos de bolha — a única arma realmente agressiva do seu povo.",
    }],
    [1,{
        titulo:"Arma Bolhuda",
        lore:"Com o avanço da guerra, nossos engenheiros desenvolveram as armas Bolhudas, uma metralhadora automática de bolhas de grande potência. Embora não seja altamente eficaz, é o melhor que temos no momento...",

    }],
    [3,{
        titulo:"Arminha bobulha",
        lore:" ",
    }]
])

type Arma = {
    nome:string,
    codigo_imagem:string,
    valor_segundo:number,
    valor_click:number,
    valor_desbloqueio:number
    block:boolean,
  }
function App() {
    const [session,setSession]= useState<Session>();
    const [elementos,setElem] = useState<Arma[]>([]);
    const [loreIndex,setLoreIndex] = useState(0);
    const [loreVisible,setLoreVisible] = useState(false);

    let ggg:Arma[] =[];
    
    
    useEffect(() => {
        if (session){
            attSession()
            attArmas()
        };
    }, [session])

    async function attArmas(){
        const { data, error } = await supabase.from('gun').select().eq('autor', session?.user.id)

        if (error) {
          console.log(error);
        } else {
            const arrn = data.sort((a:any, b:any) => a.id - b.id).slice()
            setElem(arrn)
            ggg = data
        }
    }
    async function attSession(){
        setSession(session)
        console.log(session)
    }
    return(
        <div>
            <BrowserRouter>
                    <Routes>
                        <Route path="/bubblegod/" element={<Login setSession={setSession} />} /> 
                        
                        <Route path="/bubblegod/game" element={<Game armas={elementos} showLore={()=>{
                            setLoreVisible(true)
                        }}  />} /> 

                        {/* <Route path="/bubblegod/powerup" element={<PowerUps powerups={elementos}  />} />  */}
                    </Routes>
            </BrowserRouter>
            <LoreContainer 
                titulo={Lores.get(loreIndex)?.titulo!}
                lore={Lores.get(loreIndex)?.lore!}
                visible={loreVisible}
                increaseIndex={()=>{
                    setLoreIndex(loreIndex+1)
                    setLoreVisible(false)
                }}
            ></LoreContainer>
        </div>
       
    )
   
}

export default App
