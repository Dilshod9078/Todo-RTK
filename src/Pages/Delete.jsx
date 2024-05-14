import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDeleteTodoMutation } from '../store' 
import toast, { Toaster } from 'react-hot-toast'

function Delete() {
  const {id} = useParams()
  const [deleteTodo] =  useDeleteTodoMutation()
  const navigate = useNavigate()
  const handleDelete = async (id) => {
    await deleteTodo(id)
    toast.success("Data deleted!")
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }
  return (
    <div className='mt-10 mx-auto rounded-md bg-white p-5 w-[30%]'>
      <Toaster position="top-center" reverseOrder={false}/>
        <h2 className='text-[28px] text-center font-bold mb-4 text-slate-400'>Are you sure you want to delete the data?</h2>
        <div className='flex items-center justify-center space-x-[30px]'>
           <button onClick={() => navigate('/')} className='text-[20px] text-white bg-blue-500 rounded-md p-2 text-center font-bold w-[100px]'>Cancel</button>
           <button onClick={() => handleDelete(id)} className='text-[20px] text-white bg-red-500 rounded-md p-2 text-center font-bold w-[100px]'>Delete</button>
        </div>
    </div>
  )
}

export default Delete