import Image from 'next/image'
import Link from 'next/link'
import React,{useState} from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import{FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill, BsInstagram} from 'react-icons/bs'

const NavBar = () => {
    const [nav, setNav]=useState(false);

    const handelNav=()=>{
        setNav(!nav);
    }

  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 xl:px-16'>
            <Image src='/../public/assets/Images/signature.png' alt='portfolio logo' width='120' height='50'/>
            <div>
                <ul className='hidden md:flex'>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                </Link>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                </Link>
                </ul>
                <div onClick={handelNav} className='md:hidden cursor-pointer'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
        </div>
        <div className={nav? 'md:hidden fixed left-0 top-0 w-full h-full bg-black/70':''}>
            <div className={nav?'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#16242d] p-10 ease-in duration-500':'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                    <Image src='/../public/assets/Images/signature.png' alt='portfolio logo' width='120' height='100'/>
                    <div onClick={handelNav} className='rounded-full shadow-sm shadow-gray-100 p-3 cursor-pointer hover:scale-110 ease-in duration-500 '>
                        <AiOutlineClose/>
                     </div>
                    </div>
                    <div className='border-b border-gray-300 my-4 '>
                        <p className='w-[85%] md:w-[90%] py-4'>Let's build together</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href='/'>
                            <li className='py-4 text-sm'>Home</li>
                        </Link><Link href='/'>
                            <li className='py-4 text-sm'>About</li>
                        </Link><Link href='/'>
                            <li className='py-4 text-sm'>Skills</li>
                        </Link><Link href='/'>
                            <li className='py-4 text-sm'>Projects</li>
                        </Link><Link href='/'>
                            <li className='py-4 text-sm'>Contact</li>
                        </Link>
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest'>Connect and Stay in Touch.</p>
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
    </div>
  )
}

export default NavBar