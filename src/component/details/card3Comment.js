import React from 'react'
import Vuexy2 from '../../image/vuexyIcon2.jpg'
import { CornerUpLeft } from 'react-feather'

export default function card3Comment() {
  return (
    <div>
         <div class="flex flex-row bg-red-300 shadow-lg rounded-lg">
    <img class=" w-10 h-10  object-cover rounded-full " src={Vuexy2} alt="" />
    <div class="pl-5 flex flex-col ">
      <h5 class="text-gray-500 text-md font-medium mb-1">Chad Alexander</h5>
      <p class="text-gray-500 pb-2">May 24, 2020</p>
      <p class="text-gray-500 ">
A variation on the question technique above, the multiple-choice question great way to engage your reader.
      </p>
      <div class="flex items-center text-[#7367f0] text-md">
      <CornerUpLeft size={19} color='#7367f0' class="mr-2" />
      Reply
      </div>
      
    </div>
  </div>
    </div>
  )
}
