import React, { useRef } from 'react'

const Form = ({firstName, lastName, dob, setFirstName, setLastName, setDob}) => {
    firstName = useRef()
    lastName = useRef()
    dob = useRef()
    

    const submitHandler = (e) => {
        e.preventDefault()
        setFirstName(firstName.current.value)
        setLastName(lastName.current.value)
        setDob(dob.current.value)
        console.log(firstName.current.value, lastName.current.value, dob.current.value)
        firstName.current.value = ""
        lastName.current.value = ""
        dob.current.value = ""
    }
  return (
    <form action="/submit-data">
        <input type="text" placeholder='firstName' ref={firstName} /><br />
        <input type="text" placeholder='lastName' ref={lastName}/><br/>
        <input type='date' ref={dob}/><br/>
        <input type="submit" onClick={submitHandler}/>
    </form>
  )
}

export default Form