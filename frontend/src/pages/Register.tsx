import React from 'react'
import { ChevronLeft } from 'lucide-react';

const Register:React.FC = () => {
  return (
    <section className='w-full h-full p-5 flex justify-center items-center'>
        <div className='flex flex-col bg-white p-6 shadow-md rounded-lg w-[28rem]'>
            <form className='flex flex-col gap-5 w-full'>
                <span className='text-2xl text-center'>Register</span>

                <div className='flex flex-col gap-3 pb-2'>

                    <div className='flex gap-2'>
                        <div className='flex flex-col'>
                            <label htmlFor="name" className='text-sm'>Name</label>
                            <input type="text" name="name" id="name"className='px-5 py-2 text-sm border border-slate-300 rounded-sm' required/>
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="last_name" className='text-sm'>Last Name</label>
                            <input type="text" name="last_name" id="last_name"className='px-5 py-2 text-sm border border-slate-300 rounded-sm' required/>
                        </div>

                    </div>


                    <div className='flex flex-col'>
                        <label htmlFor="email" className='text-sm'>Email</label>
                        <input type="email" name="email" id="email"className='px-5 py-2 text-sm border border-slate-300 rounded-sm' required/>
                    </div>

                    <div className='flex gap-2'>
                        <div className='flex flex-col'>
                            <label htmlFor="password" className='text-sm'>Password</label>
                            <input type="password" name="password" id="password"className='px-5 py-2 text-sm border border-slate-300 rounded-sm' required/>
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="password2" className='text-sm'>Confirm Password</label>
                            <input type="password" name="password2" id="password2"className='px-5 py-2 text-sm border border-slate-300 rounded-sm' required/>
                        </div>

                    </div>


                </div>

                <div className='flex gap-2 items-center'>
                    <a href="/" className='w-fit h-full border border-slate-400 rounded hover:bg-sky-50 hover:transition duration-300'><ChevronLeft className='w-[38px] h-[38px]'/></a>
                    <button className='bg-sky-600 w-full h-fit py-2 rounded text-white hover:brightness-95 hover:transition duration-300 cursor-pointer'>Register</button>

                </div>
            </form>
        </div>
    </section>
  )
}

export default Register
