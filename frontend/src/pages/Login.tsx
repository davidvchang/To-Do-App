import React from 'react'

const Login:React.FC = () => {
  return (
    <section className='w-full h-full p-5 flex justify-center items-center'>
        <div className='flex flex-col bg-white p-6 shadow-md rounded-lg w-[28rem]'>
            <form className='flex flex-col gap-5 w-full'>
                <span className='text-2xl text-center'>Login</span>

                <div className='flex flex-col gap-3 pb-2'>
                    <div className='flex flex-col'>
                        <label htmlFor="email" className='text-sm'>Email</label>
                        <input type="email" name="email" id="email"className='px-5 py-2 text-sm border border-slate-300 rounded-sm' required/>
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="password" className='text-sm'>Password</label>
                        <input type="password" name="password" id="password"className='px-5 py-2 text-sm border border-slate-300 rounded-sm' required/>
                    </div>

                </div>

                <button className='bg-sky-600 w-full h-fit py-2 rounded text-white hover:brightness-95 hover:transition duration-300 cursor-pointer'>Sign in</button>

                <a href="/register" className='text-sm text-sky-600 text-center hover:text-sky-700 hover:transition duration-300'>Don't have an account? Sign Up</a>
            </form>
        </div>
    </section>
  )
}

export default Login
