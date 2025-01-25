import './UpgradeContainer.css'

type UpgradeContainer = {
    visible:boolean
    setVisible:any
}

type Upgrade = {
    nome:string
    valor:number
    tipo:string
    aplicado:boolean
}

function UpgradeContainer({visible}:UpgradeContainer){
    if(visible){
        return(
            <div className="UpgradeContainer">
                <h1>UPGRADES</h1>
            </div>
        )
    }
}

export default UpgradeContainer