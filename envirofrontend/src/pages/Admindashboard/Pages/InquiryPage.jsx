import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Search, Filter, Trash2, Calendar, MapPin, Users, Phone, DollarSign,
  Eye, MoreVertical, AlertCircle, CheckCircle, Clock, XCircle, Plus,
  Download, RefreshCw, SlidersHorizontal, IndianRupee,
  Building,
  Package,
  Wrench,
  FileText,
  X
} from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast'; // Import react-hot-toast

const API_URL = import.meta.env.VITE_APP_SERVER_URL;

const AdminInquiry = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [inquiryToDelete, setInquiryToDelete] = useState(null);

  // Fetch inquiries from backend
  const fetchInquiries = async () => {
    try {
      const res = await axios.get(`${API_URL}/getInquiry`, { withCredentials: true });
      setInquiries(res.data);
    } catch (err) {
      console.log('Failed to fetch inquiries:', err);
      setInquiries([]);
      toast.error("Failed to fetch inquiries."); // Toast for fetching error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []); // Empty dependency array means this runs once on mount

  // Delete inquiry
  const handleDelete = async () => {
    if (!inquiryToDelete) return;

    try {
      await axios.delete(`${API_URL}/deleteInquiry/${inquiryToDelete}`, {
        withCredentials: true,
      });
      setInquiries(inquiries.filter(inquiry => inquiry._id !== inquiryToDelete));
      setShowDeleteModal(false);
      toast.success("Inquiry deleted successfully!"); // Toast for success
    } catch (err) {
      console.log('Failed to delete inquiry:', err);
      toast.error("Failed to delete inquiry."); // Toast for error
    }
  };

  // Update inquiry status
  const handleStatusChange = async (id, newStatus) => {
    // Optimistic UI update
    const originalInquiries = [...inquiries];
    setInquiries(currentInquiries =>
      currentInquiries.map(inq =>
        inq._id === id ? { ...inq, status: newStatus } : inq
      )
    );
    toast.loading("Updating status...", { id: `status-update-${id}` }); // Loading toast

    try {
      await axios.patch(`${API_URL}/updateInquiryStatus/${id}`, { status: newStatus }, { withCredentials: true });
      toast.success("Status updated successfully!", { id: `status-update-${id}` }); // Success toast
    } catch (err) {
      console.log('Failed to update status:', err);
      // Revert to original state on error
      setInquiries(originalInquiries);
      toast.error("Failed to update status.", { id: `status-update-${id}` }); // Error toast
    }
  };

  const getStatusConfig = (status) => {
    switch (status) {
      case 'Confirmed':
        return {
          color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          icon: CheckCircle,
          dot: 'bg-emerald-500'
        };
      case 'Pending':
        return {
          color: 'bg-amber-50 text-amber-700 border-amber-200',
          icon: Clock,
          dot: 'bg-amber-500'
        };
      case 'Rejected':
        return {
          color: 'bg-red-50 text-red-700 border-red-200',
          icon: XCircle,
          dot: 'bg-red-500'
        };
      case 'New':
        return {
          color: 'bg-blue-50 text-blue-700 border-blue-200',
          icon: AlertCircle,
          dot: 'bg-blue-500'
        };
      default:
        return {
          color: 'bg-gray-50 text-gray-700 border-gray-200',
          icon: AlertCircle,
          dot: 'bg-gray-500'
        };
    }
  };

  // Filter inquiries by search term and status
  const filteredInquiries = inquiries.filter(inquiry => {
    const matchesSearch = (
      (inquiry.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (inquiry.email || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (inquiry.eventType || '').toLowerCase().includes(searchTerm.toLowerCase()) || // Assuming eventType might be part of search
      (inquiry.description || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (inquiry.companyName || '').toLowerCase().includes(searchTerm.toLowerCase()) || // Added companyName to search
      (inquiry.product || '').toLowerCase().includes(searchTerm.toLowerCase()) || // Added product to search
      (inquiry.service || '').toLowerCase().includes(searchTerm.toLowerCase()) // Added service to search
    );

    const matchesStatus = statusFilter === 'All' || inquiry.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const statusCounts = inquiries.reduce((acc, inquiry) => {
    acc[inquiry.status] = (acc[inquiry.status] || 0) + 1;
    return acc;
  }, {});

  const LoadingCard = () => (
    <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 animate-pulse">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-xl"></div>
          <div>
            <div className="w-24 sm:w-32 h-4 bg-gray-200 rounded mb-2"></div>
            <div className="w-20 sm:w-24 h-3 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div className="w-16 sm:w-20 h-6 bg-gray-200 rounded-full"></div>
      </div>
      <div className="space-y-3">
        <div className="w-full h-3 bg-gray-200 rounded"></div>
        <div className="w-3/4 h-3 bg-gray-200 rounded"></div>
        <div className="w-1/2 h-3 bg-gray-200 rounded"></div>
      </div>
    </div>
  );

  // Delete Confirmation Modal
  const DeleteConfirmationModal = () => (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Confirm Deletion</h3>
          <button
            onClick={() => setShowDeleteModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>
        <p className="text-gray-600 mb-6">Are you sure you want to delete this inquiry? This action cannot be undone.</p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={() => setShowDeleteModal(false)}
            className="px-3 sm:px-4 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-3 sm:px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Toaster for notifications */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Delete Confirmation Modal */}
      {showDeleteModal && <DeleteConfirmationModal />}

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl sm:text-2xl font-bold text-gray-900">
              Inquiry Management
            </h1>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: 'Total', value: inquiries.length, color: 'bg-blue-500' },
            { label: 'New', value: statusCounts.New || 0, color: 'bg-blue-500' },
            { label: 'Pending', value: statusCounts.Pending || 0, color: 'bg-amber-500' },
            { label: 'Confirmed', value: statusCounts.Confirmed || 0, color: 'bg-emerald-500' },
          ].map((stat, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-100 p-3 sm:p-4 shadow-sm">
              <div className="flex items-center">
                <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${stat.color} mr-2 sm:mr-3`}></div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-lg sm:text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Search and Filter */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-gray-100 p-4 sm:p-6 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-3 sm:gap-4">
            <div className="flex-1 relative">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search inquiries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-2 sm:py-3 border border-gray-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-[#7F1D1D]/20 focus:border-[#7F1D1D] transition-all outline-none bg-white/50 text-sm sm:text-base"
              />
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-[#7F1D1D]/20 focus:border-[#7F1D1D] transition-all outline-none bg-white/50 text-sm sm:text-base"
              >
                <option value="All">All Status</option>
                <option value="New">New</option>
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* Inquiries List */}
        <div className="space-y-3 sm:space-y-4">
          {loading ? (
            <div className="grid gap-3 sm:gap-4">
              {[1, 2, 3].map(i => <LoadingCard key={i} />)}
            </div>
          ) : filteredInquiries.length === 0 ? (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-gray-100 p-6 sm:p-12 text-center shadow-sm">
              <AlertCircle size={40} className="mx-auto text-gray-400 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No inquiries found</h3>
              <p className="text-gray-600 text-sm sm:text-base">Try adjusting your search criteria or filters</p>
            </div>
          ) : (
            filteredInquiries.map((inquiry) => {
              const statusConfig = getStatusConfig(inquiry.status);
              const StatusIcon = statusConfig.icon;

              return (
                <div
                  key={inquiry._id}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-gray-100 p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1 mb-3 sm:mb-0">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 gap-3 sm:gap-0">
                        <div className="flex items-center">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br bg-blue-800 rounded-xl flex items-center justify-center text-white font-bold text-lg mr-3 sm:mr-4">
                            {inquiry.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{inquiry.name}</h3>
                            <p className="text-gray-600 text-sm">{inquiry.email}</p>
                          </div>
                        </div>
                        <div className={`flex items-center px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium border ${statusConfig.color}`}>
                          <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-1 sm:mr-2 ${statusConfig.dot}`}></div>
                          <StatusIcon size={12} className="mr-1" />
                          {inquiry.status || "New"}
                        </div>
                      </div>

                      {/* Details Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="flex items-center p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl">
                          <Building size={16} className="text-[#016630] mr-2 sm:mr-3" />
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Company name</p>
                            <p className="text-sm font-medium text-gray-900">{inquiry.companyName}</p>
                          </div>
                        </div>
                        <div className="flex items-center p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl">
                          <Phone size={16} className="text-[#016630] mr-2 sm:mr-3" />
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Phone</p>
                            <p className="text-sm font-medium text-gray-900">{inquiry.number}</p>
                          </div>
                        </div>
                        <div className="flex items-center p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl">
                          <Package size={16} className="text-[#016630] mr-2 sm:mr-3" />
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Product</p>
                            <p className="text-sm font-medium text-gray-900">{inquiry.product}</p>
                          </div>
                        </div>

                        <div className="flex items-center p-2 sm:p-3 bg-gray-50 rounded-lg sm:rounded-xl">
                          <Wrench size={16} className="text-[#016630] mr-2 sm:mr-3" />
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Service</p>
                            <p className="text-sm font-medium text-gray-900">{inquiry.service}</p>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-3 sm:mb-4">
                        <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 flex items-center text-sm sm:text-base">
                          <FileText size={14} className="mr-1 sm:mr-2 text-[#016630]" />
                          Description
                        </h4>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{inquiry.description}</p>
                      </div>

                      {/* Footer */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-gray-500 gap-1 sm:gap-0">
                        <span>
                          Submitted on {inquiry.createdAt ? new Date(inquiry.createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          }) : "N/A"}
                        </span>
                        <span>ID: {inquiry._id.slice(-6)}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-end sm:justify-start space-x-2 sm:space-x-3 mt-3 sm:mt-0 lg:ml-4 lg:pl-4">
                      <select
                        className="px-2 sm:px-3 py-1 sm:py-2 border border-gray-200 rounded-lg sm:rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-[#7F1D1D]/20 focus:border-[#7F1D1D] transition-all outline-none bg-white/50"
                        value={inquiry.status || "New"}
                        onChange={e => handleStatusChange(inquiry._id, e.target.value)}
                      >
                        <option value="New">New</option>
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                      <button
                        className="p-1.5 sm:p-2 text-red-600 hover:bg-red-50 rounded-lg sm:rounded-xl transition-colors"
                        onClick={() => {
                          setInquiryToDelete(inquiry._id);
                          setShowDeleteModal(true);
                        }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminInquiry;