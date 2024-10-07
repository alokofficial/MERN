import {useState} from "react";
import Buttons from "./components/Buttons";
function App(){
  const [counter,setCounter]=useState(0)
  
  
  return(
  <center>
    <h1>Counter: {counter}</h1>
    <Buttons counter={counter} setCounter={setCounter} />
  </center>
  )
}

export default App;