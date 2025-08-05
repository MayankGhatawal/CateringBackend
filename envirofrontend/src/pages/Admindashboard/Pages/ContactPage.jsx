import React, { useState, useEffect } from 'react';
import { Users, Search, Mail, Phone, AlertTriangle, Trash2, CheckCircle, AlertCircle, X } from 'lucide-react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteModal, setDeleteModal] = useState({ show: false, contactId: null, contactName: '' });
  const [updating, setUpdating] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Get status color helper
  const getStatusColor = (status) => {
    switch (status) {
      case 'New': return 'bg-blue-100 text-blue-800';
      case 'Contacted': return 'bg-yellow-100 text-yellow-800';
      case 'In-Progress': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Format date helper
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Fetch Contacts
  const fetchContacts = async () => {
    try {
      const token = Cookies.get('adjwt');
      setLoading(true);
      
      const response = await axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/getContectUs`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      });

      if (response.status === 200) {
        setContacts(response.data || []);
      } else {
        toast.error(response.data.message || 'Failed to fetch contacts');
      }
    } catch (error) {
      console.error('Fetch Error:', error);
      toast.error(error.response?.data?.message || 'Failed to fetch contacts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Update Contact Status
  const handleStatusUpdate = async (id, newStatus) => {
    try {
      setUpdating(id);
      const token = Cookies.get('adjwt');

      // Optimistic update
      setContacts(prevContacts => 
        prevContacts.map(contact => 
          contact._id === id ? { ...contact, status: newStatus } : contact
        )
      );

      const response = await axios.patch(
        `${import.meta.env.VITE_APP_SERVER_URL}/contectUs/${id}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`
          },
          withCredentials: true
        }
      );

      if (response.status !== 200) {
        throw new Error(response.data.message || 'Failed to update status');
      }

      toast.success('Status updated successfully');
    } catch (error) {
      // Revert on error
      setContacts(prevContacts => 
        prevContacts.map(contact => 
          contact._id === id ? { ...contact, status: contact.status } : contact
        )
      );
      toast.error(error.message || 'Failed to update status');
    } finally {
      setUpdating(null);
    }
  };

  // Delete Contact
  const handleDeleteContact = async () => {
    if (!deleteModal.contactId || isDeleting) return;

    try {
      setIsDeleting(true);
      const token = Cookies.get('adjwt');

      const response = await axios.delete(
        `${import.meta.env.VITE_APP_SERVER_URL}/deleteContectUs/${deleteModal.contactId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          },
          withCredentials: true
        }
      );

      if (response.status === 200) {
        setContacts(prevContacts => 
          prevContacts.filter(contact => contact._id !== deleteModal.contactId)
        );
        toast.success('Contact deleted successfully');
        setDeleteModal({ show: false, contactId: null, contactName: '' });
      } else {
        throw new Error(response.data.message || 'Failed to delete contact');
      }
    } catch (error) {
      toast.error(error.message || 'Failed to delete contact');
    } finally {
      setIsDeleting(false);
    }
  };

  // Filter contacts
  const filteredContacts = contacts.filter(contact => {
    const matchesFilter = filter === 'All' || contact.status === filter;
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      contact.name?.toLowerCase().includes(searchLower) ||
      contact.email?.toLowerCase().includes(searchLower) ||
      contact.message?.toLowerCase().includes(searchLower);
    return matchesFilter && matchesSearch;
  });

  // Delete Modal Component
  const DeleteModal = () => (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-[100]"
        onClick={() => !isDeleting && setDeleteModal({ show: false, contactId: null, contactName: '' })}
      />
      <div className="fixed inset-0 z-[101] overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center p-4">
          <div className="relative bg-white rounded-xl shadow-xl max-w-md w-full">
            <div className="absolute top-4 right-4">
              <button
                onClick={() => !isDeleting && setDeleteModal({ show: false, contactId: null, contactName: '' })}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                disabled={isDeleting}
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">Delete Contact</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Are you sure you want to delete contact "{deleteModal.contactName}"? 
                    This action cannot be undone.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <button
                  type="button"
                  disabled={isDeleting}
                  onClick={handleDeleteContact}
                  className="flex-1 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg
                    hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
                    disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isDeleting ? (
                    <span className="flex items-center justify-center space-x-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Deleting...</span>
                    </span>
                  ) : (
                    'Delete Contact'
                  )}
                </button>
                <button
                  type="button"
                  disabled={isDeleting}
                  onClick={() => setDeleteModal({ show: false, contactId: null, contactName: '' })}
                  className="flex-1 px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-lg
                    border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 
                    focus:ring-gray-500 focus:ring-offset-2 transition-colors
                    disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900">Contact Requests</h1>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="All">All Status</option>
              <option value="New">New</option>
              <option value="In-Progress">In Progress</option>
              <option value="Contacted">Contacted</option>
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl shadow p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Contacts</p>
                <p className="text-2xl font-bold text-gray-900">{contacts.length}</p>
              </div>
              <Users className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">New Requests</p>
                <p className="text-2xl font-bold text-blue-600">
                  {contacts.filter(c => c.status === 'New').length}
                </p>
              </div>
              <AlertCircle className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-green-600">
                  {contacts.filter(c => c.status === 'In-Progress').length}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Contacted</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {contacts.filter(c => c.status === 'Contacted').length}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
        </div>

        {/* Contacts Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : filteredContacts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow">
            <p className="text-gray-500">No contacts found matching your criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredContacts.map(contact => (
              <div key={contact._id} className="bg-white rounded-xl shadow p-4 sm:p-6 flex flex-col justify-between h-full min-h-[300px]">

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{contact.name}</h3>
                    <p className="text-sm text-gray-500">{formatDate(contact.createdAt)}</p>
                  </div>
                  <select
                    value={contact.status}
                    onChange={(e) => handleStatusUpdate(contact._id, e.target.value)}
                    disabled={updating === contact._id}
                    className={`${getStatusColor(contact.status)} px-3 py-1 rounded-full text-sm font-medium
                      ${updating === contact._id ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                      w-full sm:w-auto
                    `}
                  >
                    <option value="New">New</option>
                    <option value="In-Progress">In Progress</option>
                    <option value="Contacted">Contacted</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm truncate">{contact.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{contact.number}</span>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-900 line-clamp-3">{contact.message}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => setDeleteModal({ 
                      show: true, 
                      contactId: contact._id,
                      contactName: contact.name 
                    })}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-red-600 
                      border border-red-600 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Delete Contact</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Delete Modal */}
        {deleteModal.show && <DeleteModal />}

        {/* Toast Container */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
};

export default ContactPage;