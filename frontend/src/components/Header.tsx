import React from 'react'
import { LogOut } from 'lucide-react';

const Header:React.FC = () => {
  return (
    <div className='flex w-full justify-between items-center bg-white border border-slate-200 p-5 rounded-md'> 
        <h1 className='text-2xl font-medium'>To-Do App</h1>

        <div className='flex gap-5 items-center'>
            <span>dvalenzuelachang@gmail.com</span>
            <button className='flex gap-2 bg-red-500 text-white px-5 py-2 rounded hover:brightness-95 hover:transition duration-300 cursor-pointer'>
                <LogOut className='w-6 h-6'/>
                <span>Logout</span>
            </button>
        </div>
    </div>
  )
}

export default Header
