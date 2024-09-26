import React from 'react'
import { features } from '../constants'

const Features = () => {
    return (
        <div className=' mt-20 relative  min-h-[800px]'>
            <div className='text-center'>
                <span className='bg-neutral-900 text-orange-500 rounded-full h-6 font-medium uppercase py-1 px-2'>
                    Features
                </span>
                <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10'>
                    Easily build <span className='bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text'>
                        your code
                    </span>
                </h2>
                <div className='flex flex-wrap mt-10 lg:mt-20 '>
                    {
                        features.map((item, index) => (
                            <div key={index} className='w-full sm:w-1/2 lg:w-1/3'>
                                <div className='flex'>
                                    <div className='flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full'>
                                        {
                                            item.icon
                                        }
                                    </div>

                                    <div>
                                        <h5 className='mt-1 mb-6 text-xl'>
                                            {item.text}
                                        </h5>
                                        <p className='mb-20 text-md text-neutral-500'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Features