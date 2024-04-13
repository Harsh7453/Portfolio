import React from 'react'
import {TypeAnimation} from 'react-type-animation';
import {FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa';

function Main() {
  return (
    <div id='main'>
<img className='w-full h-screen object-cover object-left scale-c-[-1]' src="https://media.istockphoto.com/id/1390783215/photo/faceless-hooded-hacker-showing-silence-gesture-cyber-attack-system-breaking-and-malware.webp?b=1&s=170667a&w=0&k=20&c=IBqm6teRqMZ1ynFr2mKuqmXUKw-R09184Toy61v7WsI=" alt="" />
<div className='w-full h-screen absolute top-0 left-0 bg-white/40'>
<div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Harsh Kumar</h1>
    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a 
        <TypeAnimation
        sequence={[
            'Developer',
            2000,
            'Coder',
            2000,
            'Tech Enthusiast',
            2000,
            () => {
                console.log('Done typing!');
            },
        ]}
        wrapper='div'
        cursor={true}
        repeat={Infinity}
        style={{fontSize: '1em', paddingLeft: '5px'}}
        />
    </h2>
    <div className='flex justify-between pt-6 max-w-[200px] w-full'> 
       <a href="https://github.com/Harsh7453?tab=repositories"> <FaTwitter className='cursor-pointer' size={20} /> </a>
        {/* <FaFacebookF className='cursor-pointer'  size={20}/> */}
        <a href="https://www.instagram.com/the_codezen/?igsh=ZmJkY3Zucm51MzZ5&utm_source=qr"><FaInstagram className='cursor-pointer'  size={20}/> </a>
      <a href="https://www.linkedin.com/in/harsh-kumar-49b862297/"> <FaLinkedinIn className='cursor-pointer'  size={20}/> </a> 
       
    </div>
</div> 
</div>

    </div>
  )
}

export default Main