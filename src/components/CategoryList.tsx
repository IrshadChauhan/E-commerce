import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryList = () => {
  return (
    <div className='px-4 overflow-x-scroll scrollbar-hide' >
      <div className='flex gap-4 md:gap-8'>
        <Link href='/list?cat=test' className='flex-shrink-0 w-full sm:w-1/2 md:w-1/4 xl:wd-1/6'>
        <div className='relative bg-slate-100 w-full h-96'>
        <Image src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800" alt='' fill sizes='25vw'/>
        </div>
        <h1 className='mt-8 font-light tracking-wide'>Category Name</h1>
        </Link>
        <Link href='/list?cat=test' className='flex-shrink-0 w-full sm:w-1/2 md:w-1/4 xl:wd-1/6'>
        <div className='relative bg-slate-100 w-full h-96'>
        <Image src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800" alt='' fill sizes='25vw'/>
        </div>
        <h1 className='mt-8 font-light tracking-wide'>Category Name</h1>
        </Link>
        <Link href='/list?cat=test' className='flex-shrink-0 w-full sm:w-1/2 md:w-1/4 xl:wd-1/6'>
        <div className='relative bg-slate-100 w-full h-96'>
        <Image src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800" alt='' fill sizes='25vw'/>
        </div>
        <h1 className='mt-8 font-light tracking-wide'>Category Name</h1>
        </Link>
        <Link href='/list?cat=test' className='flex-shrink-0 w-full sm:w-1/2 md:w-1/4 xl:wd-1/6'>
        <div className='relative bg-slate-100 w-full h-96'>
        <Image src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800" alt='' fill sizes='25vw'/>
        </div>
        <h1 className='mt-8 font-light tracking-wide'>Category Name</h1>
        </Link>
        <Link href='/list?cat=test' className='flex-shrink-0 w-full sm:w-1/2 md:w-1/4 xl:wd-1/6'>
        <div className='relative bg-slate-100 w-full h-96'>
        <Image src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800" alt='' fill sizes='25vw'/>
        </div>
        <h1 className='mt-8 font-light tracking-wide'>Category Name</h1>
        </Link>
      </div>

    </div>
  )
}

export default CategoryList