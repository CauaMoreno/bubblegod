import { useState } from 'react'
import './Guns.css'
import { updateGun } from '../Api/config'
import {Arma, ArmaProp} from '../../tipos'
import { Session } from '@supabase/supabase-js'

function Guns({arma,detergenteClick,comprar,detergente,session}:{arma:Arma,detergenteClick:Function,comprar:Function,
    detergente:number,session:Session}) {
    const [lock,setLock] = useState(arma.block)
    const [available,setAvailable] = useState(true)
    function unlock(){
        const sucesss:boolean= comprar(arma.valor_desbloqueio)
        if(sucesss){
            setLock(false)
            try {
                 updateGun(
                    {
                        nome:arma.nome,
                        block:false,
                        session:session!,
                        valor_segundo:arma.valor_segundo,
                        valor_click:arma.valor_click,
                        codigo_imagem:arma.codigo_imagem,
                        valor_desbloqueio:arma.valor_desbloqueio,
                        id:arma.id,
                        tipoUpgrade:arma.tipoUpgrade,
                        valorUpgrade:arma.valorUpgrade,
                        adquiridoUpgrade:arma.adquiridoUpgrade,
                    })
            } catch (error) {
                console.log(error)
            }
        }
    }
    if(!lock){
        return (
            <div className='Gun'>
                <div className='info'>
                    <img src={arma.codigo_imagem}></img>
                    <p>{arma.nome}</p>
                </div>
                {
                    available?
                    (<div className='status'
                        
                        onClick={()=>{
                            if(arma.adquiridoUpgrade && arma.tipoUpgrade=="Autoclicker"){
                                return
                            }
                            setAvailable(false)
                            let tempo = arma.valor_segundo*120
                            console.log(tempo)

                            if(arma.tipoUpgrade=='Acelerador' && arma.tipoUpgrade){
                                tempo=tempo*0.75
                                console.log(tempo)
                            }
                            setTimeout(()=> {
                                let detergeIncrease = arma.valor_click
                                setAvailable(true)
                                if(arma.tipoUpgrade=="Multiplicador" && arma.adquiridoUpgrade){
                                    detergeIncrease =1.5*detergeIncrease
                                }
                                detergenteClick(detergeIncrease);

                            }, tempo)
                            
                           
                        }
                        }>
                        <p>{arma.valor_click} D/c</p>
                    </div>):
                    (<div className='status blink'>
                        <p>{arma.valor_click} D/c</p>
                    </div>)
                    
                }
                
            </div>
        )
    }else{
        return(
            <div className='Gun block'>
                <div className='info'>
                    <img src={arma.codigo_imagem}></img>
                    <p>Blocked</p>
                </div>
                <div className='status' onClick={unlock} >
                    <p>{arma.valor_desbloqueio} detergentes <br/>p/ desbloquear</p>
                </div>
            </div>
        )
       
    }
 
  
}

export default Guns
