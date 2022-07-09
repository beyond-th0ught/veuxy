import React from 'react'
import BG from '../../image/bg.svg'
import Logo from '../../image/logo.svg'


export default function component1() {
  return (

        <div class="w-[100%] h-100vh flex flex-col bg-gray-100">
        <div class="pt-4 pl-10 flex">
            <img class="w-10" src={Logo}/>
            <label class="text-[#7367f0] text-2xl text-center  font-semibold ml-3"> Vuexy</label>
        </div>
        <div class="w-[100%] h-[100%] ">
        <img src={BG} class=" w-[70%] h-[70%] ml-20 ml-[15%] mt-[13%]" />
        </div>
        
    </div>
    
  )
}
