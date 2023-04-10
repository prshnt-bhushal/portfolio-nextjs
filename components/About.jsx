import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className=' max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5615e5]'>About</p>
                <h2 className='py-4'>Who I am</h2>
                <p className='py-2 text-gray-600'>//I am not your normal developer</p>
                <p  className='py-2 text-gray-600'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet ex quae earum et tempore maiores iure architecto nobis ut impedit.
                </p>
                <p className='py-2 text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae illum molestias accusamus consectetur eaque quam pariatur maiores. Dolorem, vitae rem atque culpa reprehenderit unde architecto consectetur laudantium veritatis, voluptatem exercitationem!
                </p>
                <p  className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my Latest Projects</p>
            </div>
            <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src='/assets/Images/profile.jpg' alt='profile'/>
            </div>
        </div>
    </div>
  )
}

export default About