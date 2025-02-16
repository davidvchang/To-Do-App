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

        <div className='flex gap-3 w-full'>
            <input type="text" name="" id="" className='px-10 py-2 font-light border border-slate-200 rounded' placeholder='Add a new task'/>
            <button className=' w-fit h-fit px-5 py-2 bg-sky-600 text-white rounded-md hover:brightness-95 hover:transition duration-300 cursor-pointer'>Add</button>
        </div>

        <div className='flex flex-col'>

        </div>
    </section>
  )
}

export default TodoPage
