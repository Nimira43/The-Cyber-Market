import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='min-w-screen min-h-screen bg-[#fffaf0] flex justify-center items-center'>
      <div className='w-[350px] text-[#fffaf0] p-2'>
        <div className='bg-[#ff4500] p-4 rounded-md'>
          <h2 className='text-3xl mb-5 font-bold logo text-center'>The Cyber Market</h2>
          <p className='text-sm mb-3 font-medium text-center'>Please register to start your account</p>
          <form>
            <div className='flex flex-col w-full gap-1 mb-3'>
              <label htmlFor='name'>Name</label>
              <input className='px-3 py-2 outline-none border border-[#fffaf0] bg-transparent rounded-md' type='text' name='name' placeholder='Enter name' id='name' required />
            </div>
            <div className='flex flex-col w-full gap-1 mb-3'>
              <label htmlFor='email'>Email</label>
              <input className='px-3 py-2 outline-none border border-[#fffaf0] bg-transparent rounded-md' type='text' name='email' placeholder='Enter email' id='email' required />
            </div>
            <div className='flex flex-col w-full gap-1 mb-3'>
              <label htmlFor='password'>Password</label>
              <input className='px-3 py-2 outline-none border border-[#fffaf0] bg-transparent rounded-md' type='password' name='password' placeholder='Enter password' id='password' required />
            </div>

            <div className='flex items-center w-full gap-3 mb-3'>
              <input className='h-4 w-4 text-[#333] overflow-hidden bg-white rounded border-white focus:ring-black' type='checkbox' name='checkbox' id='checkbox' />
              <label htmlFor='checkbox' className='text-sm font-medium'>I agree to the terms and conditions</label>
            </div>
            <button className='bg-[#fffaf0] text-[#ff4500] w-full hover:text-[#333] uppercase rounded-md px-7 py-2 mb-3' >Sign Up</button>
            <div className='flex items-center mb-3 gap-3 justify-center text-sm'>
              <p>Already have an account? <Link className='font-semibold' to='/login'>Sign In</Link></p>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default Register
