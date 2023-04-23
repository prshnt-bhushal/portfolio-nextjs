import React from 'react'
import Image from 'next/image'
import SkillsItems from './SkillsItems'

const Skills = () => {
  return (
    <div id='skills' className='w-full py-12 lg:h-screen'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='uppercase font-serif font-extrabold text-2xl tracking-widest text-[#e0dfdf] dark:text-[#16242d] ease-in duration-300'>Skills</p>
        <h2 className='p-4'>What I can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <SkillsItems skillImage='/../public/assets/skills/html5.png' skillName='Html' />
          <SkillsItems skillImage='/../public/assets/skills/CSS.png' skillName='CSS' />
          <SkillsItems skillImage='/../public/assets/skills/javascript.png' skillName='JavaScript' />
          <SkillsItems skillImage='/../public/assets/skills/React.png' skillName='React' />
          <SkillsItems skillImage='/../public/assets/skills/tailwind.png' skillName='Tailwind' />
          <SkillsItems skillImage='/../public/assets/skills/github.png' skillName='GitHub' />
          <SkillsItems skillImage='/../public/assets/skills/java.png' skillName='Java' />
          <SkillsItems skillImage='/../public/assets/skills/aws.png' skillName='AWS' />
          <SkillsItems skillImage='/../public/assets/skills/firebase.png' skillName='Firebase' />
          </div>
      </div>     
    </div>
  )
}

export default Skills
