import React, { useState } from 'react';
import { authenticateUser } from '../data';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const isAuthenticated = await authenticateUser(username, password);
      if (isAuthenticated) {
        onLogin(username, password);
      } else {
        setError('Authentication failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      setError('An unexpected error occurred.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-3xl font-semibold text-center text-indigo-600">
          Login
        </h2>
        {error && (
          <div className="mb-4 text-red-500 text-center">{error}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-indigo-300"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-indigo-300"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:bg-indigo-700"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
