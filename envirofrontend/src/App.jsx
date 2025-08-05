import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Layouts
import { Navigation } from "./components/navigation"
import { Footer } from "./components/footer"
import { BackToTop } from "./components/back-to-top"
import { StickyQuoteButton } from "./components/sticky-quote-button"
import ProtectedRoute from "./components/ProtectedRoute"
import Layout from "./components/Layout"
import WaterTreatmentLayout from "./components/WaterTreatmentLayout"
import Sidebar from "./pages/Admindashboard/Layout/Sidebar"
import Header from "./pages/Admindashboard/Layout/Header"

// Public Pages
import Home from "./pages/page"
import About from "./pages/about/page"
import Contact from "./pages/contact/page"
import Industries from "./pages/industries/page"
import Technology from "./pages/technology/page"
import ClientPage from "./pages/ClientPage"

// Water Treatment Pages
import Watertreatment from "../src/pages/servicewatertreatment/watertreatment"
import DemineralizationPlant from "../src/pages/servicewatertreatment/Demineralization-Plant"
import RainWaterHarvesting from "../src/pages/servicewatertreatment/Rain-Water-Harvesting"
import ReverseOsmosis from "../src/pages/servicewatertreatment/Reverse-Osmosis"
import SoftenerPlant from "../src/pages/servicewatertreatment/Softener-Plant"
import UltraFiltration from "../src/pages/servicewatertreatment/Ultra-Filtration"

// New Service Pages
import AIRSCRUBBER from "./pages/serviceAIR-SCRUBBER/AIRSCRUBBER "
import OPERATIONMAINTENANCE from "./pages/serviceOPERATION-&-MAINTENANCE/OPERATION&MAINTENANCE"
import REPAIRMAINTENANCE from "./pages/serviceREPAIR-&-MAINTENANCE/REPAIR&MAINTENANCE"

// Wastewater Pages
import Wastewatertreatment from "../src/pages/serviceWASTEWATER/wastewatertreatment"
import STPPage from "../src/pages/serviceWASTEWATER/STPPage"
import ETPPage from "../src/pages/serviceWASTEWATER/ETPPage"
import CETPPage from "../src/pages/serviceWASTEWATER/CETPPage"
import ZLDPage from "../src/pages/serviceWASTEWATER/ZLDPage"

// Solid Waste Treatment Pages
import SolidWaste from "../src/pages/serviceSOLID-WASTE-TREATMENT/SolidWaste"
import OrganicWasteComposter from "../src/pages/serviceSOLID-WASTE-TREATMENT/OrganicWasteComposter"
import GardenWasteShredder from "../src/pages/serviceSOLID-WASTE-TREATMENT/GardenWasteShredder"

// Admin Pages
import Adminlogin from "./pages/Admindashboard/Loginadmin/adminlogin"
import DashboardPage from "./pages/Admindashboard/Dashboard/DashboardPage"
// import ProductPage from "./pages/Admindashboard/Pages/ProductPage"
// import ServicesPage from "./pages/Admindashboard/Pages/ServicesPage"
import InquiryPage from "./pages/Admindashboard/Pages/InquiryPage"
import ContactPage from "./pages/Admindashboard/Pages/ContactPage"
import ProfilePage from "./pages/Admindashboard/Pages/ProfilePage"
import ClientPageAdmin from "./pages/Admindashboard/Pages/ClientPage"
import SolidWasteTreatmentLayout from "./components/SolidWasteTreatmentLayout"

// ---------- Layout Components ---------- //
const MainLayout = ({ children }) => (
  <div className="font-inter min-h-screen flex flex-col">
    <Navigation />
    <main className="flex-grow">{children}</main>
    <Footer />
    
    <BackToTop />
    
  </div>
)

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")
  const user = { name: "Admin", email: "admin@example.com" }

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="lg:ml-64">
        <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} user={user} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}

const App = () => (
  <Router>
    <Routes>
      {/* ---------- Admin Routes ---------- */}
      <Route path="/admin/login" element={<Adminlogin />} />
      <Route path="/admin/*" element={
        <ProtectedRoute>
          <AdminLayout>
            <Routes>
              
              <Route path="/dashboard" element={<DashboardPage />} />
              {/* <Route path="/products" element={<ProductPage />} /> */}
              {/* <Route path="/services" element={<ServicesPage />} /> */}
              <Route path="/inquiries" element={<InquiryPage />} />
              <Route path="/contacts" element={<ContactPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/client" element={<ClientPageAdmin />} />
            </Routes>
          </AdminLayout>
        </ProtectedRoute>
      } />

      {/* ---------- Public Routes ---------- */}
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/about" element={<MainLayout><About /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
      <Route path="/industries" element={<MainLayout><Industries /></MainLayout>} />
      <Route path="/technology" element={<MainLayout><Technology /></MainLayout>} />
      <Route path="/client" element={<MainLayout><ClientPage /></MainLayout>} />

      {/* ---------- Water Treatment Routes ---------- */}
      <Route path="/services/water-treatment" element={
        <MainLayout>
          <WaterTreatmentLayout>
            <Watertreatment />
          </WaterTreatmentLayout>
        </MainLayout>
      } />
      <Route path="/services/demineralization-plant" element={
        <MainLayout>
          <WaterTreatmentLayout>
            <DemineralizationPlant />
          </WaterTreatmentLayout>
        </MainLayout>
      } />
      <Route path="/services/rain-water-harvesting" element={
        <MainLayout>
          <WaterTreatmentLayout>
            <RainWaterHarvesting />
          </WaterTreatmentLayout>
        </MainLayout>
      } />
      <Route path="/services/reverse-osmosis" element={
        <MainLayout>
          <WaterTreatmentLayout>
            <ReverseOsmosis />
          </WaterTreatmentLayout>
        </MainLayout>
      } />
      <Route path="/services/softener-plant" element={
        <MainLayout>
          <WaterTreatmentLayout>
            <SoftenerPlant />
          </WaterTreatmentLayout>
        </MainLayout>
      } />
      <Route path="/services/ultra-filtration" element={
        <MainLayout>
          <WaterTreatmentLayout>
            <UltraFiltration />
          </WaterTreatmentLayout>
        </MainLayout>
      } />

      {/* ---------- Wastewater Routes ---------- */}
      <Route path="/services/wastewater-treatment" element={
        <MainLayout>
          <Layout>
            <Wastewatertreatment />
          </Layout>
        </MainLayout>
      } />
      <Route path="/services/Sewage-Treatment-Plant" element={
        <MainLayout>
          <Layout>
            <STPPage />
          </Layout>
        </MainLayout>
      } />
      <Route path="/services/Effluent-Treatment-Plant" element={
        <MainLayout>
          <Layout>
            <ETPPage />
          </Layout>
        </MainLayout>
      } />
      <Route path="/services/Combined-Effluent-Treatment-Plant" element={
        <MainLayout>
          <Layout>
            <CETPPage />
          </Layout>
        </MainLayout>
      } />
      <Route path="/services/Zero-Liquid-Discharge" element={
        <MainLayout>
          <Layout>
            <ZLDPage />
          </Layout>
        </MainLayout>
      } />

      {/* ---------- Solid Waste Treatment Routes ---------- */}
      <Route path="/services/solid-waste-treatment" element={
        <MainLayout>
          <SolidWasteTreatmentLayout>
            <SolidWaste />
          </SolidWasteTreatmentLayout>
        </MainLayout>
      } />
      <Route path="/services/organic-waste-composter" element={
        <MainLayout>
          <SolidWasteTreatmentLayout>
            <OrganicWasteComposter />
          </SolidWasteTreatmentLayout>
        </MainLayout>
      } />
      <Route path="/services/garden-waste-shredder" element={
        <MainLayout>
          <SolidWasteTreatmentLayout>
            <GardenWasteShredder />
          </SolidWasteTreatmentLayout>
        </MainLayout>
      } />

      {/* ---------- New Service Routes ---------- */}
      <Route path="/services/air-scrubber" element={
        <MainLayout>
          <AIRSCRUBBER />
        </MainLayout>
      } />
      <Route path="/services/operation-maintenance" element={
        <MainLayout>
          <OPERATIONMAINTENANCE />
        </MainLayout>
      } />
      <Route path="/services/repair-maintenance" element={
        <MainLayout>
          <REPAIRMAINTENANCE />
        </MainLayout>
      } />
    </Routes>
  </Router>
)

export default App