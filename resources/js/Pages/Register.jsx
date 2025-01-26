import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

function Register() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: '', 
  });

  const [passwordError, setPasswordError] = useState('');

  const submit = (e) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      setPasswordError('Di tugma ang password');
      return; 
    }

    setPasswordError(''); 

    post('/register-user');
  };

  return (
    <div className="flex min-h-screen bg-gray-900 items-center justify-center">
      <div className="w-full max-w-sm bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-extrabold text-white text-center">Register User</h1>

        {/* Registration Form */}
        <form className="space-y-4" onSubmit={submit}>
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">Username</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              onChange={(e) => setData('name', e.target.value)}
              className="block px-3 py-2 mt-1 w-full text-sm rounded-md border border-gray-300 shadow-sm focus:ring-neutral-500 focus:border-neutral-500"
              value={data.name}
              placeholder="Enter your username"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-2">{'May gumagamit na ng username na ito. Pumili ng iba.'}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              onChange={(e) => setData('email', e.target.value)}
              className="block px-3 py-2 mt-1 w-full text-sm rounded-md border border-gray-300 shadow-sm focus:ring-neutral-500 focus:border-neutral-500"
              value={data.email}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{'May gumagamit na ng email na ito. Sa halip, mag-log in ka na lang.'}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              onChange={(e) => setData('password', e.target.value)}
              className="block px-3 py-2 mt-1 w-full text-sm rounded-md border border-gray-300 shadow-sm focus:ring-neutral-500 focus:border-neutral-500"
              value={data.password}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-2">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password Input */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              required
              onChange={(e) => setData('confirmPassword', e.target.value)}
              className="block px-3 py-2 mt-1 w-full text-sm rounded-md border border-gray-300 shadow-sm focus:ring-neutral-500 focus:border-neutral-500"
              value={data.confirmPassword}
              placeholder="Confirm your password"
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-2">{passwordError}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Mag-register
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="my-6 border-t border-gray-600"></div>

        {/* Sign-in Link */}
        <div className="text-center">
          <p className="text-sm text-gray-300">Mayroon nang account?</p>
          <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Mag-login</a>
        </div>
      </div>
    </div>
  );
}

export default Register;
