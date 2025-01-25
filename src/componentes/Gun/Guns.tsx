import { useState } from 'react'
import './Guns.css'
type Arma = {
    nome:string,
    url:string,
    dClick:number,
    dSecond:number,
    locked:boolean,
    detergenteClick:Function,
    valor:number
}
function Guns({nome,url,dClick,dSecond,locked,detergenteClick,valor}:Arma) {
    if(locked){
        return (
            <div className='Gun'>
                <div className='info'>
                    <img src={url}></img>
                    <p>{nome}</p>
                </div>
                <div className='status' 
                    onClick={()=>{                
                        detergenteClick(dClick)}
                    }>
                    <p>{dClick} D/c</p>
                    <p>{dSecond} D/s</p>
                </div>
            </div>
        )
    }else{
        return(
            <div className='Gun block'>
                <div className='info'>
                    <img src={url}></img>
                    <p>Blocked</p>
                </div>
                <div className='status block' >
                    <p>{valor} detergentes <br/>p/ desbloquear</p>
                    
                </div>
            </div>
        )
       
    }
 
  
}

export default Guns
