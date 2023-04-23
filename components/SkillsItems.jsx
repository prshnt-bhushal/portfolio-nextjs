import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SkillsItems = ({skillImage,skillName}) => {
  return (
    <div className='flex justify-center p-6 shadow-xl bg-[#0e2331] dark:bg-[#c5c5c5] rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                src={skillImage}
                width='48'
                height='48'
                alt='skills Logo'
                />
              </div>
              <div className='flex flex-col items-center justify-center'><h3>{skillName}</h3>
              </div>
            </div>
          </div>
  )
}

export default SkillsItems