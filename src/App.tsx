import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Guns from "./componentes/Gun/Guns"
function App() {
  const [Detergentes, setCount] = useState(0)

  return (
    <div className='App'> 
      <header>
        <span>Bubble Gun</span>
        <div className='detergentes'>
          <img></img>
          <span>{Detergentes}</span>
        </div>
      </header>
      <div className='ArmasContainer'>
            <Guns
                url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8217AgF0fmdDqiONeR7PO0kJXF9m85VrBdA&s'
                dClick={10}
                dSecond={10}
                nome='bubblegun'
                locked={false}
              ></Guns>
              <Guns
                url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8217AgF0fmdDqiONeR7PO0kJXF9m85VrBdA&s'
                dClick={10}
                dSecond={10}
                nome='bubblegun'
                locked={false}
              ></Guns>
      </div>
    </div>
    
     
      
  )
}

export default App
