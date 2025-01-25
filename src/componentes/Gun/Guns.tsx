import { useState } from 'react'
import './Guns.css'
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
    <div className='Gun'>
        <div className='info'>
            <img src={url}></img>
            <p>{nome}</p>
        </div>
       
        <div className='status'>
            <p>{dClick} D/c</p>
            <p>{dSecond} D/s</p>
        </div>
       
    </div>
  )
}

export default Guns
