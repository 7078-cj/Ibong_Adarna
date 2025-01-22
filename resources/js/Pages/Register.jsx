import React from 'react'
import {useForm} from '@inertiajs/react'
import { Inertia } from '@inertiajs/inertia';

function Register() {

  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email:'',
    password: '',
  });

  
  const submit = (e) => {
      e.preventDefault();

      
      post('/register-user');
  };



  return (
        <div>
                <div className="flex min-h-screen bg-gray-900 items-center justify-center">
      <div className="w-full max-w-sm bg-gray-800 p-8 rounded-lg shadow-lg">
        {/* <!-- Header Section --> */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-white">Gumawa ng Account</h2>
          <p className="mt-2 text-sm text-gray-300">Halina't simulan ang iyong paglalakbay!</p>
        </div>

        {/* <!-- Register Form --> */}
        <form className="space-y-6"  method="POST" onSubmit={submit}>
          
          {/* <!-- Name Input --> */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Username</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              onChange={(e)=>setData('name',e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-800 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
            />
          </div>

          {/* <!-- Email Input --> */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              onChange={(e)=>setData('email',e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-800 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
            />
          </div>

          {/* <!-- Password Input --> */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              onChange={(e)=>setData('password',e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-800 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
            />
          </div>

          
          {/* <!-- Submit Button --> */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Gumawa ng account
            </button>
          </div>
        </form>

        {/* <!-- Sign-in Link --> */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-300">Mayroon nang account?</p>
          <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Mag-sign in</a>
        </div>
      </div>
    </div>
                </div>
  )
}

export default Register