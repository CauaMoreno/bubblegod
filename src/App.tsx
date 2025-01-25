import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Guns from "./componentes/Gun/Guns"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Guns
        url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8217AgF0fmdDqiONeR7PO0kJXF9m85VrBdA&s'
        dClick={10}
        dSecond={10}
        nome='bubblegun'
        locked={false}
      ></Guns>
    </>
  )
}

export default App
