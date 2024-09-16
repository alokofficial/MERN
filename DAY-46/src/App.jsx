import './App.css'
import { Camera,Trash2, Icon } from 'lucide-react'
import {bottleBaby, burger} from '@lucide/lab'

function App() {
  

  return (
    <>
      <Camera size={48} color="red" strokeWidth={0.5}/>
      <Trash2 size={48} color="red" strokeWidth={0.5}/>
      <Icon iconNode={bottleBaby} size={48} color="red" strokeWidth={0.5} />
      <Icon iconNode={burger} size={48} color="red" strokeWidth={1} />
    </>
  )
}

export default App
