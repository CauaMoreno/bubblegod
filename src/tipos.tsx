export type Arma = {
    nome:string,
    codigo_imagem:string,
    valor_segundo:number,
    valor_click:number,
    block:boolean,
    valor_desbloqueio:number,
    id:number,
    valorUpgrade:number
    adquiridoUpgrade:boolean
    tipoUpgrade:"Autoclicker"|"Multiplicador"|"Acelerador"|"Inexistente"
  }

export type ArmaProp = {
    arma:Arma
    detergenteClick:Function,
    comprar:Function,
    detergente:number,
}

export type Lore = {
    titulo:string,
    lore:string,
}

export type LoreProps = {
    titulo:string,
    lore:string,
    visible:boolean,
    increaseIndex:any
  }

export type UpgradeContainerProps = {
    visible:boolean
    setVisible:any
    armas:Arma[],
    setArmas:any,
    detergente:number,
    setDetergente:any,
    session:Session
}