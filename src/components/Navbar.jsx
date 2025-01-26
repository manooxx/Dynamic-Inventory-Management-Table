import React from 'react'

const Navbar = () => {
    return (
        <div className='text-white flex justify-evenly items-center pt-10'>
            <div className='border bg-white   shadow-[0_0_30px_theme("colors.purple.700")] duration-300 hover:shadow-neon h-16 w-44 flex rounded-full justify-center items-center'>
                <img className='object-cover' src="https://www.gyangrove.co/GyanGrove.svg" alt="" />
            </div>

            <div className='hidden md:flex justify-between items-center font-medium gap-10 border p-2 h-20 rounded-full px-6  shadow-[0_0_30px_theme("colors.purple.700")] duration-300 hover:shadow-neon'>
                <p className='cursor-pointer text-lg hover:text-purple-400 duration-300'>Home</p>
                <p className='cursor-pointer text-lg hover:text-purple-400 duration-300'>About</p>
                <p className='cursor-pointer text-lg hover:text-purple-400 duration-300'>Contact</p>
            </div>

            <div className='flex  shadow-[0_0_20px_theme("colors.purple.700")] duration-300 hover:shadow-neon justify-between items-center gap-10 border p-2 h-14 rounded-full px-4'>
                <p className='cursor-pointer text-lg hover:text-purple-400 duration-300'>Request a Demo</p>
            </div>

        </div>
    )
}

export default Navbar
