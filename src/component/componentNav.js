import React from 'react'
import US from '.././image/us.svg'
import Admin from '.././image/admin.jpg'
import {Menu,Mail,MessageSquare,CheckSquare,Calendar,Star,Moon,Search,ShoppingCart,Bell} from 'react-feather'

export default function componentNav() {
  return (
    <div class="flex justify-between ">
        <div class="flex items-center hover:cursor-pointer">
            <Menu size={22} color='gray' class="mx-2" />
            <Mail size={22} color='gray'  class="mx-2"/>
            <MessageSquare  size={22} color='gray' class="mx-2" />
            <CheckSquare size={22} color='gray' class="mx-2" />
            <Calendar  size={22} color='gray' class="mx-2" />
            <Star size={22} color='orange' class="mx-2" />
        </div>
        <div class="flex items-center hover:cursor-pointer ">
            <img class="w-5 h-5 hover:text-[#7367f0]" src={US}  /> 
            <span class="text-gray-500 mx-2 text-center">English</span>
            <Moon size={22} color='gray'  class="mx-2 " />
            <Search size={22} color='gray' class="mx-2" />
            <ShoppingCart size={22} color='gray' class="mx-2" />
            <Bell size={22} color='gray' class="mx-2" />
            <div class="text-gray-500 flex flex-col " >
            <label class="text-sm text-gray-600 hover:cursor-pointer"> johndoe</label>
            <label class="text-xs hover:cursor-pointer">admin</label>
            </div>
            <img class="w-10 h-10 rounded-full" src={Admin}/>
        </div>
    </div>
  )
}
