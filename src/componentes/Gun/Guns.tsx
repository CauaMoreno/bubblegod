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
    
    valorUpgrade:number
    aplicadoUpgrade:boolean
    tipoUpgrade:"Autoclicker"|"Multiplicador"|"Acelerador"|"Inexistente"
}
function Guns({nome,url,dClick,dSecond,locked,detergenteClick,comprar,valor, aplicadoUpgrade, tipoUpgrade}:Arma) {
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
                            if(tipoUpgrade!="Autoclicker"){
                                setAvailable(false)
                                let tempo = dSecond*10
                                if(tipoUpgrade=='Acelerador' && aplicadoUpgrade){
                                    tempo=dSecond*10*0.6
                                }
                                setTimeout(()=> {
                                    let detergeIncrease = dClick
                                    setAvailable(true)
                                    if(tipoUpgrade=="Multiplicador" && aplicadoUpgrade){
                                        detergeIncrease*=1.5
                                    }
                                    detergenteClick(detergeIncrease)
                                }, tempo)
                            }
                            if(aplicadoUpgrade && tipoUpgrade=="Autoclicker"){
                                window.setInterval(()=>{
                                    detergenteClick(dClick)
                                },100)
                            }
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
