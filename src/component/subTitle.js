import React from 'react'
import {ChevronRight} from 'react-feather'

export default function subTitle() {
  return (
    <div class="flex py-4 items-center ">
        <div class="text-2xl pr-4 text-gray-600 border-r-[1px] border-gray-300">
            Blog List
        </div>
        <div class="mx-2 text-[#7367f0] flex items-center">
            <div>Home</div>
            <ChevronRight size={14} color='gray' class="mx-2 mt-1"/>
        </div>
        <div class="text-[#7367f0] flex items-center">
            <div>Page</div>
            <ChevronRight size={14} color='gray' class="mx-2 mt-1"/>
        </div>
        <div class="text-[#7367f0] flex items-center">
            <div>Blog</div>
            <ChevronRight size={14} color='gray' class="mx-2 mt-1"/>
        </div>
        <div class=" text-gray-500 flex items-center">
           <div>List</div>
            <ChevronRight size={14} color='gray' class="mx-2 mt-1"/>
        </div>
    </div>
  )
}
