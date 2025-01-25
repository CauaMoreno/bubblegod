import { data } from 'react-router'
import './UpgradeContainer.css'

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
    
    function handleClick(arma:Arma){
        const valorUpgrade = arma.valorUpgrade
        console.log("nicolas 3",armas,detergente)
        if(detergente-valorUpgrade>=0){
            setDetergente(detergente-valorUpgrade)
            const index = armas.indexOf(arma)
            const arrN = armas.slice()
            arrN[index].adquiridoUpgrade=true
            setArmas(arrN)
            window.alert("comprado")
        }
        
    }
    if(visible){
        return(
            <div className="UpgradeContainer">
                <h1>UPGRADES</h1>
                {
                    armas.map(arma => (
                        <div key={arma.nome} className='upgradeData'>
                            
                            <div className='data' >
                                <p className='name'>{arma.nome}</p>
                                <p className='type'>{arma.tipoUpgrade}</p>
                            </div>
                            <p className='button' onClick={()=>handleClick(arma)}>{arma.valorUpgrade}</p>

                            
                        </div>
                    ))
                
                }
                <button className='upSair' onClick={()=>{setVisible(false)}}>
                    Sair
                </button>
            </div>
        )
    }
}

export default UpgradeContainer