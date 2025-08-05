"use client";

import { Button } from "../components/ui/button";
import { Phone, Download, MessageCircle, Calendar } from "lucide-react";

export function CTASection() {
  const handleConsultation = () => {
    window.location.href = "/contact";
  };

  // const handleDownloadProfile = () => {
  //   const link = document.createElement("a");
  //   link.href = "/assets/Varsha-Enviro-Technologies-Profile.pdf";
  //   link.download = "Varsha-Enviro-Technologies-Profile.pdf";
  //   link.click();
  // };

  // const handleSiteVisit = () => {
  //   window.location.href = "/contact";
  // };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919728710720", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+919728710720";
  };

  const handleEmail = () => {
    window.location.href = "mailto:varshaenvirocare@gmail.com";
  };

  return (
    <section className="py-20 bg-gray-100 text-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Environmental Project?
          </h2>
          <p className="text-lg md:text-xl mb-10 text-slate-600 max-w-2xl mx-auto">
            Get expert consultation and customized solutions for your water treatment, wastewater management, and pollution control needs.
          </p>

          {/* CTA Buttons - centered layout */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto mb-12">
            <Button
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto"
              onClick={handleConsultation}
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact us
            </Button>

            {/* 
            <Button
              size="lg"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 w-full sm:w-auto"
              onClick={handleDownloadProfile}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Profile
            </Button> 
            */}

            {/* <Button
              size="lg"
              className="bg-slate-100 hover:bg-slate-300 border-2 border-slate-600 text-slate-800 w-full sm:w-auto"
              onClick={handleSiteVisit}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Request Site Visit
            </Button> */}

            <Button
              size="lg"
              className="bg-green-600 text-white hover:bg-green-700 w-full sm:w-auto"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </div>

          {/* Contact Info */}
          <div className="pt-8 border-t border-slate-200">
            <div className="grid md:grid-cols-3 gap-6 text-center mt-8">
              <div className="cursor-pointer" onClick={handleCall}>
                <Phone className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                <div className="font-semibold">Call Us</div>
                <div className="text-slate-600">+91-9728710720</div>
              </div>
              <div className="cursor-pointer" onClick={handleEmail}>
                <MessageCircle className="w-6 h-6 mx-auto mb-2 text-green-600" />
                <div className="font-semibold">Email Us</div>
                <div className="text-slate-600">varshaenvirocare@gmail.com</div>
              </div>
              <div>
                <Calendar className="w-6 h-6 mx-auto mb-2 text-slate-700" />
                <div className="font-semibold">Available</div>
                <div className="text-slate-600">24/7 Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
