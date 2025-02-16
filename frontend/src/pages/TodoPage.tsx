import React from 'react'
import InputSearch from '../components/InputSearch'

const TodoPage:React.FC = () => {
  return (
    <section className='w-full h-full bg-white p-5 shadow rounded-md flex flex-col gap-5'>
        <div className='flex w-full justify-between'> 
            <h1 className='text-2xl font-medium'>To-Do App</h1>
            <button className='bg-red-500 text-white px-10 py-2 rounded hover:brightness-95 hover:transition duration-300 cursor-pointer'>Logout</button>
        </div>

        <InputSearch/>
    </section>
  )
}

export default TodoPage
