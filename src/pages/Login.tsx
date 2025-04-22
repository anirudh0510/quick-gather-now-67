import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { StarsCanvas } from '@/components/ui/StarBackground';
import Navbar from '@/components/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login
    try {
      // Simple validation
      if (email === 'demo@example.com' && password === 'password') {
        toast({
          title: "Login Successful",
          description: "Welcome back! You have been logged in.",
        });
        navigate('/profile');
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid credentials. Try demo@example.com/password",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Login Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider: 'google' | 'github') => {
    setSocialLoading(provider);
    
    // Simulate social login
    setTimeout(() => {
      toast({
        title: "Demo Mode",
        description: `Social login with ${provider} is not available in demo mode.`,
      });
      setSocialLoading(null);
    }, 1000);
  };

  const navigateToSignUp = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/signup');
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <StarsCanvas />
        
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-violet-600/30 rounded-full filter blur-3xl opacity-40 animate-float" />
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-indigo-600/20 rounded-full filter blur-3xl opacity-40 animate-pulse-slow" />
      </div>

      <div className="absolute inset-0 -z-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-violet-500/20 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-indigo-500/20 rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-24 h-24 border border-violet-500/30 rounded-full" />
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]" />
      </div>

        <motion.div 
          className="max-w-md w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-600">
              Welcome Back
            </h1>
            <p className="text-gray-400">Sign in to continue your journey through India</p>
          </div>

          <motion.div 
            className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-violet-400 w-5 h-5" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-800/50 backdrop-blur-sm text-white pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 border border-violet-500/30 transition-all duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
                  Password
                </label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-violet-400 w-5 h-5" />
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-gray-800/50 backdrop-blur-sm text-white pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 border border-violet-500/30 transition-all duration-300"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center justify-between"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-violet-500 focus:ring-violet-500"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-400">
                    Remember me
                  </label>
                </div>
                <button type="button" className="text-sm text-violet-400 hover:text-violet-300 transition-colors duration-300">
                  Forgot password?
                </button>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden group shadow-lg shadow-violet-900/30"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </motion.button>
            </form>

            <motion.div 
              className="mt-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
            >
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700/50" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 backdrop-blur-md bg-gray-900/50 text-gray-400">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <motion.button 
                  className="flex items-center justify-center gap-2 px-4 py-3 border border-violet-500/30 rounded-lg bg-gray-800/30 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleSocialLogin('google')}
                  disabled={!!socialLoading}
                >
                  {socialLoading === 'google' ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Chrome className="w-5 h-5 text-white" />
                      <span className="text-sm font-medium text-gray-300">Google</span>
                    </>
                  )}
                </motion.button>
                <motion.button 
                  className="flex items-center justify-center gap-2 px-4 py-3 border border-violet-500/30 rounded-lg bg-gray-800/30 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleSocialLogin('github')}
                  disabled={!!socialLoading}
                >
                  {socialLoading === 'github' ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Github className="w-5 h-5 text-white" />
                      <span className="text-sm font-medium text-gray-300">GitHub</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          <motion.p 
            className="mt-8 text-center text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Don't have an account?{' '}
            <motion.button
              onClick={navigateToSignUp}
              className="relative text-violet-400 font-medium inline-block hover:text-violet-300 transition-colors duration:300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up
            </motion.button>
          </motion.p>
        </motion.div>
      </div>
    </>
  );
};

export default Login;
