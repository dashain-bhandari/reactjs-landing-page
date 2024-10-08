import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import codeImg from "../assets/code.jpg"
import { checklistItems } from '../constants'
const Workflow = () => {
  return (
    <div className='mt-20 '>
     <h2 className='text-3xl  text-center tracking-wide  sm:text-5xl lg:text-6xl '>Accelerate your <span className='bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text'>
     coding workflow.</span></h2>
<div className='flex flex-wrap justify-center'>
    <div className='w-full lg:w-1/2'>
<img src={codeImg} ></img>
    </div>
    <div className='pt-12 w-full lg:w-1/2'>
{
    checklistItems.map((item,index)=>(
        <div key={index} className='flex mb-12'>
           
                <div className='text-green-400 w-10 h-10 bg-neutral-700 mx-6 p-2 justify-center items-center rounded-full'>
                    <CheckCircle2/>
                    </div>
            <div>
                <h5 className='mt-1 mb-2 text-xl'>{item.title}</h5>
              <p className='text-md text-neutral-500 px-2'>{item.description}</p>
                </div>
            </div>
    ))
}
    </div>
</div>
    </div>
  )
}

export default Workflow