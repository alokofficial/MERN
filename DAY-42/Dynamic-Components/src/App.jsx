import './App.css'

function App() {
  const hello='Hello Alok'
  const name=['Alok','Raj','Kumar','Kishor','Ram','Sita']

  return (
    <>
      <h1 style={{color:'red'}}>{hello}</h1> {/* // style is an object and every js should be injected in {} */}
      {
        name.map((item)=><li key={item}>{item}</li>)
      }

    </>
  )
}

export default App
