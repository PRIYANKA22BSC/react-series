import{ useState }from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
     
function App () {
  let [color, setColor] = useState("olive")
 /* function ChngtoRed(){
    color="red"
    setColor(color)
  }
  function ChngtoGreen(){
    color="green"
    setColor(color)
  }
  function ChngtoBlue(){
    color="blue"
    setColor(color)
  }
  function ChngtoYellow(){
    color="yellow"
    setColor(color)
  }*/
  return (
    <>
    <div id="btn-container" style={{backgroundColor:color}}>
      <button id="btn1" onClick={()=>setColor("red")}>Red</button>
      <button id="btn2" onClick={()=>setColor("green")}>Green</button>
      <button id="btn3" onClick={()=>setColor("blue")}>Blue</button>
      <button id="btn4" onClick={()=>setColor("yellow")}>Yellow</button>
</div>
</>
  )
}
export default App
