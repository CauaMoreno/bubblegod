import { createClient, Session } from '@supabase/supabase-js'

import './LoreContainer.css'


type Lore = {
    titulo:string,
    lore:string,
    visible:boolean,
    increaseIndex:any
  }
function LoreContainer({titulo,lore,visible,increaseIndex}:Lore) {
   
    if(visible){
        return(
            <div className='LoreContainer'>
                <h1>{titulo}</h1>
                <p>{lore}</p>
                <button onClick={increaseIndex}>Close</button>
            </div>
        )
    }
   
   
}

export default LoreContainer
