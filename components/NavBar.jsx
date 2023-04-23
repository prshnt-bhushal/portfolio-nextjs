import Image from 'next/image'
import Link from 'next/link'
import React,{useEffect, useState} from 'react'
import {AiOutlineCloseCircle, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import{FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill, BsInstagram} from 'react-icons/bs'
import { useRouter } from 'next/router'
import {MoonIcon, SunIcon} from '../public/All-Text/Icons'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const NavBar = () => {
    const [nav, setNav]=useState(false);
    const [shadow, setShadow] =useState(false);
    const [navBg, setNavBg]=useState('#16242d');
    const [linkColor,setLinkColor]=useState('#eeeeee');
    const [mode,setMode]=useThemeSwitcher();
    const router=useRouter()

    useEffect( ()=> {
        if(
            router.asPath === '/tradeex'||
            router.asPath === '/route'||
            router.asPath === '/expenses'
        ){
            setNavBg('transparent');
            setLinkColor('#eeeeee');
        }
        else{
            setNavBg('#16242d');
            setLinkColor('#eeeeee');
        }
    },[router]);

    const handelNav=()=>{
        setNav(!nav);
    };
    useEffect(()=>{
        const handelShadow = ()=>{
            if(window.scrollY >= 90){
                setShadow(true)
            }else{
                setShadow(false)
            }
        }
        window.addEventListener('scroll',handelShadow);
    },[])

  return (
    <div style={{backgroundColor :`${navBg}`}} className={shadow?'fixed w-full h-20 shadow-xl z-[100]':'fixed w-full h-20 z-[100]'}>
        <div className='flex justify-between items-center w-full h-full px-2 xl:px-10'>
            <Link href='/'>
                <Image src='/../public/assets/Images/signature.png' alt='portfolio logo' width='120' height='50'/>
            </Link>
            <div className='flex justify-center items-center'>
                <ul  style={{Color :`${linkColor}`}} className='hidden md:flex dark:text-[#f3f2fb]'>
                <Link href='/#home'>
                    <li className='ml-10 text-sm uppercase hover:text-[#607e91]'>Home</li>
                </Link>
                <Link href='/#about'>
                    <li className='ml-10 text-sm uppercase hover:text-[#607e91]'>About</li>
                </Link>
                <Link href='/#skills'>
                    <li className='ml-10 text-sm uppercase hover:text-[#607e91]'>Skills</li>
                </Link>
                <Link href='/#projects'>
                    <li className='ml-10 text-sm uppercase hover:text-[#607e91]'>Projects</li>
                </Link>
                <Link href='/#contact'>
                    <li className='ml-10 text-sm uppercase hover:text-[#607e91]'>Contact</li>
                </Link>
                </ul>
                <button className='ml-20 flex items-center justify-center rounded-full p-1 sm:mr-2 dark:text-[#FDB813]' onClick={()=>setMode(mode==="light"?"dark":"light")}>
                    {mode==="dark"?
                        <MoonIcon className={"fill-dark"}/>:
                        <SunIcon className={"fill-dark"}/>
                    }
                </button>
                <div onClick={handelNav} className='md:hidden dark:text-white cursor-pointer'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
        </div>
        <div className={nav? 'md:hidden fixed left-0 top-0 w-full h-full bg-black/70':''} onClick={()=> setNav(false)}>
            <div className={nav?'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#16242d] p-10 ease-in duration-500':'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                    <Link onClick={()=> setNav(false)} href='/'>
                        <Image src='/../public/assets/Images/signature.png' alt='portfolio logo' width='120' height='50'/>
                    </Link>
                    <div onClick={handelNav} className='p-3 dark:text-white cursor-pointer hover:scale-110 ease-in duration-500 '>
                        <AiOutlineCloseCircle/>
                     </div>
                    </div>
                    <div className='border-b border-gray-300 my-4 '>
                        <p className='w-[85%] md:w-[90%] py-4 dark:text-white'>Let's build together</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase dark:text-[#f3f2fb]'>
                        <Link onClick={()=> setNav(false)} href='/#home'>
                            <li className='py-4 text-sm hover:text-[#607e91]'>Home</li>
                        </Link>
                        <Link onClick={()=> setNav(false)} href='/#about'>
                            <li className='py-4 text-sm hover:text-[#607e91]'>About</li>
                        </Link>
                        <Link onClick={()=> setNav(false)} href='/#skills'>
                            <li className='py-4 text-sm hover:text-[#607e91]'>Skills</li>
                        </Link>
                        <Link onClick={()=> setNav(false)} href='/#projects'>
                            <li className='py-4 text-sm hover:text-[#607e91]'>Projects</li>
                        </Link>
                        <Link onClick={()=> setNav(false)} href='/#contact'>
                            <li className='py-4 text-sm hover:text-[#607e91]'>Contact</li>
                        </Link>
                    </ul>
                    <div className='pt-40 dark:text-[#f3f2fb]'>
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