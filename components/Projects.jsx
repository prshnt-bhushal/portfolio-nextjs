import React from 'react'
import ProjectsItems from './ProjectsItems'
import Image from 'next/image'
import tradeexImg from '../public/assets/projects/tradeexlogo.png'
import routeImg from '../public/assets/projects/routelogo.png'
import expensesImg from '../public/assets/projects/expenses.png'
import Link from 'next/link'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase'>Porjects</p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectsItems title='Route' backgroundImg={routeImg} projectUrl='/property'/>
          <ProjectsItems title='TradeEx' backgroundImg={tradeexImg} projectUrl='/property'/>
          <ProjectsItems title='Expenses' backgroundImg={expensesImg} projectUrl='/property'/>
        </div>
      </div>
    </div>
  )
}

export default Projects