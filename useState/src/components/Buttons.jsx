import React from 'react'
import Button from './Button'

const Buttons = ({counter, setCounter}) => {
  return (
    <div>
        <Button setCounter={setCounter} counter={counter}>
            Add
        </Button>
        <Button setCounter={setCounter} counter={counter}>
            Substract
        </Button>

    </div>
  )
}

export default Buttons