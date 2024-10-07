import React, { useState } from 'react'
import Form from './components/Form'
import List from './components/List'
import { useId } from 'react'

const App = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [dob, setDob] = useState("")
  const data = [
    {
      firstName: firstName,
      lastName: lastName,
      dob: dob
    }
  ]
  return (<>
 
    <center>
      <Form firstName={firstName} lastName={lastName} dob={dob} setFirstName={setFirstName} setLastName={setLastName} setDob={setDob}/>
      <h1>Data you have entered</h1>
      </center> 
      {
        data.map(item => <List list={[item.firstName, item.lastName, item.dob]} />)
      }
    
    </>
  )
}

export default App