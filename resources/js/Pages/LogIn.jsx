import React from 'react';
import { useForm } from '@inertiajs/react';

function LogIn() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  });

  // Handle form submission
  const submit = (e) => {
    e.preventDefault();
    post('/login-user');
  };

  return (
    <div className="flex min-h-screen bg-gray-900 items-center justify-center">
      <div className="w-full max-w-sm bg-gray-800 p-8 rounded-lg shadow-lg">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-white">Sali Na!</h2>
          <p className="mt-2 text-md text-gray-300">Mag-sign in para maglaro🐣</p>
        </div>

        {/* Sign-in Form */}
        <form className="space-y-6" onSubmit={submit}>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              onChange={(e) => setData('email', e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-800 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              onChange={(e) => setData('password', e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-800 px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={processing}
            >
              {processing ? 'Naglo-login...' : 'Mag-sign in'}
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="my-6 border-t border-gray-600"></div>

        {/* Sign-up Section */}
        <div className="text-center">
          <p className="text-sm text-gray-300">Wala pang account?</p>
          <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">Gumawa ng account</a>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
