import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#fff]'>Skills</p>
        <h2 className='p-4'>What I can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                src='/../public/assets/skills/html5.png'
                width='64'
                height='64'
                alt='Html Logo'
                />
              </div>
              <div className='flex flex-col items-center justify-center'><h3>Html</h3>
              </div>
            </div>
          </div><div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                src='/../public/assets/skills/CSS.png'
                width='64'
                height='64'
                alt='CSS logo'
                />
              </div>
              <div className='flex flex-col items-center justify-center'><h3>CSS</h3>
              </div>
            </div>
          </div><div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                src='/../public/assets/skills/javascript.png'
                width='64'
                height='64'
                alt='JavaScript logo'
                />
              </div>
              <div className='flex flex-col items-center justify-center'><h3>JavaScript</h3>
              </div>
            </div>
          </div><div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                src='/../public/assets/skills/React.png'
                width='64'
                height='64'
                alt='React logo'
                />
              </div>
              <div className='flex flex-col items-center justify-center'><h3>React</h3>
              </div>
            </div>
          </div><div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                src='/../public/assets/skills/tailwind.png'
                width='64'
                height='64'
                alt='TailWind Logo'
                />
              </div>
              <div className='flex flex-col items-center justify-center'><h3>Tailwind</h3>
              </div>
            </div>
          </div><div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                src='/../public/assets/skills/github.png'
                width='64'
                height='64'
                alt='GitHub Logo'
                />
              </div>
              <div className='flex flex-col items-center justify-center'><h3>GitHub</h3>
              </div>
            </div>
          </div><div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                src='/../public/assets/skills/aws.png'
                width='64'
                height='64'
                alt='AWS Logo'
                />
              </div>
              <div className='flex flex-col items-center justify-center'><h3>AWS</h3>
              </div>
            </div>
          </div><div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                src='/../public/assets/skills/firebase.png'
                width='64'
                height='64'
                alt='Firebase Logo'
                />
              </div>
              <div className='flex flex-col items-center justify-center'><h3>Firebase</h3>
              </div>
            </div>
          </div><div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                src='/../public/assets/skills/java.png'
                width='64'
                height='64'
                alt='Java Logo'
                />
              </div>
              <div className='flex flex-col items-center justify-center'><h3>Java</h3>
              </div>
            </div>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default Skills
