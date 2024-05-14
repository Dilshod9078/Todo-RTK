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
    <div className='w-[65%] bg-white mt-10 mx-auto p-4 rounded-lg'>
      <div className='flex items-center justify-between mb-5'>
      <h1 className='text-[28px] font-bold text-slate-500'>Create a task for yourself!</h1>
       <Link className='block w-[20%] transition-all duration-300 hover:scale-105 bg-blue-500 text-white text-center font-bold p-2 rounded-md text-[20px]' to={"/add"} >+Add</Link>
      </div>
      <table className='w-full'>
        <thead className='mb-2'>
          <tr className='mb-2'>
          <th className='text-[20px] font-medium p-2 bg-teal-300 text-start w-[150px] rounded-tl-md rounded-bl-md'>Name</th>
          <th className='text-[20px] font-medium p-2 bg-teal-300 text-start w-[170px]  '>Surname</th>
          <th className='text-[20px] font-medium p-2 bg-teal-300 text-start w-[250px] '>Email</th>
          <th className='text-[20px] font-medium p-2 bg-teal-300 text-start w-[200px]'>Phone</th>
          <th className='text-[20px] font-medium p-2 bg-teal-300 text-center w-[200px] rounded-tr-md rounded-br-md'>Action</th>
          </tr>
        </thead>
        <tbody>
        {
            data.map(item => (
              <tr key={item.id} >
                <td className='text-[20px] font-medium p-2 bg-slate-300 text-start rounded-tl-md rounded-bl-md'>{item.name}</td>
                <td className='text-[20px] font-medium p-2 bg-slate-300 text-start '>{item.surname}</td>
                <td className='text-[20px] font-medium p-2 bg-slate-300 text-start '>{item.email}</td>
                <td className='text-[20px] font-medium p-2 bg-slate-300 text-start '>{item.phone}</td>
                <td className='p-2 bg-slate-300 text-center rounded-tr-md rounded-br-md flex items-center justify-center'>
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
               
                </td>
              </tr>
            ))
           }
        </tbody>
      </table>
    </div>
  )
}

export default Todos