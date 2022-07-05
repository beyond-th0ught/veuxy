import React from 'react'
import Vuexy1 from '../../image/vuexy1.jpg'
import VuexyIcon1 from '../../image/vuexyIcon1.jpg'
import Card1 from './card'
import ComponentNav from '../componentNav'
import SubTitle from '../subTitle'


export default function componentblog() {
  return (
    <div class="h-[100%] w-[100%]  bg-gray-200">
    <div class="my-3 mx-4 rounded-md ">
    <div class="px-3 py-2 h-full w-full bg-white rounded-md  ">
        <ComponentNav/>
    </div>
        <SubTitle/>
    <div class="grid grid-cols-3 gap-1">
    <div class=" rounded-md flex flex-col">
    <img class='w-[100%] rounded-md' src={Vuexy1} />
    <div class=" bg-white">
    <div  class="m-3">
    <div class="text-xl text-gray-500 font-medium">
    The Best Features Coming to iOS and Web design
    </div>
    <div class=" my-3 flex items-center">
    <img class="w-6 h-6 rounded-full" src={VuexyIcon1}/>
    <code class="text-sm mx-1 text-gray-400">by </code> 
    <code class="text-sm text-gray-500">Ghani Pradita</code> 
    <code class="text-sm text-gray-400 ml-1">|Jan 10, 2020</code>
    </div>
    <div class="flex my-3 items-center">
        <div class="rounded-full text-[#00cfe8] hover:cursor-pointer
        r mr-2 py-1 text-xs font-bold text-center w-14 bg-[#d4f8fb]">Quote</div>
        <div class="rounded-full text-[#7367f0] hover:cursor-pointer py-1 text-xs font-bold text-center w-14 bg-[#dad9ea]">Fashion</div>
    </div>
    <div class="my-3 text-md text-gray-500">
    Donut fruitcake soufflé apple pie candy canes jujubes croissant chocolate bar ice cream.
    </div>
    <hr/>
    <div class="my-3 text-sm flex hover:cursor-pointer text-gray-600">
        <div class="">
            <img src=''/>
            76 Comments
        </div>
        <div class=" ml-36 text-[#7367f0] hover:cursor-pointer ">
            Read More
        </div>
    </div>
</div>
    </div>
    </div>
    <Card1/>   
    </div>
    </div>
        
    </div>
  )
}
