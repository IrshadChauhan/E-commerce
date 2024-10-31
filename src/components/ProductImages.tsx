"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const images = [
  {
    id : 1,
    url : "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id : 2,
    url : "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id : 3,
    url : "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id : 4,
    url : "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
]

const ProductImages = () => {

  const [index, setIndex] = useState(0)

  return (
    <div className='flex flex-col'>
      {/* main image  */}
<div className='h-[500px]  relative '>
<Image src={images[index].url} alt="" sizes='50vw' fill className='object-cover rounded-md' />

</div>
{/* more images  */}
<div className=' flex gap-4 mt-8'>
{
  images.map((img,i) => (
    <div key={i} className='w-1/4 h-32 relative cursor-pointer'>
      <Image key={i} src={img.url} alt="" sizes='22vw' fill className='object-cover rounded-md' onClick={() => setIndex(i)} />
    </div>
  ))
}
</div>
    </div>
  )
}

export default ProductImages