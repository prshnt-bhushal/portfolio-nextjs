import React from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import{FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill, BsInstagram} from 'react-icons/bs'
import Link from 'next/link'
import Typing from './typing'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='py-3 text-[#fff]'><Typing/></h1>
          <h1 className='py-2 text-gray-700'>Computer Engineer</h1>
          <p className='uppercase text-sm tracking-widest py-4 text-gray-600 max-w-[70%] m-auto'>Lets Build something together</p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='flex items-center justify-between my-6 w-full sm:w-[80%]'>
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
        </div>
      </div>
    </div>
  )
}

export default Main