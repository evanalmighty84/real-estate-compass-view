
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-600 mb-8">Get in touch with our team of real estate professionals.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Office Locations</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">Los Angeles Headquarters</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-2 text-realestate-600 flex-shrink-0 mt-0.5" />
                      <span>123 Realty Street, Suite 100<br />Los Angeles, CA 90001</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-2 text-realestate-600" />
                      <span>(213) 456-7890</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-2 text-realestate-600" />
                      <span>la@realestateidx.com</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-realestate-600" />
                      <span>Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">Beverly Hills Office</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-2 text-realestate-600 flex-shrink-0 mt-0.5" />
                      <span>456 Luxury Avenue<br />Beverly Hills, CA 90210</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 mr-2 text-realestate-600" />
                      <span>(310) 789-0123</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 mr-2 text-realestate-600" />
                      <span>bh@realestateidx.com</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-realestate-600" />
                      <span>Mon-Fri: 9AM-7PM, Sat: 10AM-5PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">General Inquiries</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-realestate-600" />
                  <span>(800) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-realestate-600" />
                  <span>info@realestateidx.com</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Media & Press</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-realestate-600" />
                  <span>press@realestateidx.com</span>
                </div>
              </div>
            </div>
            
            <div className="bg-realestate-700 rounded-lg shadow-md p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">Need Urgent Help?</h3>
              <p className="mb-4">Our customer service team is available for urgent inquiries 7 days a week.</p>
              <div className="flex items-center font-bold">
                <Phone className="h-5 w-5 mr-2" />
                <span>(888) 987-6543</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Find Us</h2>
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-gray-500">
              {/* In a real application, you would embed a Google Map here */}
              <MapPin className="h-10 w-10 mx-auto mb-2 opacity-50" />
              <p>Google Map would be embedded here</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
