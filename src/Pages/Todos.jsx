import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGetAllTodoQuery } from '../store'

import Pen from '../assets/Images/pen.svg'
import Trash from '../assets/Images/trash.svg'
import More from '../assets/Images/more.svg'

function Todos() {
  const {data = []} = useGetAllTodoQuery()
  const navigate = useNavigate()

  return (
    <div className='w-[60%] bg-white mt-10 mx-auto p-4 rounded-lg'>
      <div className='flex items-center justify-between mb-5'>
      <h1 className='text-[28px] font-bold text-slate-500'>Create a task for yourself!</h1>
       <Link className='block w-[20%] transition-all duration-300 hover:scale-105 bg-blue-500 text-white text-center font-bold p-2 rounded-md text-[20px]' to={"/add"} >+Add</Link>
      </div>
      <ul className='flex flex-col space-y-[7px]'>
        <li className='flex items-center gap-7 p-2 bg-teal-300 rounded-md'>
          <span className='text-[20px] font-medium'>Name</span>
          <span className='text-[20px] font-medium block pl-[25px]'>Surname</span>
          <span className='text-[20px] font-medium block w-[230px] pl-[50px]'>Email</span>
          <span className='text-[20px] font-medium'>Phone</span>
        </li>
           {
            data.map(item => (
              <li key={item.id} className='flex items-center justify-between p-2 bg-slate-300 rounded-md'>
                <div className='flex items-center gap-7'>
                <span className='text-[20px] font-medium '>{item.name}</span>
                <span className='text-[20px] font-medium block pl-[25px]'>{item.surname}</span>
                <span className='text-[20px] font-medium  block w-[230px] pl-[15px]'>{item.email}</span>
                <span className='text-[20px] font-medium '>{item.phone}</span>
                </div>
                <div className='flex items-center space-x-[10px]'>
                <button onClick={() => navigate(`/more/${item.id}`)} className='w-[40px] p-2 flex transition-all duration-300 hover:scale-105 items-center justify-center rounded-md bg-blue-500'>
                    <img src={More} alt="More icon"/>
                  </button>
                  <Link to={`/update/${item.id}`} className='w-[40px] flex transition-all duration-300 hover:scale-105 items-center justify-center p-2 rounded-md  bg-teal-500'>
                    <img src={Pen} alt="Pen icon"/>
                  </Link>
                  <Link to={`/delete/${item.id}`} className='w-[40px] p-2 flex transition-all duration-300 hover:scale-105 items-center justify-center rounded-md bg-red-500'>
                    <img src={Trash} alt="Trash icon"/>
                  </Link>
                </div>
              </li>
            ))
           }
      </ul>
    </div>
  )
}

export default Todos