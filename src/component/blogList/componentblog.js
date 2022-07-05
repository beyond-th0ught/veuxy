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
    <Card1/>   
    </div>
    </div>
        
    </div>
  )
}
