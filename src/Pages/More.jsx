import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMoreTodoQuery } from '../store';
import Arrow from '../assets/Images/arrow-left.svg';

function More() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true); 
  const { data: moreTodo, error, isLoading } = useMoreTodoQuery(id);

  useEffect(() => {
    if (!isLoading) {
      setLoading(false);
    }
  }, [isLoading]);

  if (error) {
    return <div>Error occurred: {error.message}</div>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!moreTodo) {
    return <p>No data found for this todo.</p>;
  }

  return (
    <div className='bg-white p-5 rounded-lg w-[40%] mx-auto mt-10'>
      <button onClick={() => navigate('/')}>
        <img src={Arrow} alt="Arrow left icon" width={"28px"} height={"28px"} />
      </button>
      <h2 className='text-[30px] text-slate-500 font-bold text-center'>{moreTodo.name}</h2>
      <div className='mt-3'>
        <p className='text-[24px] font-bold'>Surname: <span className='font-medium text-[20px] text-slate-400'>{moreTodo.surname}</span></p>
        <p className='text-[24px] font-bold'>Email: <span className='font-medium text-[20px] text-slate-400'>{moreTodo.email}</span></p>
        <p className='text-[24px] font-bold'>Phone: <span className='font-medium text-[20px] text-slate-400'>{moreTodo.phone}</span></p>
      </div>
    </div>
  );
}

export default More;