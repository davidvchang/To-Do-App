import React from 'react'
import InputSearch from '../components/InputSearch'
import Task from '../components/Task'
import Header from '../components/Header'

const TodoPage:React.FC = () => {
  return (
    <section className='w-full h-full p-5 flex flex-col gap-5'>
        <Header/>

        
        <div className='w-full flex gap-5'>
            <InputSearch/>
            <div className='flex w-full justify-between items-center bg-white border border-slate-200 p-5 rounded-md'>
                <div className='flex gap-3 w-full'>
                    <input type="text" name="" id="" className='px-5 py-2 font-light border border-slate-200 rounded w-full' placeholder='Add a new task'/>
                    <button className=' w-fit h-fit px-5 py-2 bg-sky-600 text-white rounded-md hover:brightness-95 hover:transition duration-300 cursor-pointer'>Add</button>
                </div>

            </div>

        </div>


        <div className='flex flex-col gap-0'>
            <Task text='Tarea 1'/>
            <Task text='Tarea 1'/>
            <Task text='Tarea 1'/>
            <Task text='Tarea 1'/>
            <Task text='Tarea 1'/>
            <Task text='Tarea 1'/>
            <Task text='Tarea 1'/>
        </div>
    </section>
  )
}

export default TodoPage
