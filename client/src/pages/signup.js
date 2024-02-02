import React, { useState } from 'react';
import '../styles/output.css';
import Nav from '../components/landingnav';
import CheckMark from '../images/checkmark-icon-512x426-8re0u9li.png';
import Logo from '../images/TREK AI LOGO.svg';

function Signup() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    setShowModal(true); // Shows the success modal
  };
  return (
    <div>
      <Nav/>
        <div className="flex flex-col items-center justify-center min-h-screen bg-white-100">
          <div className="flex items-center justify-center mb-8"> {/* Adjust 'mb-8' for spacing between logo and form */}
              <img src={Logo} alt="Logo" className="max-w-xs max-h-xs object-contain" /> {/* 'object-contain' to maintain aspect ratio without cropping */}
          </div>
          <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg w-full md:w-3/4 lg:w-2/4 mx-auto">
              <h3 className="text-2xl font-bold text-center">Create an account and join our waitlist</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="mt-4">
                      <div>
                          <label className="block" htmlFor="email">Email</label>
                          <input type="text" placeholder="Email"
                              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600"
                          />
                      </div>
                      <div className="mt-4">
                          <label className="block">Password</label>
                          <input type="password" placeholder="Password"
                              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600"
                          />
                      </div>
                      <div className="mt-4">
                          <label className="block">Confirm Password</label>
                          <input type="password" placeholder="Password"
                              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600"
                          />
                      </div>
                      <div className="flex items-baseline justify-between">
                          <button className="px-6 py-2 mt-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-900">Sign Up</button>
                      </div>
                  </div>
              </form>
          </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <img src={CheckMark} alt="" className="h-6 w-6 object-cover"/>
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Success!</h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  Your account has been created successfully.
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-700 focus:outline-none">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Signup
