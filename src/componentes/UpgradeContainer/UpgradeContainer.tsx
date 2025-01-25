import { data } from 'react-router'
import './UpgradeContainer.css'
import { useEffect, useState } from 'react'

type Arma = {
    nome:string,
    codigo_imagem:string,
    valor_segundo:number,
    valor_click:number,
    block:boolean,
    valor_desbloqueio:number,
    valorUpgrade:number
    adquiridoUpgrade:boolean
    tipoUpgrade:"Autoclicker"|"Multiplicador"|"Acelerador"|"Inexistente"
    
  }
type UpgradeContainer = {
    visible:boolean
    setVisible:any
    armas:Arma[],
    setArmas:any,
    detergente:number,
    setDetergente:any
}



function UpgradeContainer({visible, setVisible, armas,setArmas,setDetergente,detergente}: UpgradeContainer){
    const [iniciado, setIniciado] = useState(false);
    useEffect(() => {
        let interval:any;

        if (iniciado) {
            interval = setInterval(() => {
                setDetergente((detergente: number) => detergente + 1);
            }, 200);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [iniciado]);

    function handleClick(arma:Arma){
        const valorUpgrade = arma.valorUpgrade
        console.log(arma)
        if(detergente-valorUpgrade>=0 && !arma.adquiridoUpgrade && !arma.block){
            setDetergente(detergente-valorUpgrade)
            const index = armas.indexOf(arma)
            const arrN = armas.slice()
            arrN[index].adquiridoUpgrade=true
            setArmas(arrN)
            window.alert("comprado")
            if(arma.tipoUpgrade === "Autoclicker"){
                setIniciado(true)
            }
        }
        
    }
    if(visible){
        return(
            <div className="UpgradeContainer">
                <div className='fitCont'>
                    {
                        armas.map(arma => (
                            !arma.adquiridoUpgrade?
                            (<div key={arma.nome} className='upgradeData'>
                                <div className='data' >
                                    <p className='name'>{arma.nome}</p>
                                    <p className='type'>{arma.tipoUpgrade}</p>
                                </div>
                                <p className='button' onClick={()=>handleClick(arma)}>{arma.valorUpgrade}</p>
                            </div>):
                            (<div key={arma.nome} className='upgradeData block'>
                                <div className='data' >
                                    <p className='name'>{arma.nome}</p>
                                    <p className='type'>{arma.tipoUpgrade}</p>
                                </div>
                                <p className='button' >{arma.valorUpgrade}</p>
                            </div>)

                        ))
                    }
                    <button className='upSair' onClick={()=>{setVisible(false)}}>
                        Sair
                    </button>
                </div>
                
            </div>
        )
    }
}

export default UpgradeContainer