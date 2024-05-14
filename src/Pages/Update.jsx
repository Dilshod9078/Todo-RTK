
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useGetAllTodoQuery, useUpdateTodoMutation } from '../store'
import toast, { Toaster } from 'react-hot-toast'

function Update() {

  const {id} = useParams()
  const navigate = useNavigate()
  const {data = []} = useGetAllTodoQuery()
  const [updatedTodo] = useUpdateTodoMutation()

  const [updateName, setUpdateName] = useState("")
  const [updateSurname, setUpdateSurname] = useState("")
  const [updateEmail, setUpdateEmail] = useState("")
  const [updatePhone, setUpdatePhone] = useState("")
  const [updateId, setUpdateId] = useState(null)

  useEffect(() => {
    const updateData = data.find(item => item.id === id)
    if(updateData){
      setUpdateName(updateData.name)
      setUpdateSurname(updateData.surname)
      setUpdateEmail(updateData.email)
      setUpdatePhone(updateData.phone)
      setUpdateId(id)
    }
  }, [id, data])

const handleFormUpdate = (evt) => {
  evt.preventDefault()
}

const handleUpdated = async () => {
  const data = {
    id:updateId,
    name:updateName,
    surname:updateSurname,
    email:updateEmail,
    phone:updatePhone,
  }
  try {
    await updatedTodo(data);
    toast.success('Information updated!');
    setTimeout(() => {
      navigate('/');
    }, 1000);
  } catch (error) {
    console.error('Error updating todo:', error);
    toast.error('Error updating todo!');
  }
}

  return (
    <form onSubmit={handleFormUpdate} className='w-[55%] mx-auto mt-10 bg-white rounded-lg p-5'>
      <Toaster position="top-center" reverseOrder={false}/>
      <h2 className='text-[28px] m-0 text-center font-bold text-slate-500 mb-5'>Update todo</h2>
      <div className='flex items-center justify-between flex-wrap gap-[20px]'>
      <input value={updateName} onChange={(e) => setUpdateName(e.target.value)} className='p-2 w-[45%] rounded-md border-[1px] border-solid border-slate-300 outline-none focus:shadow-md focus:shadow-blue-500' type="text" placeholder='Enter your update name' required autoComplete='off' />
      <input value={updateSurname} onChange={(e) => setUpdateSurname(e.target.value)} className='p-2 w-[45%] rounded-md border-[1px] border-solid border-slate-300 outline-none focus:shadow-md focus:shadow-blue-500' type="text" placeholder='Enter your update surname' required autoComplete='off' />
      <input value={updateEmail} onChange={(e) => setUpdateEmail(e.target.value)} className='p-2 w-[45%] rounded-md border-[1px] border-solid border-slate-300 outline-none focus:shadow-md focus:shadow-blue-500' type="email" placeholder='Enter your update email' required autoComplete='off' />
      <input value={updatePhone} onChange={(e) => setUpdatePhone(e.target.value)} className='p-2 w-[45%] rounded-md border-[1px] border-solid border-slate-300 outline-none focus:shadow-md focus:shadow-blue-500' type="text" placeholder='Enter your update phone' required autoComplete='off' />
      </div>
      <div className='flex items-center justify-center mt-4 space-x-[20px]'>
        <button type='submit' onClick={handleUpdated} className='text-white text-[20px] transition-all duration-300 hover:scale-105 font-bold bg-blue-500 text-center w-[20%] p-2 rounded-md'>Update</button>
        <Link to={'/'} className='text-white text-[20px] transition-all duration-300 hover:scale-105 font-bold bg-red-500 text-center w-[20%] p-2 rounded-md'>Main page</Link>
      </div>
    
    </form>
  )
}

export default Update