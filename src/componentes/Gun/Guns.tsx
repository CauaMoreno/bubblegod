import { useState } from 'react'
type Arma = {
    nome:string,
    url:string,
    dClick:number,
    dSecond:number,
    locked:boolean

}
function Guns({nome,url,dClick,dSecond}:Arma) {
  const [count, setCount] = useState(0)

  return (
    <div className='G'>
        <img src={url}>

        </img>
        <p>{nome}</p>
        <p>{dClick} D/c</p>
        <p>{dSecond} D/s</p>

    </div>
  )
}

export default Guns
