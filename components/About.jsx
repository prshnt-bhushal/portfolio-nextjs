import React from 'react'
import { profileGreet, profileIntro1, profileIntro2 } from './paragraph'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-12'>
        <div className=' max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase font-serif font-extrabold text-2xl tracking-widest text-[#e0dfdf] dark:text-[#16242d] ease-in duration-300'>About</p>
                <h2 className='py-4'>Who I'm</h2>
                <p  className='py-2 text-gray-600'>
                    {profileGreet}
                </p>
                <p className='py-2 text-gray-600'>
                    {profileIntro1}
                </p>
                <p className='py-2 text-gray-600'>
                    {profileIntro2}
                </p>
                <p className='py-2 italic text-gray-600'>//I am not your normal developer</p>
                <a href='/#projects' className='w-full py-2 text-gray-600 underline cursor-pointer'>Check out some of my Latest Projects</a>
            </div>
            <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img width='400px' className='rounded-xl' src='/assets/Images/profile.jpg' alt='profile'/>
            </div>
        </div>
    </div>
  )
}

export default About