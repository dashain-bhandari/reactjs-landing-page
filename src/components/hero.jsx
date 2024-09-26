import React from 'react'
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
const Hero = () => {
    return (
        <div className='flex lg:mt-20 flex-col mt-6 items-center justify-center '>
            <h1 className='mx-auto text-4xl sm:text-6xl lg:text-7xl tracking-wide '>
                Virtual build tool 
                <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
                {" "}for developers
                </span>
            </h1>
            <p className='mt-10 max-w-4xl text-lg text-center text-neutral-500'>
              Empower your security and make everyone awe at your virtual reality skills and showcase at a grand stage.  
            </p>
            <div className="flex justify-center my-10 space-x-6">
                <a href="#" className='bg-gradient-to-r from-orange-500 to-red-500 px-3 py-2 rounded-md'>Start for free</a>
                <a href="#" className='border border-neutral-500 px-3 py-2 rounded-md'>Start for free</a>
           
            </div>
            <div className='flex justify-center mt-10'>

                <video loop autoPlay={true} muted className='w-1/2 rounded-lg border border-orange-700 shadow-orange-800 mx-2 my-4'>

                    <source src={video1} type='video/mp4'></source>
                </video>
                <video loop autoPlay={true} muted className='w-1/2 rounded-lg border border-orange-700 shadow-orange-800 mx-2 my-4'>

<source src={video2} type='video/mp4'></source>
</video>
            </div>
        </div>
    )
}

export default Hero