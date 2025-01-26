import { createClient, Session } from '@supabase/supabase-js'

import './LoreContainer.css'
import {Lore, LoreProps} from '../../tipos'



function LoreContainer({titulo,lore,visible,increaseIndex}:LoreProps) {
   
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
