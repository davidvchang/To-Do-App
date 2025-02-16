import React from 'react'

interface PropsTask {
    text: string
}

const Task:React.FC<PropsTask> = ({text}) => {
  return (
    <div className='flex w-full justify-between items-center bg-white border border-slate-200 p-4'>
        <div className='flex items-center gap-2'>
            <input type="checkbox" name="x" id="x" className='w-4 h-4'/>
            <label htmlFor='x' className='font-light text-sm'>{text}</label>
        </div>
        <button className='bg-green-500 text-white px-5 py-1 rounded text-sm hover:brightness-95 hover:transition duration-300 cursor-pointer'>Done</button>
        <div className='w-fit h-fit bg-green-100 px-2 flex items-center justify-center rounded-full border border-green-200'>
            <span className='text-xs font-medium text-green-600'>Completed</span>
        </div>
        <div className='w-fit h-fit bg-yellow-100 px-2 flex items-center justify-center rounded-full border border-yellow-200'>
            <span className='text-xs font-medium text-yellow-600'>Pendient</span>
        </div>
    </div>
  )
}

export default Task
