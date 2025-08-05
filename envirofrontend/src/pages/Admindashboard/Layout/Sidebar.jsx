import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  User, 
  MessageCircle, 
  Package, 
  Settings, 
  LogOut
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../../../public/mainlogo.png';

const Sidebar = ({ isOpen, onToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Sync active tab with current path
  useEffect(() => {
    const path = location.pathname;
    
    // Redirect /admin to /admin/dashboard
    if (path === '/admin') {
      navigate('/admin/dashboard');
      return;
    }

    // Set active tab based on current path
    if (path.includes('/admin/dashboard')) {
      setActiveTab('dashboard');
    } else if (path.includes('/admin/inquiries')) {
      setActiveTab('inquiries');
    } else if (path.includes('/admin/contacts')) {
      setActiveTab('contacts');
    } else if (path.includes('/admin/profile')) {
      setActiveTab('profile');
    }
  }, [location.pathname, navigate]);

  // Handle Logout
  const handleLogout = async () => {
    if (isLoggingOut) return;

    try {
      setIsLoggingOut(true);
      const token = Cookies.get('adjwt');
      const response = await axios.put(`${import.meta.env.VITE_APP_SERVER_URL}/adminSignOut`, {}, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true
      });

      if (response.data.success) {
        Cookies.remove('adjwt');
        delete axios.defaults.headers.common['Authorization'];
        
        toast.success('Logged out successfully');
        
        setTimeout(() => {
          navigate('/admin/login');
        }, 1500);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Logout failed');
      setIsLoggingOut(false);
    }
  };

  const menuItems = [ 
    { 
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      path: '/admin/dashboard'
    },
    { 
      id: 'inquiries',
      label: 'Inquiries',
      icon: MessageCircle,
      path: '/admin/inquiries'
    },
    { 
      id: 'contacts',
      label: 'Contacts Us',
      icon: Users,
      path: '/admin/contacts'
    },
    { 
      id: 'client',
      label: 'Client',
      icon: Users,
      path: '/admin/client'
    },
    { 
      id: 'profile',
      label: 'Profile',
      icon: User,
      path: '/admin/profile'
    }
  ];

  const handleTabChange = (tabId, path) => {
    setActiveTab(tabId);
    navigate(path);
    if (window.innerWidth < 1024) {
      onToggle();
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={1500} />
      
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden bg-black bg-opacity-50"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-white text-black shadow-lg
        transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Header */}
        <div className="flex items-center pl-15 border-b border-green-700">
          <img src={logo} alt="Logo" className="w-28 h-28 -mt-3 object-contain -mb-[16px]" />
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleTabChange(item.id, item.path)}
                    className={`
                      w-full flex items-center space-x-3 px-4 py-3 rounded-lg
                      transition-all duration-200 text-left
                      ${isActive 
                        ? 'bg-green-800 text-white' 
                        : 'text-black hover:bg-blue-500 hover:text-white'}
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer with Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-blue-700">
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className={`
              w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg 
              transition-all duration-200
              ${isLoggingOut 
                ? 'bg-gray-100 cursor-not-allowed' 
                : 'text-red-500 hover:text-white hover:bg-red-600'}
            `}
          >
            {isLoggingOut ? (
              <>
                <svg 
                  className="animate-spin h-5 w-5 text-gray-500" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24"
                >
                  <circle 
                    className="opacity-25" 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="4"
                  />
                  <path 
                    className="opacity-75" 
                    fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span className="font-medium text-gray-500">Logging out...</span>
              </>
            ) : (
              <>
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Logout</span>
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;