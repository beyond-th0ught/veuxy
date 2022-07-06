import React from 'react'
import Vuexy1 from '../../image/vuexy1.jpg'
import VuexyIcon1 from '../../image/vuexyIcon1.jpg'
import Vuexy2 from '../../image/vuexy2.jpg'
import VuexyIcon2 from '../../image/vuexyIcon2.jpg'
import Vuexy3 from '../../image/vuexy3.jpg'
import VuexyIcon3 from '../../image/vuexyIcon3.jpg'
import Vuexy4 from '../../image/vuexy4.jpg'
import VuexyIcon4 from '../../image/vuexyIcon4.jpg'
import Vuexy5 from '../../image/vuexy5.jpg'
import VuexyIcon5 from '../../image/vuexyIcon5.jpg'
import Vuexy6 from '../../image/vuexy6.jpg'
import VuexyIcon6 from '../../image/vuexyIcon6.jpg'

export default function componentblog() {
    const data=[
        {
            title:"The Best Features Coming to iOS and Web design",
            image: Vuexy1,
            imageIcon:VuexyIcon1,
            name:"Ghani Pradita",
            discription:"Donut fruitcake soufflé apple pie candy canes jujubes croissant chocolate bar ice cream.",
            comment:"76 Comments"
        },
        {
            title:"Latest Quirky Opening Sentence or Paragraph",
            image: Vuexy2,
            imageIcon:VuexyIcon2,
            name:"Jorge Griffin",
            discription:"Apple pie caramels lemon drops halvah liquorice carrot cake. Tiramisu brownie lemon drops.",
            comment:"2100 Comments"
        },
        {
            title:"Share an Amazing and Shocking Fact or Statistic",
            image: Vuexy3,
            imageIcon:VuexyIcon3,
            name:"Claudia Neal",
            discription:"Tiramisu jelly-o chupa chups tootsie roll donut wafer marshmallow cheesecake topping.",
            comment:"243 Comments"
        },
        {
            title:"Withhold a Compelling Piece of Information",
            image: Vuexy4,
            imageIcon:VuexyIcon4,
            name:"Fred Boone",
            discription:"Croissant apple pie lollipop gingerbread. Cookie jujubes chocolate cake icing cheesecake.",
            comment:"10 Comments"
        },
        {
            title:"Unadvertised Bonus Opening: Share a Quote",
            image: Vuexy5,
            imageIcon:VuexyIcon5,
            name:"Billy French",
            discription:"Muffin liquorice candy soufflé bear claw apple pie icing halvah. Pie marshmallow jelly.",
            comment:"319 Comments"
        },
        {
            title:"Ships at a distance have Every Man’s Wish on Board",
            name:"Helena Hunt",
            image:Vuexy6,
            imageIcon:VuexyIcon6,
            discription:"A little personality goes a long way, especially on a business blog. So don’t be afraid to let loose.",
            comment:"1500 Comments"
        }
        
    ]
  return (
    <div class="grid grid-cols-3 gap-3">
        {data.map((val,index)=>{
            return(
                
                <div class=" rounded-md flex flex-col">
    <img class='w-[100%] rounded-t-md ' src={val.image} />
    <div class=" bg-white rounded-b-md">
    <div  class="m-3">
    <div class="text-xl text-gray-500 font-medium">
    {val.title}
    </div>
    <div class=" my-3 flex items-center">
    <img class="w-6 h-6 rounded-full" src={val.imageIcon}/>
    <code class="text-sm mx-1 text-gray-400">by </code> 
    <code class="text-sm text-gray-500">{val.name}</code> 
    <code class="text-sm text-gray-400 ml-1">|Jan 10, 2020</code>
    </div>
    <div class="flex my-3 items-center">
        <div class="rounded-full text-[#00cfe8] hover:cursor-pointer
        r mr-2 py-1 text-xs font-bold text-center w-14 bg-[#d4f8fb]">Quote</div>
        <div class="rounded-full text-[#7367f0] hover:cursor-pointer py-1 text-xs font-bold text-center w-14 bg-[#dad9ea]">Fashion</div>
    </div>
    <div class="my-3 text-md text-gray-500">
     {val.discription}
    </div>
    <hr/>
    <div class="my-3 text-sm flex justify-between hover:cursor-pointer text-gray-600">
        <div class="">
            <img src=''/>
            {val.comment}
        </div>
        <div class=" text-[#7367f0] hover:cursor-pointer ">
            Read More
        </div>
    </div>
</div>
    </div>
    </div>
            )
        })}
    </div>
    
    
  )
}
