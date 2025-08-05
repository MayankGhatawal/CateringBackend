import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Shield } from 'lucide-react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../../public/images/mainlogo.png';

function Adminlogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [currentView, setCurrentView] = useState('login');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');


  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/adminLogin`, {
        email: email,
        pass: password
      });

      if (response.data.success) {
        // Set cookie with token
        Cookies.set('adjwt', response.data.token, { expires: 1 }); // Expires in 1 day
        
        // Set axios default header
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        
        toast.success('Login successful!');
        navigate('/admin/dashboard');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Invalid credentials');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Forgot Password - Send OTP
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/adminSend_otp`, {
        email: forgotEmail
      });

      if (response.data.success) {
        toast.success('OTP sent successfully to your email');
        setCurrentView('otp');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to send OTP');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle OTP Verification
  const handleOtpVerification = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/adminVerify`, {
        email: forgotEmail,
        otp: otp
      });

      if (response.data.success) {
        toast.success('OTP verified successfully');
        setCurrentView('resetPassword');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Invalid OTP');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Password Reset
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/adminChangePass`, {
        email: forgotEmail,
        newpass: newPassword
      });

      if (response.data.success) {
        toast.success('Password changed successfully');
        setCurrentView('login');
        setForgotEmail('');
        setNewPassword('');
        setOtp('');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to change password');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
      />
      
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <div className="text-center mb-6">
          <img src={logo} alt="Varsha Admin Panel" className="h-28 w-28 -m-10 mx-auto object-contain" />
        </div>

        {/* Login Form */}
        {currentView === 'login' && (
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                  className="mr-2"
                  disabled={isSubmitting}
                />
                Show Password
              </label>
              <button
                type="button"
                onClick={() => setCurrentView('forgot')}
                className="text-blue-600 hover:underline"
                disabled={isSubmitting}
              >
                Forgot Password?
              </button>
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Logging in...
                </>
              ) : (
                'Login'
              )}
            </button>
          </form>
        )}

        {/* Forgot Password Form */}
        {currentView === 'forgot' && (
          <form onSubmit={handleForgotPassword} className="space-y-6">
            <h2 className="text-xl font-semibold text-center">Forgot Password</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  className="w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setCurrentView('login')}
                className="flex-1 bg-gray-200 py-3 rounded-lg disabled:bg-gray-100"
                disabled={isSubmitting}
              >
                Back
              </button>
              <button 
                type="submit" 
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg disabled:bg-blue-300 flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send OTP'
                )}
              </button>
            </div>
          </form>
        )}

{/* OTP Verification Form */}
{currentView === 'otp' && (
  <form onSubmit={handleOtpVerification} className="space-y-6">
    <h2 className="text-xl font-semibold text-center">Enter OTP</h2>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">OTP</label>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        placeholder="Enter the OTP"
        required
        disabled={isSubmitting}
      />
    </div>

    <div className="flex gap-3">
      <button
        type="button"
        onClick={() => setCurrentView('forgot')}
        className="flex-1 bg-gray-200 py-3 rounded-lg disabled:bg-gray-100"
        disabled={isSubmitting}
      >
        Back
      </button>
      <button 
        type="submit" 
        className="flex-1 bg-blue-600 text-white py-3 rounded-lg disabled:bg-blue-300 flex items-center justify-center"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Verifying...' : 'Verify OTP'}
      </button>
    </div>
  </form>
)}

{/* Password Reset Form */}
{currentView === 'resetPassword' && (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      if (newPassword !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }
      handlePasswordReset(e);
    }}
    className="space-y-6"
  >
    <h2 className="text-xl font-semibold text-center">Reset Password</h2>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        placeholder="Enter new password"
        required
        disabled={isSubmitting}
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        placeholder="Confirm your password"
        required
        disabled={isSubmitting}
      />
    </div>

    <div className="flex gap-3">
      <button
        type="button"
        onClick={() => setCurrentView('login')}
        className="flex-1 bg-gray-200 py-3 rounded-lg disabled:bg-gray-100"
        disabled={isSubmitting}
      >
        Cancel
      </button>
      <button 
        type="submit" 
        className="flex-1 bg-blue-600 text-white py-3 rounded-lg disabled:bg-blue-300 flex items-center justify-center"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Saving...' : 'Change Password'}
      </button>
    </div>
  </form>
)}

       </div>
    </div>
  );
}

export default Adminlogin;