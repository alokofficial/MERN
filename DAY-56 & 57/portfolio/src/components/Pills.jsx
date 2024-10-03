const Pills = ({items}) => {
    return <div>
        <div className="flex flex-wrap gap-2 my-2">
            {items.map(item=>(
                <span className="text-gray-500 bg-gray-200 rounded-full px-3 py-1 text-sm font-bold my-1">{item}</span>
            ))}
        </div>
    </div>
}

export default Pills