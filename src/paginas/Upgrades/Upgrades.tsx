import { createClient, Session } from '@supabase/supabase-js'

import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router'
import { useEffect, useState } from 'react'
import { getDataFromUser } from './componentes/Api/config'

const supabaseUrl = 'https://hcsmsnyvmcgkgvnppedi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhjc21zbnl2bWNna2d2bnBwZWRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3NzAxMjksImV4cCI6MjA1MzM0NjEyOX0.hjWIEc7zSW5xL7X2tHydujCl55yDPWY6aT30hi-80NM'
const supabase = createClient(supabaseUrl, supabaseKey)


type Upgrade = {
    nome:string,
    foco:string,
    valor:number,
    eficacia:number,
    adquirido:boolean,
  }
function Upgrades() {
    const[upgrades, setUpgrades] = useState<Upgrade[]>()

    function 


    return(
        <div>
            
        </div>
       
    )
}

export default Upgrades
