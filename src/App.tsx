import { createClient, Session } from '@supabase/supabase-js'

import './App.css'
import Game from "./paginas/GameScreen/Game"
import Login from "./paginas//LoginScreen/LoginScreen"

import { BrowserRouter, Route, Routes } from 'react-router'
import { useEffect, useState } from 'react'
import { getDataFromUser } from './componentes/Api/config'

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
function App() {
    const [session,setSession]= useState<Session>();
    const [elementos,setElem] = useState<Arma[]>([]);
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
                    
                     <Route path="/bubblegod/game" element={<Game armas={elementos}  />} /> 
                </Routes>
        </BrowserRouter>
       
        </div>
       
    )
   
}

export default App
