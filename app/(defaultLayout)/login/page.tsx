'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate API call for authentication
      // In a real app, this would be a fetch to your auth endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, always show an error
      // In a real app, you would check the response and redirect on success
      setError('Invalid email or password. Please try again.');
      
      // If login is successful, you would get a JWT token and redirect
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password }),
      // });
      // 
      // if (response.ok) {
      //   const { token } = await response.json();
      //   // Store token in localStorage or cookies
      //   localStorage.setItem('token', token);
      //   // Redirect to dashboard or home page
      //   router.push('/dashboard');
      // } else {
      //   const data = await response.json();
      //   setError(data.message || 'Login failed. Please try again.');
      // }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden flex flex-col items-center justify-center py-16">
      {/* Background image with blue overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://cdn.prod.website-files.com/664cfafd1b780dd90b9bc416/664cfafd1b780dd90b9bcd8a_hero-bg.png")',
          backgroundSize: 'cover',
        }}
      />
      <div className="absolute inset-0 bg-[#0F172A] opacity-40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h1 className="text-5xl  font-bold mb-3 text-orange-500">
             
             Early Access

            </h1>
            <div className="text-lg text-white/80 mb-8 space-y-4">
            
              
              <p className="text-xl">
                Dunkware is being built as a long-term, foundational AI service provider. While the pressure to ship fast is real, we're choosing discipline over speed. The architectural seeds we plant today will determine the long-term success of an effort like this.
              </p>
              
              <p className="text-xl">
                We've battle-tested our approach to scalability and modular source code—this Early Access Alpha is both a milestone and a launchpad. It gives us a strong foundation to iterate quickly and responsibly. Please be patient during this phase; development is ongoing, and we're committed to building something that lasts.
              </p>
            </div>
          </div>

          {/* Login Form */}
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 bg-[#1E293B]/80 backdrop-blur-md p-8 rounded-lg shadow-xl w-full max-w-md mx-auto border border-orange-500/30"
            >
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/20 border border-red-500/30 text-white p-4 rounded-md mb-6"
                >
                  {error}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0F172A]/70 border border-orange-500/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-blue-100 mb-2">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0F172A]/70 border border-orange-500/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-md text-center transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isLoading ? 'Logging in...' : 'Login'}
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-blue-100">
                  Don't have an account?{' '}
                  <Link href="#" className="text-orange-400 hover:text-orange-500">
                    Request Alpha Access
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}