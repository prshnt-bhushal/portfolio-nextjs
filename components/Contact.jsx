import React from 'react'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import{FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill, BsInstagram} from 'react-icons/bs'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] mx-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase'>Contact</p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* {left} */}
          <div className='col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div>
                <img className='rounded-xl hover:scale-105 ease-in duration-300' src='/assets/Images/profile.jpg' alt='/'/>
              </div>
              <div >
                <h2 className='py-2'>
                  Name here
                </h2>
                <p>Front End Developer </p>
                <p className='py-4'>I am available for fresslance or full-time positions. connect me and lets talk. </p>
              </div>
            </div>
            <div>
              <p className='uppercase pt-8'>Connect with me </p>
              <div className='flex items-center justify-between py-4'>
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
          {/* {right} */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 '>
            <div className='p-4'>
              <form>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='broder-2 rounded-lg p-3 flex border-gray-300' type='text'></input>
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input className='broder-2 rounded-lg p-3 flex border-gray-300' type='text'></input>
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='broder-2 rounded-lg p-3 flex border-gray-300' type='text'></input>
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Email</label>
                <input className='broder-2 rounded-lg p-3 flex border-gray-300' type='email'></input>
                </div>
                <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Subject</label>
                <input className='broder-2 rounded-lg p-3 flex border-gray-300' type='text'></input>
                </div>
                <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Message</label>
                <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10'>
                </textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/#home' scroll={false}>
            <div className='rounded-full shadow-sm shadow-gray-400 p-4 cursor-pointer'>
              <HiOutlineChevronDoubleUp size={30}/>
            </div>
          </Link>
        </div>
      </div>
    </div>)
}

export default Contact