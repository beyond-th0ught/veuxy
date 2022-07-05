import React, { useState } from 'react'

export default function Example() {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  

  return (
    <>
        <input className='border-2' onChange={(e) => setUserName(e.target.value)} />
        <input className='border-2' onChange={(e) => setPassword(e.target.value)} />
        <input className='border-2' onChange={(e) => setEmail(e.target.value)}/>

        <button onClick={()=> {localStorage.setItem('UserName',userName)
                               localStorage.setItem('Password',password)
                               localStorage.setItem('Email',email)
                               }}> Click Me</button>
    </>
  )
}