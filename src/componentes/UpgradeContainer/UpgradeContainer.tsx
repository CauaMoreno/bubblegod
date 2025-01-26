import './UpgradeContainer.css'
import {Arma, UpgradeContainerProps} from '../../tipos'
import { updateGun } from '../Api/config';

function UpgradeContainer({visible, setVisible, armas,setArmas,setDetergente,detergente,session}: UpgradeContainerProps){
   
    function handleClick(arma:Arma){
        const valorUpgrade = arma.valorUpgrade
        console.log(arma)
        if(detergente-valorUpgrade>=0 && !arma.adquiridoUpgrade && !arma.block){
            setDetergente(detergente-valorUpgrade)
            const index = armas.indexOf(arma)
            const arrN = armas.slice()
            arrN[index].adquiridoUpgrade=true
            setArmas(arrN)
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
            
            window.alert("comprado")
          
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