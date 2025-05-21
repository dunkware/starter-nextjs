'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

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
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, always show an error
      setError('Invalid email or password. Please try again.');
      
      // If login is successful, you would redirect
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password }),
      // });
      // 
      // if (response.ok) {
      //   const { token } = await response.json();
      //   localStorage.setItem('token', token);
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
    <section className="relative lg:py-44 py-16 overflow-hidden min-h-[calc(100vh-80px)]">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://cdn.prod.website-files.com/664cfafd1b780dd90b9bc416/664cfafd1b780dd90b9bcd8a_hero-bg.png")',
          backgroundSize: '100% auto',
        }}
      />
      <div className="absolute inset-0 bg-[#0F172A] opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Early Access
              <span className="block text-2xl md:text-2xl mt-2 text-orange-400">
                Continuous Iteration
              </span>
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Dunkware is being built as a long-term, foundational AI service provider. 
              We're prioritizing discipline over speed, creating a strong foundation for
              rapid and responsible iteration. Your patience during this alpha phase is appreciated.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-all flex items-center gap-2">
                Request Access <ArrowRight className="h-4 w-4" />
              </button>
              <button className="px-6 py-3 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all">
                Learn More
              </button>
            </div>
          </div>

          {/* Right side login form */}
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm z-10 flex items-center justify-center">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#1E293B]/80 backdrop-blur-md p-8 rounded-xl w-full max-w-md border border-orange-500/30"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <div className="ml-4 text-white/70 text-sm">Dunkware Alpha Login</div>
                  </div>

                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-500/20 border border-red-500/30 text-white p-4 rounded-md mb-6"
                    >
                      {error}
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
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
                        className={`w-full bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-md text-center transition-colors flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isLoading ? 'Logging in...' : 'Login'} 
                        {!isLoading && <ArrowRight className="h-4 w-4" />}
                      </button>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <p className="text-sm text-blue-100">
                        Don't have an account?{' '}
                        <Link href="#" className="text-orange-400 hover:text-orange-500">
                          Request Alpha Access
                        </Link>
                      </p>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}