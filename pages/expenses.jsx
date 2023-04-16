import React from 'react'
import Image from 'next/image'
import expensesImg from '../public/assets/projects/expenses.png'
import Link from 'next/link'

const expenses = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
            <Image className='absolute z-1' layout='fill' src={expensesImg} alt='routeImage'></Image>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Property finder</h2>
                <h3>React JS/Tailwind /Firebase</h3>
            </div>
        </div>
        <div>
            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Projects</p>
                    <h2>OverView</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi rem autem amet beatae fugiat non esse quasi, ipsum facere perferendis sequi eum, harum accusamus nihil debitis, laboriosam est reprehenderit! Doloribus.</p>
                    <button className='px-8 py-2 mt-4 mr-8' >Demo</button>
                    <button className='px-8 py-2 mt-4' >Code</button>
                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 flex items-center'>React </p>
                            <p className='text-gray-600 flex items-center'>Tailwind </p>
                            <p className='text-gray-600 flex items-center'>JavaScript </p>
                            <p className='text-gray-600 flex items-center'>FireBase </p>
                        
                        </div>
                    </div>

                </div>
            </div>
            <Link href='/#projects'><p className='underline cursor-pointer'>Back</p></Link>
        </div>
    </div>
  
  )
}

export default expenses
