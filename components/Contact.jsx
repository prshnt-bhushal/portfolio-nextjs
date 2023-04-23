import React from 'react'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import{FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill, BsInstagram} from 'react-icons/bs'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import {RxDoubleArrowUp} from 'react-icons/rx'
import { contactMeBye, copyrightsTxt } from './paragraph'

const Contact = () => {
  return (
  <>
    <div id='contact' className='w-screen md:h-screen p-2 flex items-center py-8'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 items-center'>
                <p className='uppercase col-span-3 font-serif font-extrabold text-2xl tracking-widest text-[#e0dfdf] dark:text-[#16242d] ease-in duration-300'>Contact</p>
          <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
              <img width='400px' className='rounded-xl' src='/assets/Images/profile.jpg' alt='profile'/>
          </div>
          <div className='col-span-2 grid justify-items-center'>
                <p  className='py-8 px-24 text-xl text-gray-600'>
                    {contactMeBye}
                </p>
                <button className='uppercase p-2 border-solid border-2 border-b-stone-50 dark:border-black ease-in duration-300 group hover:bg-gradient-to-r from-[#16242d] to-[#e0dfdf] dark:hover:text-white'>Get In Touch</button>
                <div className='flex items-center justify-around my-6 w-full sm:w-[80%] px-20 py-8'>
                            <Link href='https://www.linkedin.com/in/prashant-bhushal-a1154923b/'>
                                <div className='rounded-full shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-150 ease-in duration-500'>
                                    <FaLinkedinIn/>
                                </div>
                            </Link>
                            <Link href='https://github.com/prshnt-bhushal'>
                                <div className='rounded-full shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-150 ease-in duration-500'>
                                    <FaGithub/>
                                </div>
                            </Link>
                            <Link href='https://www.instagram.com/__prshnt__/'>
                                <div className='rounded-full shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-150 ease-in duration-500'>
                                    <BsInstagram/>
                                </div>
                            </Link>
                            <div className='rounded-full shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-150 ease-in duration-500'>
                            <AiOutlineMail/>
                            </div>
                            <div className='rounded-full shadow-sm shadow-gray-400 p-3 cursor-pointer hover:scale-150 ease-in duration-500'>
                            <BsFillPersonLinesFill/>
                            </div>
                        </div>
            </div>
            <div className='col-span-3 flex items-center justify-center mt-10'>
            <p className='uppercase font-serif font-extrabold text-2xl tracking-widest text-[#e0dfdf] dark:text-[#16242d] ease-in duration-300'>Thank You For scrolling</p>
            <Link scroll={false} href='/#home'>
            <RxDoubleArrowUp className='ml-20 animate-bounce cursor-pointer'/>
            </Link>
            </div>
      </div>
    </div>
    <div className='flex justify-center gap-4'>
      <img src="favicon.ico" alt="logo" width='24px' />
      {copyrightsTxt}
    </div>
    </>)
}

export default Contact