import React from 'react'
import Card from './card'
import ComponentNav from '../blogList/componentNav'
import SubTitle from '../blogList/subTitle'
import Search from '../blogList/search'
import { Heart } from 'react-feather'


export default function componentblog() {
  return (
    <div class="h-[100%] w-[100%]  bg-gray-50">
    <div class=" mx-4 pt-3  rounded-md h-[100%] ">
    <div class="px-3 py-2.5 h-full w-full bg-white rounded-md shadow-md">
    <ComponentNav/>  
    </div>
    <SubTitle/>
    <div class="flex justify-between">
    <Card/>
    <Search/>   
    </div>
    <div>

    </div>
    <div class="flex justify-between text-md text-gray-400 py-3">
      <div>
      COPYRIGHT © 2022 Pixinvent, All rights Reserved
      </div>
      <div class="flex justify-center items-center ">
      Hand-crafted & Made with
      <Heart color='#ea5455' size={20} class="ml-2"/>
      </div>
    </div>
    </div> 
    </div>
  )
}
