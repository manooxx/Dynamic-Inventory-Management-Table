import React from 'react'
import { motion } from 'framer-motion';
import InventoryForm from '../components/InventoryForm'
import FilterSortControls from '../components/FilterSortControls'
import InventoryTable from '../components/InventoryTable'

const Home = () => {
    return (
        <div className='w-[80%] min-h-screen mx-auto  text-white '>
            <div className=' h-screen  flex flex-col justify-center items-center'>
         
                <motion.h1
                    className='text-2xl md:text-6xl h-20 font-bold md:font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 flex justify-center items-center'
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 2, ease: "easeOut" }} 
                >
                    Manage<span className=''>. Collaborate.</span> Enhance.
                </motion.h1>

                <motion.h3
                    className='text-xl  md:text-5xl font-bold md:font-semibold text-gray-300'
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 2, delay: 0.3, ease: "easeOut" }} 
                >
                    education using AI
                </motion.h3>
            </div>
            <div className='pb-20'>

            <FilterSortControls />
            <InventoryForm />
            <InventoryTable />
            </div>
        </div>
    )
}

export default Home
