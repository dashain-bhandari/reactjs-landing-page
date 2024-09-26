import React from 'react'
import { pricingOptions } from '../constants'

const Pricing = () => {
  return (
   <div className='w-full flex flex-wrap justify-center items-center gap-10'>

{
    pricingOptions.map((item,index)=>(<div className='w-full bg-neutral-800 md:w-1/2 lg:w-1/3'>
<div>
    {
        item.title
    }
    </div>
    <div>
        {
            item.price
        }
        </div>
        </div>))
}
   </div>
  )
}

export default Pricing