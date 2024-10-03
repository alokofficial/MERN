const Project = ({projectTitle,details,technologies}) => {

    return (
        <div className="m-4">
            <h2 className="font-bold text-xl">{projectTitle}</h2>
            <p className="text-gray-800 mt-2">{details}</p>
            <div className="flex flex-wrap gap-2 my-2">
            {technologies.map(item=>(
                <span className="text-blue-500 bg-blue-100 rounded-md px-3 text-sm font-bold my-1">{item}</span>
            ))}
        </div>
        </div>
    );
};  
export default Project;
