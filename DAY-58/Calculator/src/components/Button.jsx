const Button = ({ value, onClick,style }) => {
    
    return (
        <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md text-xl ${style}`}
            onClick={() => onClick(value)}
        >
            {value}
        </button>
    )

}

export default Button