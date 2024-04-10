import React, {useState} from 'react';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';


function Navbar() {

    const [nav,setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    }
    
  return (
    <div className='navbar h-24 w-full px-[5vw] text-white flex justify-between items-center bg-gradient-to-b from-[#04003D] to-black  '>

        <div className="nav-left">
            <h1 className='text-[30px] font-bold'>LOGO.</h1>
        </div>
        <div className="nav-right text-[17px] font-semibold justify-center items-center gap-[20px] hidden md:flex">
            <a href="#" className='px-[20px] py-[10px] text-center'>Home</a>
            <a href="#" className='px-[20px] py-[10px] text-center'>Leaderboards</a>
            <a href="#" className='px-[20px] py-[10px] text-center'>Instructions</a>
            <a href="#" className='px-[20px] py-[10px] text-center'>Logout</a>

        </div>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
        </div>

        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-[100%] bg-zinc-900 z-[9999] translate-x-0  duration-300 ' : 'fixed left-[-100%] top-0 w-[60%] h-[100%] bg-zinc-900 z-[9999] translate-x-3 duration-300'}>
            <div className="nav-left">
                <h1 className='text-[30px] font-bold px-[19px] mt-[25.1px] '>LOGO.</h1>
            </div>
            <div className='flex flex-col justify-start items-start w-full gap-[40px] py-[25px] uppercase ' >
                <a href="#" className='p-4 border-b border-zinc-700 w-full'>Home</a>
                <a href="#" className='p-4 border-b border-zinc-700 w-full'>Leaderboards</a>
                <a href="#" className='p-4 border-b border-zinc-700 w-full'>Instructions</a>
                <a href="#" className='p-4 border-b border-zinc-700 w-full'>Logout</a>
            </div>
        </div>

    </div>
  )
}

export default Navbar