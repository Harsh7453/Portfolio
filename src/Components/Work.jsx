import React from 'react'
import WorkItem from './WorkItem'


const data = [
    {
        year:2023,
        title: 'Bachelor of Computer Application',
        duration: '3 Years',
        details: 'Completed my BCA from College of Applied Education and Health Sciences Affiliated by CCS university Meerut (Uttar Pradesh). '
    },
    {
        year: 2020,
        title: 'Intermediate',
        duration: 'PCM',
        details: 'Completed my Intermediate with first division from State Board with Science stream.'
    },
    {
        year: 2018,
        title: 'High School',
        duration: 'Computer',
        details: 'Completed my High School with first division from State Board.'
    },
];
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Education</h1>
        <br /><br />
        {data.map((item, idx)=>(
            <WorkItem 
            key={idx} 
            year={item.year} 
            title={item.title}
             duration={item.duration} 
             details={item.details}/>
        ))}
    </div>
  )
}

export default Work