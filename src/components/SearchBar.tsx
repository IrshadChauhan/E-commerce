"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const SearchBar = () => {

  const router = useRouter()

  const handleSearch = (e : React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string

    if(name){
      router.push(`/list?name={name}`)
    }

  }


  return (
    <form className='flex items-center justify-center gap-4 p-2 rounded-md flex-1 bg-gray-100' onSubmit={handleSearch}>
      <input type="text" placeholder='search' name='name' className='flex-1 bg-transparent outline-none' />
      <button>
        <Image src="/search.png" alt="seach" height={16} width={16}></Image>
      </button>
    </form>
  )
}

export default SearchBar