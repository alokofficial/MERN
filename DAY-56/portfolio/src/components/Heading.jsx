import profile from '../assets/profile.png'
const Heading=()=>{
    return<div className="bg-blue-700 text-white p-4 flex justify-between items-center rounded-lg">
        <hgroup>
            <h1 className='text-4xl font-bold font-mono '>Alok Kumar</h1>
            <h2 className="font-mono">Mern-Stack Developer</h2>
        </hgroup>
        <img className ="rounded-full w-24" src={profile} alt="" />
    </div>
}
export default Heading