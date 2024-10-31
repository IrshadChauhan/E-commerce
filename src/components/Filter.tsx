import React from 'react'

const Filter = () => {
  return (
    <div className='mt-16 flex justify-between'>

{/* left  */}
<div className='flex gap-6 flex-wrap'>
  <select name="type" id="" className='px-4 py-2  rounded-2xl text-xs font-medium bg-gray-100'>
    <option >Type</option>
    <option value="Physical">Physical</option>
    <option value="Digital">Digital</option>
  </select>
  <input type="text" name="min" placeholder='min price' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400' />
  <input type="text" name="max" placeholder='max price' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400' />
  <select name="size" id="" className='px-4 py-2  rounded-2xl text-xs font-medium bg-gray-100'>
    <option >Size</option>
    <option value="Size">Size</option>
  </select>
  <select name="color" id="" className='px-4 py-2  rounded-2xl text-xs font-medium bg-gray-100'>
    <option >Color</option>
    <option value="Red">Red</option>
    <option value="Blue">Blue</option>
  </select>
  <select name="category" id="" className='px-4 py-2  rounded-2xl text-xs font-medium bg-gray-100'>
    <option >Category</option>
    <option value="shoe">shoe</option>
  </select>
  <select name="allFilter" id="" className='px-4 py-2  rounded-2xl text-xs font-medium bg-gray-100'>
    <option >All Filters</option>
    <option value="shoe">shoe</option>
  </select>


</div>
{/* right  */}
<div className=''>
<select
          name="sort"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
        >
          <option>Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
</div>
    </div>
  )
}

export default Filter