import React from 'react'
import ProjectsItems from './ProjectsItems'
import Image from 'next/image'
import tradeexImg from '../public/assets/projects/tradeexlogo.png'
import routeImg from '../public/assets/projects/routelogo.png'
import expensesImg from '../public/assets/projects/expenses.png'
import Link from 'next/link'

const Projects = () => {
  return (
    <div id='projects' className='w-full py-12'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='uppercase font-serif font-extrabold text-2xl tracking-widest text-[#e0dfdf] dark:text-[#16242d] ease-in duration-300'>Porjects</p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid gap-8 w-full'>
          <ProjectsItems title='Route' description={'Route Description'} backgroundImg={routeImg} projectUrl='/route'/>
          <ProjectsItems title='TradeEx' description={'TradeEx Description'} backgroundImg={tradeexImg} projectUrl='/tradeex'/>
        </div>
        <h2 className='py-4'>Working on</h2>
        <div className='grid gap-8 w-full'>
          <ProjectsItems title='Expenses' description={'Expenses Description'} backgroundImg={expensesImg} projectUrl='/expenses'/>
        </div>
      </div>
    </div>
  )
}

export default Projects