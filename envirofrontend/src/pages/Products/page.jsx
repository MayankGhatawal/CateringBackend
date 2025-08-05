// import { useState, useMemo } from "react";
// import { Card, CardContent } from "../../components/ui/card";
// import { Button } from "../../components/ui/button";
// import { Badge } from "../../components/ui/badge";
// import { X, ZoomIn, MapPin, Calendar, Users, Phone, Mail, ArrowRight, Combine } from "lucide-react";
// import { Link } from "react-router-dom";
// import productsBg from "../../public/images/Air Pollution Control.jpg";


// // product images
// import sewage from "../../public/productimg/Sewage Treatment.jpeg"; 
// import effluentTreatment from "../../public/productimg/Effluent Treatment.jpeg"; 
// import Combined from "../../public/productimg/Combined Effluent Treatment.jpeg";
// import zero from "../../public/productimg/Zero Liquid.jpeg";
// import ultra from "../../public/productimg/Ultra-Filtration.jpeg";
// import reverse from "../../public/productimg/Reverse Osmosis.jpeg";
// import demineralization from "../../public/productimg/Demineralization.jpeg";
// import softener from "../../public/productimg/Softener Plant.jpeg";
// import rainwater from "../../public/productimg/Rain-Water Harvesting System.jpg";
// import organic from "../../public/productimg/Organic Waste.jpeg";
// import shredder from "../../public/productimg/Garden Waste Shredder.jpg";
// import airScrubber from "../../public/productimg/Air Scrubber.jpeg";




// const ProductsPage = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   const categories = [
//     { id: "all", name: "All Products", count: 12 },
//     { id: "wastewater", name: "Wastewater Treatment", count: 4 },
//     { id: "water", name: "Water Treatment", count: 5 },
//     { id: "solid", name: "Solid Waste Treatment", count: 2 },
//     { id: "air", name: "Air Treatment", count: 1 },
//   ];

//   const subCategories = {
//     wastewater: [
//       "Sewage Treatment Plant (STP)",
//       "Effluent Treatment Plant (ETP)",
//       "Combined Effluent Treatment Plant (CETP)",
//       "Zero Liquid Discharge (ZLD)"
//     ],
//     water: [
//       "Ultra-Filtration (UF)",
//       "Reverse Osmosis (RO)",
//       "Demineralization Plant (DM)",
//       "Softener Plant",
//       "Rain-Water Harvesting"
//     ],
//     solid: [
//       "Organic Waste Composter (OWC)",
//       "Garden Waste Shredder"
//     ],
//     air: [
//       "Air Scrubber"
//     ]
//   };

//   const products = [
//     // Wastewater Treatment Products
//     {
//       id: 1,
//       title: "Sewage Treatment Plant (STP) - 5 MLD",
//       category: "wastewater",
//       subCategory: "Sewage Treatment Plant (STP)",
//       location: "Gurugram, Haryana",
//       date: "2024",
//       capacity: "5 MLD",
//       technology: "SBR + Tertiary Treatment",
//       client: "Municipal Corporation",
//       image: {sewage},
//       description: "Large-scale sewage treatment plant serving 50,000+ residents with advanced biological treatment.",
//       features: [
//         "BOD reduction >95%",
//         "Automated control system",
//         "Odor control mechanism",
//         "Sludge dewatering system"
//       ]
//     },
//     {
//       id: 2,
//       title: "Effluent Treatment Plant (ETP)",
//       category: "wastewater",
//       subCategory: "Effluent Treatment Plant (ETP)",
//       location: "Mumbai, Maharashtra",
//       date: "2023",
//       capacity: "2 MLD",
//       technology: "Physico-Chemical + Biological",
//       client: "Textile Industry",
//       image: {effluentTreatment},
//       description: "Industrial effluent treatment plant for textile wastewater with color and chemical removal.",
//       features: [
//         "Color removal efficiency >90%",
//         "Chemical dosing automation",
//         "pH neutralization system",
//         "Sludge management"
//       ]
//     },
//     {
//       id: 3,
//       title: "Combined Effluent Treatment Plant (CETP)",
//       category: "wastewater",
//       subCategory: "Combined Effluent Treatment Plant (CETP)",
//       location: "Surat, Gujarat",
//       date: "2024",
//       capacity: "10 MLD",
//       technology: "Primary + Secondary + Tertiary",
//       client: "Industrial Cluster",
//       image: {Combined},
//       description: "Common effluent treatment plant serving multiple industries in an industrial estate.",
//       features: [
//         "Handles mixed industrial wastewater",
//         "Centralized monitoring",
//         "Common sludge disposal",
//         "Cost-effective for SMEs"
//       ]
//     },
//     {
//       id: 4,
//       title: "Zero Liquid Discharge (ZLD) System",
//       category: "wastewater",
//       subCategory: "Zero Liquid Discharge (ZLD)",
//       location: "Hyderabad, Telangana",
//       date: "2023",
//       capacity: "500 KLD",
//       technology: "MBR + RO + MEE",
//       client: "Leading Pharma Company",
//       image: {zero},
//       description: "Zero liquid discharge system for pharmaceutical manufacturing with 99% water recovery.",
//       features: [
//         "99% water recovery",
//         "Energy efficient design",
//         "Automated chemical dosing",
//         "Remote monitoring"
//       ]
//     },

//     // Water Treatment Products
//     {
//       id: 5,
//       title: "Ultra-Filtration (UF) System",
//       category: "water",
//       subCategory: "Ultra-Filtration (UF)",
//       location: "Chennai, Tamil Nadu",
//       date: "2024",
//       capacity: "2000 LPH",
//       technology: "Hollow Fiber Membranes",
//       client: "Beverage Industry",
//       image: {ultra},
//       description: "Ultra-filtration system for pretreatment in process water applications.",
//       features: [
//         "0.01 micron filtration",
//         "Automatic backwash",
//         "Low energy consumption",
//         "Compact footprint"
//       ]
//     },
//     {
//       id: 6,
//       title: "Reverse Osmosis (RO) Plant",
//       category: "water",
//       subCategory: "Reverse Osmosis (RO)",
//       location: "Bangalore, Karnataka",
//       date: "2024",
//       capacity: "1000 LPH",
//       technology: "Multi-stage RO + UV",
//       client: "Manufacturing Unit",
//       image: {reverse},
//       description: "High-capacity reverse osmosis system for industrial process water requirements.",
//       features: [
//         "Multi-stage filtration",
//         "UV disinfection",
//         "Low energy consumption",
//         "Automated flushing system"
//       ]
//     },
//     {
//       id: 7,
//       title: "Demineralization Plant (DM)",
//       category: "water",
//       subCategory: "Demineralization Plant (DM)",
//       location: "Pune, Maharashtra",
//       date: "2024",
//       capacity: "2000 LPH",
//       technology: "Ion Exchange + Mixed Bed",
//       client: "Power Plant",
//       image: {demineralization},
//       description: "Demineralization plant for high-purity boiler feed water with conductivity <1 µS/cm.",
//       features: [
//         "High purity output",
//         "Automatic regeneration",
//         "Low chemical consumption",
//         "Remote monitoring"
//       ]
//     },
//     {
//       id: 8,
//       title: "Softener Plant",
//       category: "water",
//       subCategory: "Softener Plant",
//       location: "Delhi",
//       date: "2023",
//       capacity: "5000 LPH",
//       technology: "Ion Exchange",
//       client: "Hospital",
//       image: {softener},
//       description: "Water softener system for hardness removal in commercial applications.",
//       features: [
//         "Hardness removal >95%",
//         "Automatic regeneration",
//         "Low salt consumption",
//         "Compact design"
//       ]
//     },
//     {
//       id: 9,
//       title: "Rain-Water Harvesting System",
//       category: "water",
//       subCategory: "Rain-Water Harvesting",
//       location: "Jaipur, Rajasthan",
//       date: "2024",
//       capacity: "50,000 liters",
//       technology: "Filtration + Storage",
//       client: "Residential Complex",
//       image: {rainwater},
//       description: "Comprehensive rainwater harvesting system for water conservation.",
//       features: [
//         "First flush system",
//         "Multi-stage filtration",
//         "UV treatment option",
//         "Smart monitoring"
//       ]
//     },

//     // Solid Waste Treatment Products
//     {
//       id: 10,
//       title: "Organic Waste Composter (OWC)",
//       category: "solid",
//       subCategory: "Organic Waste Composter (OWC)",
//       location: "Bangalore, Karnataka",
//       date: "2024",
//       capacity: "500 Kg/Day",
//       technology: "Automated Composting",
//       client: "IT Park",
//       image: {organic},
//       description: "Fully automated organic waste composting system for corporate campus food waste management.",
//       features: [
//         "Fully automated operation",
//         "Odor control system",
//         "Compost ready in 24 hours",
//         "Low maintenance"
//       ]
//     },
//     {
//       id: 11,
//       title: "Garden Waste Shredder",
//       category: "solid",
//       subCategory: "Garden Waste Shredder",
//       location: "Hyderabad, Telangana",
//       date: "2023",
//       capacity: "200 Kg/Hour",
//       technology: "Mechanical Shredding",
//       client: "Municipal Corporation",
//       image: {shredder},
//       description: "Heavy-duty garden waste shredder for municipal landscaping applications.",
//       features: [
//         "High torque motor",
//         "Safety mechanisms",
//         "Mobile unit available",
//         "Low noise operation"
//       ]
//     },

//     // Air Treatment Products
//     {
//       id: 12,
//       title: "Air Scrubber System",
//       category: "air",
//       subCategory: "Air Scrubber",
//       location: "Gujarat",
//       date: "2024",
//       capacity: "10,000 CMH",
//       technology: "Wet Scrubbing + Absorption",
//       client: "Chemical Manufacturing",
//       image: {airScrubber},
//       description: "Industrial air pollution control system for SOx and NOx removal from chemical plant emissions.",
//       features: [
//         "95% pollutant removal",
//         "Corrosion-resistant materials",
//         "Low water consumption",
//         "Automated pH control"
//       ]
//     }
//   ];

//   const filteredProducts = useMemo(() => {
//     return selectedCategory === "all" 
//       ? products 
//       : products.filter(product => product.category === selectedCategory);
//   }, [selectedCategory]);

//   const openModal = (product) => {
//     setSelectedProduct(product);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     document.body.style.overflow = 'auto';
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-green-50">
//       {/* Hero Section */}
//      <section className="relative h-screen bg-gradient-to-br from-blue-100/50 via-teal-100/50 to-white overflow-hidden">
//   <div className="absolute inset-0">
//     <img
//       src={productsBg}
//       alt="Water treatment solutions"
//       className="w-full h-full object-cover opacity-90"
//     />
//     {/* Light dark overlay */}
//     <div className="absolute inset-0  bg-gray-900 opacity-50"></div>
//   </div>

//   <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
//     <div className="max-w-4xl text-center">
//       <Badge
//         variant="outline"
//         className="inline-flex items-center px-3  rounded-full text-sm font-medium bg-white text-blue-600 border border-gray-300 shadow-lg backdrop-blur-sm mb-6"
//       >
//         <ZoomIn className="w-4 h-4 mr-2" />
//         Our Product Portfolio
//       </Badge>

//       <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//         Comprehensive Environmental Solutions
//       </h1>
//       <p className="text-xl text-white leading-relaxed mb-8">
//         Explore our range of water, wastewater, air and solid waste treatment systems designed for industrial, commercial and municipal applications.
//       </p>
//     </div>
//   </div>
// </section>


//       {/* Category Filter */}
//       <section className="py-8 bg-white border-b border-blue-100 shadow-sm">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-wrap justify-center gap-2 mb-4">
//             {categories.map((category) => (
//               <Button
//                 key={category.id}
//                 variant={selectedCategory === category.id ? "default" : "outline"}
//                 className={`${
//                   selectedCategory === category.id
//                     ? "bg-blue-500  text-white shadow-lg"
//                     : "border-blue-200 text-blue-700 hover:bg-blue-300 hover:border-blue-300"
//                 } transition-all duration-300 min-w-[120px]`}
//                 onClick={() => setSelectedCategory(category.id)}
//               >
//                 {category.name}
//                 <Badge 
//                   variant="secondary" 
//                   className={`ml-2 ${
//                     selectedCategory === category.id 
//                       ? "bg-white/20 text-white" 
//                       : "bg-blue-100 text-blue-700"
//                   }`}
//                 >
//                   {category.count}
//                 </Badge>
//               </Button>
//             ))}
//           </div>
          
//           {selectedCategory !== "all" && (
//             <div className="flex flex-wrap justify-center gap-2 mt-4">
//               {subCategories[selectedCategory].map((subCat) => (
//                 <Badge 
//                   key={subCat} 
//                   variant="outline" 
//                   className="border-green-300 text-green-700 bg-green-50 hover:bg-green-100 cursor-pointer"
//                   onClick={() => {
//                     const element = document.getElementById(subCat.replace(/\s+/g, '-'));
//                     element?.scrollIntoView({ behavior: 'smooth' });
//                   }}
//                 >
//                   {subCat}
//                 </Badge>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Products Grid */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           {filteredProducts.length === 0 ? (
//             <div className="text-center py-20">
//               <h3 className="text-2xl font-bold text-gray-600 mb-4">No products found in this category</h3>
//               <Button 
//                 onClick={() => setSelectedCategory("all")}
//                 className="bg-blue-500 text-white"
//               >
//                 View All Products
//               </Button>
//             </div>
//           ) : (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredProducts.map((product) => (
//                 <Card
//                   key={product.id}
//                   id={product.subCategory.replace(/\s+/g, '-')}
//                   className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white hover:scale-[1.02]"
//                   onClick={() => openModal(product)}
//                 >
//                   <CardContent className="p-0 h-full flex flex-col">
//                     {/* Image */}
//                     <div className="relative overflow-hidden h-64">
//                       <img
//                         src={product.image}
//                         alt={product.title}
//                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-blue-500/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
//                         <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
//                           <ZoomIn className="w-6 h-6 text-white" />
//                         </div>
//                       </div>
//                       <Badge className="absolute top-4 left-4 bg-blue-500  text-white shadow-lg">
//                         {product.subCategory}
//                       </Badge>
//                     </div>

//                     {/* Content - Simplified */}
//                     <div className="p-6 flex-grow flex flex-col">
//                       <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
//                         {product.title}
//                       </h3>
//                       <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
//                         {product.description}
//                       </p>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Product Modal */}
//       {selectedProduct && (
//         <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
//           <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
//             <div className="relative">
//               <button
//                 onClick={closeModal}
//                 className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
//                 aria-label="Close modal"
//               >
//                 <X className="w-6 h-6" />
//               </button>

//               <div className="relative h-96 w-full">
//                 <img
//                   src={selectedProduct.image}
//                   alt={selectedProduct.title}
//                   className="w-full h-full object-cover rounded-t-2xl"
//                 />
//               </div>

//               <div className="p-6 md:p-8">
//                 <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
//                   <div>
//                     <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
//                       {selectedProduct.title}
//                     </h2>
//                     <div className="flex flex-wrap gap-2">
//                       <Badge className="bg-blue-500  text-white shadow-lg">
//                         {categories.find((cat) => cat.id === selectedProduct.category)?.name}
//                       </Badge>
//                       <Badge variant="outline" className="border-green-300 text-green-700">
//                         {selectedProduct.subCategory}
//                       </Badge>
//                     </div>
//                   </div>
//                 </div>

//                 <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
//                   {selectedProduct.description}
//                 </p>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-800 mb-6">Product Details</h3>
//                     <div className="space-y-4">
//                       <div className="flex items-start bg-blue-50 rounded-lg p-4">
//                         <MapPin className="w-5 h-5 mr-3 text-blue-600 mt-0.5" />
//                         <div>
//                           <span className="font-medium text-gray-800">Location</span>
//                           <p className="text-gray-600">{selectedProduct.location}</p>
//                         </div>
//                       </div>
//                       <div className="flex items-start bg-green-50 rounded-lg p-4">
//                         <Calendar className="w-5 h-5 mr-3 text-green-600 mt-0.5" />
//                         <div>
//                           <span className="font-medium text-gray-800">Installation</span>
//                           <p className="text-gray-600">Completed in {selectedProduct.date}</p>
//                         </div>
//                       </div>
//                       <div className="flex items-start bg-cyan-50 rounded-lg p-4">
//                         <Users className="w-5 h-5 mr-3 text-cyan-600 mt-0.5" />
//                         <div>
//                           <span className="font-medium text-gray-800">Client</span>
//                           <p className="text-gray-600">{selectedProduct.client}</p>
//                         </div>
//                       </div>
//                     </div>

//                     {selectedProduct.features && (
//                       <div className="mt-6">
//                         <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features</h3>
//                         <ul className="space-y-2">
//                           {selectedProduct.features.map((feature, index) => (
//                             <li key={index} className="flex items-start">
//                               <span className="text-green-500 mr-2">✓</span>
//                               <span className="text-gray-700">{feature}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}
//                   </div>

//                   <div>
//                     <h3 className="text-xl font-bold text-gray-800 mb-6">Technical Specifications</h3>
//                     <div className="space-y-4">
//                       <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg">
//                         <span className="font-semibold text-blue-800">Capacity:</span>
//                         <p className="text-blue-700 text-lg font-bold">{selectedProduct.capacity}</p>
//                       </div>
//                       <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
//                         <span className="font-semibold text-green-800">Technology Used:</span>
//                         <p className="text-green-700 font-medium">{selectedProduct.technology}</p>
//                       </div>
//                       <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-lg">
//                         <span className="font-semibold text-cyan-800">Product Type:</span>
//                         <p className="text-cyan-700 font-medium">{selectedProduct.subCategory}</p>
//                       </div>
//                     </div>

//                     <div className="mt-6">
//                       <h3 className="text-xl font-bold text-gray-800 mb-4">Performance Metrics</h3>
//                       <div className="grid grid-cols-2 gap-4">
//                         <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
//                           <span className="block text-2xl font-bold text-blue-600">95%</span>
//                           <span className="text-sm text-gray-600">Efficiency</span>
//                         </div>
//                         <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
//                           <span className="block text-2xl font-bold text-green-600">24/7</span>
//                           <span className="text-sm text-gray-600">Operation</span>
//                         </div>
//                         <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
//                           <span className="block text-2xl font-bold text-cyan-600">10+</span>
//                           <span className="text-sm text-gray-600">Years Lifespan</span>
//                         </div>
//                         <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
//                           <span className="block text-2xl font-bold text-purple-600">99%</span>
//                           <span className="text-sm text-gray-600">Compliance</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-8 pt-8 border-t border-gray-200">
//                   <h3 className="text-xl font-bold text-gray-800 mb-6">Interested in this product?</h3>
//                   <div className="flex flex-col sm:flex-row gap-4">
//                     <Button className="bg-blue-500  text-white hover:from-blue-600 hover:to-green-600 shadow-lg">
//                       <Phone className="w-4 h-4 mr-2" />
//                       Contact Sales
//                     </Button>
//                     <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
//                       <Mail className="w-4 h-4 mr-2" />
//                       Request Quote
//                     </Button>
//                     <Button 
//                       variant="outline" 
//                       className="border-blue-300 text-blue-700 hover:bg-blue-50"
//                       onClick={() => {
//                         closeModal();
//                         setSelectedCategory(selectedProduct.category);
//                       }}
//                     >
//                       <ArrowRight className="w-4 h-4 mr-2" />
//                       View Similar Products
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* CTA Section */}
//       <section className="py-16 bg-green-50">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//             Need a Custom Environmental Solution?
//           </h2>
//           <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto leading-relaxed">
//             Our team of experts can design and implement a tailored solution for your specific requirements.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link to="/contact">
//       <Button className="bg-white text-blue-600 hover:bg-white/90 shadow-lg px-8 py-4 text-lg">
//         <Phone className="w-5 h-5 mr-2" />
//         Contact Us
//       </Button>
//     </Link>
        
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ProductsPage;