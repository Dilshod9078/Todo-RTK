import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAddTodoMutation } from '../store'
import toast, { Toaster } from 'react-hot-toast'

function AddTodo() {
const navigate = useNavigate()
  const  [addTodo] = useAddTodoMutation()
  const [todoName, setName] = useState("")
  const [todoSurname, setSurname] = useState("")
  const [todoemail, setEmail] = useState("")
  const [todophone, setPhone] = useState("")
  const handleFormSubmit = async (evt) => {
     evt.preventDefault()
    const data = {
      name:todoName,
      surname:todoSurname,
      email:todoemail,
      phone:todophone
    }
    await addTodo(data)
    toast.success("Added successfully!")
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }

  return (
    <form onSubmit={handleFormSubmit} className='w-[60%] mx-auto mt-10 bg-white rounded-lg p-5'>
      <Toaster position="top-center" reverseOrder={false}/>
      <h2 className='text-[28px] m-0 text-center font-bold text-slate-500 mb-5'>Add todo</h2>
      <div className='flex items-center justify-between flex-wrap gap-[20px]'>
      <input value={todoName} onChange={(evt) => setName(evt.target.value)} className='p-2 w-[48%] rounded-md border-[1px] border-solid border-slate-300 outline-none focus:shadow-md focus:shadow-blue-500' type="text" placeholder='Enter your name' required autoComplete='off' />
      <input value={todoSurname} onChange={(evt) => setSurname(evt.target.value)} className='p-2 m-0 w-[48%] rounded-md border-[1px] border-solid border-slate-300 outline-none focus:shadow-md focus:shadow-blue-500' type="text" placeholder='Enter your surname' required autoComplete='off' />
      <input value={todoemail} onChange={(evt) => setEmail(evt.target.value)} className='p-2 w-[48%] rounded-md border-[1px] border-solid border-slate-300 outline-none focus:shadow-md focus:shadow-blue-500' type="email" placeholder='Enter your email' required autoComplete='off' />
      <input value={todophone} onChange={(evt) => setPhone(evt.target.value)} className='p-2 w-[48%] rounded-md border-[1px] border-solid border-slate-300 outline-none focus:shadow-md focus:shadow-blue-500' type="number" placeholder='Enter your phone number' required autoComplete='off' />
      </div>    
      <div className='flex items-center space-x-[30px] justify-center mt-4'> 
        <button className='text-white font-bold bg-blue-500 transition-all duration-300 hover:scale-105 text-center w-[14%] p-2 rounded-md'>+Add</button>
        <Link to={'/'} className='text-white font-bold transition-all duration-300 hover:scale-105 bg-red-500 text-center w-[17%] p-2 rounded-md'>Main page</Link>
        </div> 
    </form>
  )
}

export default AddTodo