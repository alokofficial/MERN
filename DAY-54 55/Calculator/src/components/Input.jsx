const Input = ({ value }) => {
    return (
       <div className="text-center ">
           <input className="text-3xl text-right p-2 rounded-lg w-11/12 mx-auto mt-3 border-2 border-gray-400" type="text" value={value} readOnly />
       </div>
    )
}

export default Input