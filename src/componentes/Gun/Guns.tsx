import { useState } from 'react'
import './Guns.css'
type Arma = {
    nome:string,
    url:string,
    dClick:number,
    dSecond:number,
    locked:boolean,
    detergenteClick:Function,
    comprar:Function,
    valor:number,

}
function Guns({nome,url,dClick,dSecond,locked,detergenteClick,comprar,valor}:Arma) {
    const [lock,setLock] = useState(locked)
    const [available,setAvailable] = useState(true)
    function unlock(){
        const sucesss:boolean= comprar(valor)
        if(sucesss){
            setLock(false)
        }
    }
    if(!lock){
        return (
            <div className='Gun'>
                <div className='info'>
                    <img src={url}></img>
                    <p>{nome}</p>
                </div>
                {
                    available?
                    (<div className='status' 
                        onClick={()=>{
                        
                            setAvailable(false)
                            setTimeout(()=> {
                                setAvailable(true)
                                detergenteClick(dClick)
                            }, dSecond*100)
                        }
                        }>
                        <p>{dClick} D/c</p>
                    </div>):
                    (<div className='status blink'>
                        <p>{dClick} D/c</p>
                    </div>)
                    
                }
                
            </div>
        )
    }else{
        return(
            <div className='Gun block'>
                <div className='info'>
                    <img src={url}></img>
                    <p>Blocked</p>
                </div>
                <div className='status' onClick={unlock} >
                    <p>{valor} detergentes <br/>p/ desbloquear</p>
                </div>
            </div>
        )
       
    }
 
  
}

export default Guns
