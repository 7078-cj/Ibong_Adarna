import React from 'react'
import {useForm} from '@inertiajs/react'

function LogIn() {

  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  });

  // Handle form submission
  const submit = (e) => {
      e.preventDefault();

      // Post the form data to a Laravel route
      post('/login-user');
  };



  return (
    <div class="flex min-h-screen bg-gray-900 items-center justify-center">
      <div class="w-full max-w-sm bg-gray-800 p-8 rounded-lg shadow-lg">
        {/* <!-- Header Section --> */}
        <div class="text-center mb-6">
          <h2 class="text-3xl font-extrabold text-white">Join Us</h2>
          <p class="mt-2 text-sm text-gray-300">Sign in to start playing!</p>
        </div>

        {/* <!-- Sign-in Form --> */}
        <form class="space-y-6"  method="POST" onSubmit={submit}>
          {/* <!-- Email Input --> */}
          <div>
            <label for="email" class="block text-sm font-medium text-gray-300">Email </label>
            <input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              required
              onChange={(e)=>setData('email',e.target.value)}
              class="mt-1 block w-full rounded-md border border-gray-300 bg-gray-800 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* <!-- Password Input --> */}
          <div>
            <label for="password" class="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              onChange={(e)=>setData('password',e.target.value)}
              class="mt-1 block w-full rounded-md border border-gray-300 bg-gray-800 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

        

          {/* <!-- Submit Button --> */}
          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>

        

        {/* <!-- Divider --> */}
        <div class="my-6 border-t border-gray-600"></div>

        {/* <!-- Sign-up Section (Optional) --> */}
        <div class="text-center">
          <p class="text-sm text-gray-300">Don't have an account?</p>
          <a href="/register" class="font-medium text-indigo-600 hover:text-indigo-500">Create one</a>
        </div>
      </div>
    </div>

  )
}

export default LogIn