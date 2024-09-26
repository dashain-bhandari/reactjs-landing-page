import React from 'react'
import { communityLinks, platformLinks, resourcesLinks } from '../constants'

const Footer = () => {
    return (
        <div className='border-t mt-16 border-neutral-600 '>
            <div className='flex flex-wrap  '>
                <div className='w-1/2    lg:w-1/3 mt-6'>
                    <h4>Resources</h4>
                    <div className='w-full flex flex-col mt-6'>
                        {
                            resourcesLinks.map((item, index) => (
                                <>

                                    <a href='#' className='text-neutral-400 text-sm'>  {item.text}</a>

                                </>
                            ))
                        }
                    </div>
                </div>
                <div className='w-1/2 lg:w-1/3 mt-6'>
                    <h4>Platform</h4>
                    <div className='w-full flex flex-col mt-6'>
                        {
                            platformLinks.map((item, index) => (
                                <>

                                    <a href='#' className='text-neutral-400 text-sm' >  {item.text}</a>

                                </>
                            ))
                        }
                    </div>
                </div>
                <div className='w-1/2 lg:w-1/3 mt-6'>
                    <h4>Community</h4>
                    <div className='w-full flex flex-col mt-6'>
                        {
                            communityLinks.map((item, index) => (
                                <>

                                    <a href='#' className='text-neutral-400 text-sm' >  {item.text}</a>

                                </>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer