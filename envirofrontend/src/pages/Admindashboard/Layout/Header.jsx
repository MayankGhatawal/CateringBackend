import React, { useState, useEffect } from 'react';
import { Menu, LogOut, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';

const Header = ({ onMenuToggle }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [adminData, setAdminData] = useState(null);
  const navigate = useNavigate();

  // Helper function to get initials
  const getInitials = (name) => {
    return name ? name.split(' ').map(n => n[0]).join('').toUpperCase() : 'A';
  };

  // Fetch admin profile data
  useEffect(() => {
    const fetchAdminProfile = async () => {
      try {
        const adjwt = Cookies.get('adjwt');
        const response = await axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/adminProfile`, {
          headers: {
            Authorization: `Bearer ${adjwt}`
          },
          withCredentials: true
        });

        if (response.data.success) {
          setAdminData(response.data.data);
        }
      } catch (error) {
        console.error('Failed to fetch admin profile:', error);
        if (error.response?.status === 401) {
          handleLogout();
        }
      }
    };

    fetchAdminProfile();
  }, []);

  const handleLogout = () => {
    // Remove token from cookies
    Cookies.remove('adjwt');
    
    // Remove auth header
    delete axios.defaults.headers.common['Authorization'];
    
    toast.success('Successfully logged out!');
    setShowProfileMenu(false);

    setTimeout(() => {
      navigate('/admin/login');
    }, 1500);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-200 px-6 py-4">
      <ToastContainer position="top-right" autoClose={1500} />
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
                {adminData?.admin_image ? (
                  <img 
                    src={`${import.meta.env.VITE_APP_SERVER_URL}/uploads/${adminData.admin_image}`}
                    alt={adminData.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.classList.add('bg-blue-500');
                      e.target.parentElement.innerHTML = `<span class="text-white font-medium text-sm">${getInitials(adminData.name)}</span>`;
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white font-medium text-sm">
                      {getInitials(adminData?.name)}
                    </span>
                  </div>
                )}
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-gray-900">{adminData?.name || 'Admin'}</p>
                <p className="text-xs text-gray-500">{adminData?.role || 'Administrator'}</p>
              </div>
            </button>

            {/* Dropdown */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                      {adminData?.admin_image ? (
                        <img 
                          src={`${import.meta.env.VITE_APP_SERVER_URL}/uploads/${adminData.admin_image}`}
                          alt={adminData.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.classList.add('bg-gradient-to-br', 'from-blue-500', 'to-green-500');
                            e.target.parentElement.innerHTML = `<span class="text-white font-medium">${getInitials(adminData.name)}</span>`;
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                          <span className="text-white font-medium">
                            {getInitials(adminData?.name)}
                          </span>
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{adminData?.name}</p>
                  
                      <p className="text-xs text-gray-400">{adminData?.role}</p>
                    </div>
                  </div>
                </div>

                <div className="py-2">
                  <Link
                    to="/admin/profile"
                    className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    <User className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-700">View Profile</span>
                  </Link>
                </div>

                <div className="pb-3">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors text-red-600"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="text-sm">Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {(showProfileMenu || showNotifications) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setShowProfileMenu(false);
            setShowNotifications(false);
          }}
        />
      )}
    </header>
  );
};

export default Header;