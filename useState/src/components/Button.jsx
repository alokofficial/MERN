import React from 'react'

const Button = ({children,counter, setCounter}) => {
    const handleOnClick=()=>{
        if(children === 'Add'){
        setCounter(counter+1)
        }
        if(children === 'Substract'){
        setCounter(counter-1)
        }
}
  return (
    <button className="btn" onClick={handleOnClick}>{children}</button>
  )
}

export default Button