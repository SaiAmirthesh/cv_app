import logo from '../assets/icon-cv.png'

function Navbar(){
  return (
    <div className="fixed w-full top-0 left-0 flex justify-between bg-gray-800 p-5 object-top">        
        <div className="flex gap-2 ">
            <img src={logo} alt="logo" className="w-10 justify-center"/>
            <h2 className="font-bold pt-1 text-2xl">CreateCV</h2>
        </div>
    </div>
  )
}

export default Navbar