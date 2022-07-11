import React from 'react'
import DetailMain from '../../image/detailMain.jpg'
import {MessageSquare, Bookmark, Share2} from 'react-feather'
import Data from '../blogList/data'
import Card2 from './card2'


export default function Card() {
    const detail = Data[0]
    console.log(detail)
  return (
    <div>
            <div class="flex   w-[100%]">
  <div class="rounded-lg shadow-lg bg-white max-w-[100%] ">
    <a href="#!">
      <img class="rounded-t-lg w-full" src={DetailMain} alt=""/>
    </a>
    <div class="p-6">
    <div  class="m-3">
            <div class="text-xl text-gray-500 font-medium">
            {detail.title}
            </div>
            <div class=" my-3 flex items-center">
                <img class="w-6 h-6 rounded-full" src={detail.imageIcon}/>
                <code class="text-sm mx-1 text-gray-400">by </code> 
                <code class="text-sm text-gray-500">{ detail.name}</code> 
                <code class="text-sm text-gray-400 ml-1">|Jan 10, 2020</code>
            </div>
            <div class="flex my-3 items-center">
                <div class="rounded-full text-[#00cfe8] hover:cursor-pointer
                r mr-2 py-1 text-xs font-bold text-center w-14 bg-[#d4f8fb]">
                    Quote
                </div>
                <div class="rounded-full text-[#7367f0] hover:cursor-pointer py-1 text-xs font-bold text-center w-14 bg-[#dad9ea]">
                    Fashion
                </div>
            </div>
                <div class="my-3 text-md text-gray-500">
                {detail.about}
                </div>
                <div>
                  <Card2/>
                </div>
                <hr class="border-b-0 mt-4"></hr>
                <div class="my-3 text-sm flex justify-between hover:cursor-pointer text-gray-600">
                    <div class=" flex justify-center items-center ">
                      <div class="flex justify-center items-center mr-3">
                      <MessageSquare color='gray' class="mr-1 mt-1 "/>
                        19.1k
                      </div>
                      <div class="flex justify-center items-center">
                      <Bookmark color='gray' class="mr-1 mt-1 "/>
                        139
                      </div>
                    </div>
                <div class=" text-[#7367f0] hover:cursor-pointer ">
                    <Share2 color='gray'/>
                </div>
                </div>
        </div>
    </div>
  </div>
</div>       
    </div>
  )
}
