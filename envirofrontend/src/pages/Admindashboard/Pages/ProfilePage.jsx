import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Edit, Save, Lock } from 'lucide-react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [passwords, setPasswords] = useState({
    current: '',
    new: ''
  });

  const [user, setUser] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    state: '',
    country: '',
    address: '',
    dateOfBirth: '',
    gender: '',
    admin_image: null,
    role: 'Admin'
  });

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Cleanup preview URL on unmount
  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  // Fetch admin profile
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = Cookies.get('adjwt');
      const response = await axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/adminProfile`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true
      });

      if (response.data.success) {
        setUser(response.data.data);
      }
    } catch (error) {
      toast.error('Failed to fetch profile');
    } finally {
      setLoading(false);
    }
  };

  // Handle profile update
  const handleSave = async () => {
    try {
      const token = Cookies.get('adjwt');
      const formData = new FormData();
      
      Object.keys(user).forEach(key => {
        if (user[key] && key !== 'admin_image') {
          formData.append(key, user[key]);
        }
      });

      if (selectedImage) {
        formData.append('admin_image', selectedImage);
      }

      const response = await axios.put(
        `${import.meta.env.VITE_APP_SERVER_URL}/update_profile`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          },
          withCredentials: true
        }
      );

      if (response.data.success) {
        toast.success('Profile updated successfully');
        setIsEditing(false);
        setSelectedImage(null);
        setImagePreview(null);
        fetchProfile();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update profile');
    }
  };

  // Handle password change
  const handlePasswordChange = async () => {
    try {
      const token = Cookies.get('adjwt');
      const response = await axios.put(
        `${import.meta.env.VITE_APP_SERVER_URL}/adminChange_Pass`,
        {
          pass: passwords.current,
          newpass: passwords.new
        },
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true
        }
      );

      if (response.data.success) {
        toast.success('Password updated successfully');
        setShowPasswordChange(false);
        setPasswords({ current: '', new: '' });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update password');
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="">
      <ToastContainer />
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
        <button 
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {isEditing ? <Save className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
          <span>{isEditing ? 'Save Changes' : 'Edit Profile'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                {(imagePreview || user.admin_image) ? (
                  <img 
                    src={imagePreview || `${import.meta.env.VITE_APP_SERVER_URL}/uploads/${user.admin_image}`}
                    alt={user.name}
                    className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-green-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {user.name?.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
                
                {isEditing && (
                  <label className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 rounded-full p-2 cursor-pointer shadow-lg transition-colors">
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    <Edit className="w-4 h-4 text-white" />
                  </label>
                )}
              </div>
              
              {selectedImage && isEditing && (
                <div className="mt-2 space-y-2">
                  <p className="text-sm text-gray-500">Selected: {selectedImage.name}</p>
                  <button
                    onClick={() => {
                      setSelectedImage(null);
                      setImagePreview(null);
                    }}
                    className="text-xs text-red-500 hover:text-red-600"
                  >
                    Remove selected image
                  </button>
                </div>
              )}

              <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
              <p className="text-gray-600 mb-4">{user.role}</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>{user.mobile}</span>
                </div>
                {user.city && (
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{user.city}, {user.state}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Admin Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => setUser({...user, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <input
                  type="tel"
                  value={user.mobile}
                  onChange={(e) => setUser({...user, mobile: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  value={user.city}
                  onChange={(e) => setUser({...user, city: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                <input
                  type="text"
                  value={user.state}
                  onChange={(e) => setUser({...user, state: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input
                  type="date"
                  value={user.dateOfBirth}
                  onChange={(e) => setUser({...user, dateOfBirth: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  readOnly={!isEditing}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select
                  value={user.gender}
                  onChange={(e) => setUser({...user, gender: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  disabled={!isEditing}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <textarea
                value={user.address}
                onChange={(e) => setUser({...user, address: e.target.value})}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                readOnly={!isEditing}
              />
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h3>
            <div className="space-y-4">
              <button 
                onClick={() => setShowPasswordChange(!showPasswordChange)}
                className="flex items-center space-x-3 w-full p-3 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Lock className="w-5 h-5 text-blue-600" />
                <div className="text-left">
                  <p className="font-medium text-gray-900">Change Password</p>
                  <p className="text-sm text-gray-500">Update your account password</p>
                </div>
              </button>

              {showPasswordChange && (
                <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                    <input
                      type="password"
                      value={passwords.current}
                      onChange={(e) => setPasswords({...passwords, current: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter current password"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                    <input
                      type="password"
                      value={passwords.new}
                      onChange={(e) => setPasswords({...passwords, new: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter new password"
                    />
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={handlePasswordChange}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Update Password
                    </button>
                    <button 
                      onClick={() => {
                        setShowPasswordChange(false);
                        setPasswords({ current: '', new: '' });
                      }}
                      className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;