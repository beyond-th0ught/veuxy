import React from 'react'
import { Watch,ShoppingCart,Command,Hash,Video } from 'react-feather'

export default function categories() {
    const data=[
        {
            image:Watch,
            name:"Fashion",
            color:'#7367f0',
        },
        {
            image:ShoppingCart,
            name:"Food",
            color:'#28c76f'
        },
        {
            image:Command,
            name:"Gamming",
            color:'#ea5455'
        },
        {
            image:Hash,
            name:"Quote",
            color:'#00cfe8'
        },
        {
            image:Video,
            name:"Video",
            color:'#ff9f43'
        }
    ]
  return (
    <div>
    <div class="text-gray-400 text-xs mt-4">
    CATEGORIES
    </div>
    {data.map((val, index)=>{
        return(
            <div class=" flex items-center my-2">
        <div class="bg-gray-200 h-8 w-8 rounded-md px-1 py-1 hover:cursor-pointer">
        <val.image size={15} color={val.color} class="mt-1 ml-1" />
        </div>
        
        <label class="ml-3 text-gray-500 text-md">
            {val.name}
        </label>
    </div>
        )
    })}
    </div>
    
  )
}
