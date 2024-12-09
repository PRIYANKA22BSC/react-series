import { useState } from 'react'
function App() {
  let [counter  ,setCounter] = useState(5)
  // let counter=0;
  function addValue(){
   counter=counter+1
   if(counter>20){
    setCounter=20
   }
   else{
    setCounter(counter)
    console.log(counter)
   }
  }
  function removeValue(){
    counter=counter-1
    if(counter<0){
      setCounter=0  
    }
      else{
        setCounter(counter)
        console.log(counter)
    }
   }
  return (
    <>
    <button id="button1">counter vlaue: {counter}</button><br></br>
    <button onClick={addValue} id="button-add">increase counter  {counter}</button><br></br>
    <button onClick={removeValue} id="button-rem ">Decrease counter {counter}</button>
    </>
  )
}
export default App
