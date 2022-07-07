import React, { useState } from 'react'

export default function Component2() {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div class="w-[50%]">
        <form class="w-[100%] p-14 ">
            <div class="text-3xl   text-gray-700">
            Welcome to Vuexy! 👋
            </div>
            <div class="text-md  text-gray-700 mt-4 text-gray-500 text-md">
            Please sign-in to your account and start the adventure
            </div>
            
            <div class="p-3 bg-gray-100 w-[100%] rounded-md my-6">
            <div class="text-[#7367f0] text-sm">
            <label class="pb-1">Admin: admin@demo.com | admin</label>
            <br/>
            Client: client@demo.com | client
            </div>
            </div> 
            <div>
               <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label text-gray-500 text-sm">Email </label>
                  <input type="email" onChange={ (e) => setUserName(e.target.value) } class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3 text-gray-500 text-sm">
                  <label for="exampleInputPassword1" class="form-label ">Password</label>
                  <label class="hover:text-[#847ce4] text-[#7367f0] hover:cursor-pointer ml-20 ">Forget Password ?</label>
                 <input type="password" onChange={(e) => setPassword(e.target.value)} class="form-control bg-white" id="exampleInputPassword1"/>
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input p-1" id="exampleCheck1"/>
                  <label class="form-check-label text-md text-gray-500" for="exampleCheck1">Remember me</label>
                </div>
                <div class="">
                  <button type="submit" onClick={() => {localStorage.setItem('Email',userName); localStorage.setItem('Password',password)}} class="btn text-white bg-[#7367f0] w-[100%]">Sign in</button>
                </div>
                </div>
                <div class="py-3 text-md">
                <label class="text-center text-gray-500">
                    New on our platform?
                  <code class="hover:text-[#847ce4] text-[#7367f0] hover:cursor-pointer">
                      Create an account 
                  </code>
                </label>     
                </div>
                
        </form>
    </div>
  )
}
