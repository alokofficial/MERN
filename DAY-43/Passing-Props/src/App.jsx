import Button from './components/Button'
import './App.css'

function App() {

  const handleOnClick = () => {
    alert('Item added to wishlist')
  }

  return (
    <>
      <Button children="Click me" /><br></br>
      <Button children="Add to Bag" /><br></br>
      <Button children="Wishlist" onClick={handleOnClick} />

    </>
  )
}

export default App
