"use client";

import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import {
  Target,
  Eye,
  Award,
  Users,
  Leaf,
  Shield,
  Star,
  ArrowRight,
} from "lucide-react";
import aboutBg from "../../public/topimages/about.png"; // Adjust the path as necessary
import { Helmet } from "react-helmet"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "We maintain the highest standards in all our environmental solutions with ISO certifications.",
    },
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      description:
        "Committed to sustainable practices and eco-friendly technologies for a greener future.",
    },
    {
      icon: Users,
      title: "Client Satisfaction",
      description:
        "Our success is measured by the satisfaction and trust of our valued clients.",
    },
    {
      icon: Award,
      title: "Innovation Excellence",
      description:
        "Continuously adopting cutting-edge technologies and innovative solutions.",
    },
  ];

  return (
    <div className="min-h-screen text-slate-800 bg-white">

    <Helmet>
  <title>About Us - Varsha Enviro Technologies</title>
  <meta
    name="description"
    content="Learn more about Varsha Enviro Technologies — our mission, values, team, and commitment to delivering sustainable environmental solutions for water, air, and waste management."
  />
  <meta
    name="keywords"
    content="About Varsha Enviro Technologies, Environmental Company, Sustainable Solutions, Water Treatment Experts, Air Scrubber, Waste Management, Green Technology"
  />
  <meta name="author" content="Varsha Enviro Technologies" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</Helmet>

      {/* Hero Section */}
<section
  className="py-4 h-min-screen bg-cover bg-center bg-no-repeat relative"
  style={{
    backgroundImage: `url(${aboutBg})`,
  }}
>
  {/* 🔹 Overlay */}
  <div className="absolute inset-0 bg-gray-900 opacity-60"></div>

  {/* 🔹 Content */}
  <div className="container mx-auto px-4 text-center relative z-10 flex flex-col justify-center items-center h-full">
    <div className="inline-flex items-center gap-2 bg-white text-blue-600 border border-blue-200 rounded-2xl mb-6 px-4 text-sm font-medium">
      🏢 About Varsha Enviro Technologies
    </div>

    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
      Leading Environmental Engineering Solutions
    </h1>

    <p className="text-lg text-white max-w-3xl mx-auto mb-8">
      With over 15 years of experience, Varsha Enviro Technologies has
      emerged as one of India's fastest-growing environmental engineering
      firms—offering advanced, affordable, and sustainable solutions.
    </p>

    {/* 🔹 Centered Breadcrumb */}
    <nav className="text-white text-sm md:text-base">
      <ol className="list-reset flex justify-center space-x-2">
        <li>
          <a href="/" className="text-blue-500 hover:underline">Home</a>
        </li>
        <li>
          <span className="text-white">/</span>
        </li>
        <li className="text-white font-medium">About</li>
      </ol>
    </nav>
  </div>
</section>





      {/* Mission & Vision */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg bg-white">
            <CardContent className="p-6">
              <Target className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-2xl font-semibold text-slate-800 mb-2">Our Mission</h3>
              <p className="text-slate-600">
                To provide innovative, sustainable, and cost-effective environmental solutions that protect our planet while meeting the needs of industries and communities.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg bg-white">
            <CardContent className="p-6">
              <Eye className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold text-slate-800 mb-2">Our Vision</h3>
              <p className="text-slate-600">
                To be the most trusted and preferred environmental engineering company in India, known for innovation, excellence, and commitment to sustainability.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Core Values</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-12">
            The principles that guide our work and define our commitment to excellence
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="shadow-md bg-blue-50 hover:bg-blue-100 transition">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border">
                    <value.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
{/* Our Journey */}
<section className="py-20 bg-green-50">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Journey</h2>
    <p className="text-slate-600 max-w-2xl mx-auto mb-12">
      Key milestones in our growth as a leading environmental solutions provider
    </p>

    <div className="relative border-l-4 border-blue-200 max-w-3xl mx-auto">
      {[
        {
          year: "2008",
          event: "Company Founded",
          description:
            "Started with a vision to provide clean environmental solutions.",
        },
        {
          year: "2012",
          event: "First Major Project",
          description:
            "Completed 100+ capacity STP for municipal corporation.",
        },
        {
          year: "2016",
          event: "ISO Certification",
          description:
            "Achieved ISO 9001:2015 and ISO 14001:2015 certifications.",
        },
        {
          year: "2020",
          event: "Pan-India Expansion",
          description: "Extended services across 10+ states in India.",
        },
        {
          year: "2024",
          event: "500+ Projects",
          description:
            "Successfully completed over 500 environmental projects.",
        },
      ].map((m, index) => (
        <div key={index} className="relative pl-10 mb-12 text-left">
          {/* Dot on the vertical line */}
          <div className="absolute -left-2 top-1.5 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold text-blue-600">{m.year}</span>
            <h3 className="text-lg font-bold text-slate-800 mt-1">{m.event}</h3>
            <p className="text-sm text-slate-600 mt-1">{m.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Certifications & Compliance</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-12">
            Validating our commitment to quality and environmental standards
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "ISO 9001:2015", desc: "Quality Management System" },
              { name: "ISO 14001:2015", desc: "Environmental Management" },
              { name: "OHSAS 18001", desc: "Occupational Health & Safety" },
              { name: "CE Certified", desc: "European Conformity" },
            ].map((cert, index) => (
              <Card key={index} className="shadow bg-blue-50">
                <CardContent className="p-6 text-center">
                  <Star className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg">{cert.name}</h3>
                  <p className="text-slate-600 text-sm">{cert.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Expert Team</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-12">
            Experienced professionals dedicated to delivering exceptional environmental solutions
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                role: "Environmental Engineers",
                count: "15+",
                desc: "Specialized in water and wastewater treatment",
              },
              {
                role: "Project Managers",
                count: "8+",
                desc: "Ensuring timely and quality project delivery",
              },
              {
                role: "Technical Support",
                count: "20+",
                desc: "24/7 maintenance and support services",
              },
            ].map((team, index) => (
              <Card key={index} className="shadow-md bg-white">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{team.count}</div>
                  <h4 className="text-lg font-semibold mb-2">{team.role}</h4>
                  <p className="text-slate-600 text-sm">{team.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
