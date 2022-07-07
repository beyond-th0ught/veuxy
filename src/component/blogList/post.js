import React from 'react'
import post1 from '../../image/post1.jpg'
import post2 from '../../image/post2.jpg'
import post3 from '../../image/post3.jpg'
import post4 from '../../image/post4.jpg'


export default function post() {
    const data=[
        {
            image:post1,
            discription:"Why Should Forget Facebook?",
            date:"Jan 14 2020"
        },
        {
            image:post2,
            discription:"Publish your passions, your way",
            date:"Mar 04 2020"
        },
        {
            image:post3,
            discription:"The Best Ways to Retain More",
            date:"Feb 18 2020"
        },
        {
            image:post4,
            discription:"Share a Shocking Fact or Statistic",
            date:"Oct 08 2020"
        }
    ]
  return (
    <div>
    <div class="flex flex-col justify-center mt-4">
    <div class="text-gray-400 py-2">
        Recent Post
    </div>
    {data.map((val,index)=>{
        return(
            
  <div class="flex flex-row rounded-lg my-2 justify-between  h-[10%] w-[100%]">
    <img class="mr-4 h-20 w-36 object-cover  rounded-md hover:cursor-pointer" src={val.image} alt="" />
    <div class=" flex flex-col justify-start bg-gray-50 text-md ">
      <p class="text-gray-500 font-lg hover:cursor-pointer hover:text-[#7367f0]">
      {val.discription}
      </p>
      <p class="text-gray-400 mt-2.5">{val.date}</p>
    </div>
  </div>

        )
    })}
    </div>
</div>
  )
}
