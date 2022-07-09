import React from 'react'
import Post from './post'
import Categories from './categories'
import { EyeOff } from 'react-feather'

export default function search() {
  return (
    <div class="w-[60%] ml-8">
        <div class="w-[100%] ">
            <div class="w-[100%]">
                <input placeholder='Search here' class=" p-1 form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-100
        bg-white bg-clip-padding
        border-solid border-[#7367f0]
        
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-300 focus:bg-white focus:ring-violet-300 focus:outline-none"  />
            </div>          
        </div>
        <div>
              <Post/>
            </div>
        <div>
          <Categories/>
        </div>
        
    </div>
  )
}
