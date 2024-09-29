const Section=({icon,sectionTitle,children})=>{

    return <div>
        <div className="flex gap-2">
            {icon}
            <h1 className="text-xl font-bold">{sectionTitle}</h1>
        </div>
        {children}
    </div>
    
}

export default Section