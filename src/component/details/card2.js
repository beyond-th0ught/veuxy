import React from 'react'
import Detail from '../../image/detail1.jpg' 
export default function card2() {
  return (
    <div class="flex flex-col">
    <div>
    <div class="text-xl text-gray-500 font-medium">
        Unprecedented Challenge
    </div>
    <div  class="text-md text-gray-500 ">
        <ul class="list-disc pb-3 pl-8">
            <li>Preliminary thinking systems</li>
            <li>Bandwidth efficient</li>
            <li>Green space</li>
            <li>Social impact</li>
            <li>Thought partnership</li>
            <li>Fully ethical life</li>
        </ul>
    </div>
    </div>
  <div class="flex flex-row  bg-white ">
    <img class=" w-14 h-14  object-cover rounded-full " src={Detail} alt="" />
    <div class="pl-5 flex flex-col ">
      <h5 class="text-gray-500 text-md font-medium mb-1">Willie Clark</h5>
      <p class="text-gray-500 ">
      Based in London, Uncode is a blog by Willie Clark. His posts explore modern design trends through photos and quotes by influential creatives and web designer around the world.
      </p>
    </div>
  </div>
</div>
  )
}
