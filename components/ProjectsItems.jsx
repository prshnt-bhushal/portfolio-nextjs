import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BiLinkExternal} from 'react-icons/bi'

const ProjectsItems = ({title,description, backgroundImg, projectUrl}) => {
  return (
    <div className='relative bg-[#0e2331] dark:bg-[#c5c5c5] sm:flex justify-center grid sm:justify-items-center sm:justify-between flex-row-reverse h-auto w-full shadow-xl shadow-gary-400 rounded-xl p-4 ease-in duration-500'>
    <Image className='md:w-[500px] md:h-[281px] w-[250px] h-[140px] rounded-xl' src={backgroundImg} alt='/'/>
    <div className='p-4 grid' >
      <h3 className='justify-self-start text-2xl text-white tracking-wider text-center'>{title}</h3>
      <p className='pb-4 pt-2 text-white text-center'>{description}</p>
      <Link href={projectUrl}>
        <p className='flex items-center py-3 text-gray-700 font-bold cursor-pointer hover:text-gray-900'>More Info<BiLinkExternal className='ml-1'/></p>
      </Link>
      {/* {4E6E81} */}
    </div>
  </div>
  )
}

export default ProjectsItems