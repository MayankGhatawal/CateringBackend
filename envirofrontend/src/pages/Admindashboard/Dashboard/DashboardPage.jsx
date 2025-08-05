import React, { useEffect } from 'react';
import { 
  Users, 
  Package, 
  MessageCircle, 
  Settings,
  Clock,
  CheckCircle,
  AlertCircle,
  X
} from 'lucide-react';
import { Link } from "react-router-dom";
import axios from 'axios';

// Toast component
const Toast = ({ message, type, onClose }) => {
  const bgColor = {
    success: 'bg-green-100 border-green-200',
    error: 'bg-red-100 border-red-200',
    warning: 'bg-yellow-100 border-yellow-200',
    info: 'bg-blue-100 border-blue-200'
  }[type];

  const icon = {
    success: <CheckCircle className="w-5 h-5 text-green-600" />,
    error: <AlertCircle className="w-5 h-5 text-red-600" />,
    warning: <AlertCircle className="w-5 h-5 text-yellow-600" />,
    info: <MessageCircle className="w-5 h-5 text-blue-600" />
  }[type];

  return (
    <div className={`fixed top-4 right-4 z-50 border rounded-lg p-4 shadow-lg flex items-start ${bgColor} max-w-md`}>
      <div className="mr-3 mt-0.5">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-800">{message}</p>
      </div>
      <button 
        onClick={onClose}
        className="ml-4 text-gray-500 hover:text-gray-700"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

// Toast context and provider
const ToastContext = React.createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = React.useState([]);

  const addToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts([...toasts, { id, message, type }]);
    
    // Auto-remove toast after 5 seconds
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  };

  const removeToast = (id) => {
    setToasts(toasts.filter(toast => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed top-0 right-0 z-50 p-4 space-y-2">
        {toasts.map(toast => (
          <Toast 
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return React.useContext(ToastContext);
};

const DashboardPage = () => {
  const { addToast } = useToast();
  const [recentInquiries, setRecentInquiries] = React.useState([]);
  const [recentcontects, setRecentcontects] = React.useState([]);
  const [adminName, setAdminName] = React.useState('');

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/getInquiry`,
          { withCredentials: true }
        );
        
        setRecentInquiries(response.data);
      } catch (error) {
        console.error("Error fetching inquiries:", error);
      }
    }
    fetchInquiries();
  }, [])

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/getContectUs`,
          { withCredentials: true }
        );
        setRecentcontects(response.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    }
    fetchContacts();
  }, [])

  useEffect(() => {
    const fetchAdminName = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/adminProfile`, { withCredentials: true });
        if (response.data && response.data.success && response.data.data && response.data.data.name) {
          setAdminName(response.data.data.name);
        }
      } catch (error) {
        console.error("Error fetching admin name:", error);
      }
    };
    fetchAdminName();
  }, []);

  const stats = [
    {
      title: 'Total Inquiries',
      value: recentInquiries.length,
      changeType: 'positive',
      icon: MessageCircle,
      color: 'green'
    },
    {
      title: 'Total Contacts',
      value: recentcontects.length,
      changeType: 'positive',
      icon: Users,
      color: 'orange'
    }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'product':
        return <Package className="w-4 h-4 text-black" />;
      case 'inquiry':
        return <MessageCircle className="w-4 h-4 text-black" />;
      case 'service':
        return <Settings className="w-4 h-4 text-black" />;
      case 'contact':
        return <Users className="w-4 h-4 text-black" />;
      default:
        return <Clock className="w-4 h-4 text-black" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'success':
        return 'bg-green-100 text-black';
      case 'pending':
        return 'bg-yellow-100 text-black';
      case 'warning':
        return 'bg-red-100 text-black';
      default:
        return 'bg-gray-100 text-black';
    }
  };

  const getInquiryStatusColor = (status) => {
    switch (status) {
      case 'New':
        return 'bg-blue-100 text-black';
      case 'In Progress':
        return 'bg-purple-100 text-black';
      case 'Pending':
        return 'bg-yellow-100 text-black';
      case 'Completed':
        return 'bg-green-100 text-black';
      default:
        return 'bg-gray-100 text-black';
    }
  };

  const handleViewInquiries = () => {
    addToast('Navigating to inquiries page', 'info');
  };

  const handleAddContact = () => {
    addToast('Navigating to add contact page', 'info');
  };

  return (
    <div className="space-y-4">
      {/* Welcome Section */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-2 text-black">Welcome back, {adminName || 'Alex'}!</h1>
        <p className="text-gray-600">Here's what's happening with your dashboard today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-black mt-2">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <span className={`text-sm font-medium ${
                      stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                <div className={`w-16 h-16 ${stat.color === 'green' ? 'bg-green-100' : 'bg-orange-100'} rounded-xl flex items-center justify-center`}>
                  <Icon className={`w-8 h-8 ${stat.color === 'green' ? 'text-green-600' : 'text-orange-600'}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Inquiries and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Inquiries */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-black mb-4">Recent Inquiries</h3>
          <div className="space-y-4">
            {recentInquiries.slice(0, 4).map((inquiry) => (

              <a href='/admin/inquiries'>
              <div key={inquiry.id} className="flex items-start space-x-4 p-3 border-b border-gray-100 last:border-0">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-black" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-black truncate">{inquiry.name}</p>
                  <p className="text-sm text-gray-600 truncate">{inquiry.service}</p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-gray-500">{inquiry.email}</p>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getInquiryStatusColor(inquiry.status)}`}>
                      {inquiry.status}
                    </span>
                  </div>
                </div>
              </div>
              </a>
            ))}
          </div>
          <a href="/admin/inquiries">
            <button 
              className="w-full mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium"
              onClick={() => addToast('Viewing all inquiries', 'info')}
            >
              View all inquiries
            </button>
          </a>
        </div>

        {/* Recent Activity */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-black mb-4">Recent Contact</h3>
          <div className="space-y-4">
         {recentcontects.slice(0, 3).map((contact) => (

             <a href='/admin/contacts'>
  <div
    key={contact.id}
    className="flex items-start gap-4 p-4 border-b border-gray-200 last:border-none"
  >
    {/* Icon based on contact type */}
    {getActivityIcon(contact.type)}

    <div className="flex-1 space-y-1">
      {/* Name */}
      <p className="text-base font-semibold text-gray-900">{contact.name}</p>

      {/* Number */}
      <p className="text-sm text-gray-700"> {contact.email}</p>

      {/* Email */}
      {/* <p className="text-sm text-gray-500"> {contact.subject}</p> */}

      {/* Message Preview - First 5 words */}
      <p className="text-sm text-gray-600">
         {contact.message?.split(" ").slice(0, 5).join(" ")}...
      </p>

      {/* Status Badge */}
      <span
        className={`inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(
          contact.status
        )}`}
      >
        {contact.status}
      </span>
    </div>
  </div>
  </a>
))}

          </div>
          <a href="/admin/contacts">
            <button 
              className="w-full mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium"
              onClick={() => addToast('Viewing all contacts', 'info')}
            >
              View all Contact
            </button>
          </a>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
  <h3 className="text-lg font-semibold text-black mb-4">Quick Actions</h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <a href="/admin/inquiries" className="w-full">
      <button
        onClick={handleViewInquiries}
        className="w-full flex flex-col items-center justify-center p-5 bg-gray-50 rounded-xl border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition duration-200 shadow-sm"
      >
        <MessageCircle className="w-7 h-7 text-blue-600 mb-2" />
        <span className="text-sm font-medium text-gray-800">View Inquiries</span>
      </button>
    </a>

    <a href="/admin/contacts" className="w-full">
      <button
        onClick={handleAddContact}
        className="w-full flex flex-col items-center justify-center p-5 bg-gray-50 rounded-xl border border-gray-200 hover:bg-green-50 hover:border-green-200 transition duration-200 shadow-sm"
      >
        <Users className="w-7 h-7 text-green-600 mb-2" />
        <span className="text-sm font-medium text-gray-800">View Contact</span>
      </button>
    </a>
  </div>
</div>

    </div>
  );
};

export default function DashboardWithToast() {
  return (
    <ToastProvider>
      <DashboardPage />
    </ToastProvider>
  );
};
