
import React from 'react';
import { CheckCircle, Award, Star, Users, Building, Home, TrendingUp } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  // Mock team members
  const teamMembers = [
    {
      name: "David Anderson",
      title: "Founder & CEO",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Over 20 years of real estate experience with a passion for connecting people with their dream homes."
    },
    {
      name: "Jessica Wilson",
      title: "Chief Operating Officer",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Former tech executive bringing innovation and efficiency to real estate operations."
    },
    {
      name: "Marcus Johnson",
      title: "Head of Sales",
      photo: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Top-performing agent with expertise in luxury properties and a client-first approach."
    },
    {
      name: "Sophia Chen",
      title: "Marketing Director",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Digital marketing expert specializing in real estate market trends and property promotion."
    }
  ];
  
  // Company statistics
  const stats = [
    { value: "2500+", label: "Properties Sold", icon: Home },
    { value: "500+", label: "Happy Clients", icon: Users },
    { value: "15+", label: "Years Experience", icon: Award },
    { value: "50+", label: "Expert Agents", icon: Star }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">About RealEstateIDX</h1>
          <p className="text-gray-600 mb-8">Your trusted partner in real estate for over 15 years.</p>
          
          {/* Company Overview */}
          <div className="prose max-w-none mb-12">
            <p className="text-lg">
              RealEstateIDX is a leading real estate agency dedicated to providing exceptional service and results for our clients. We leverage cutting-edge technology with personalized expertise to make the real estate process seamless and successful.
            </p>
            <p>
              Founded in 2008, our company has grown from a small local agency to a respected name in the real estate industry. Our team of experienced professionals is passionate about helping clients find their perfect properties and achieving their real estate goals.
            </p>
            <p>
              We specialize in residential and commercial properties across multiple markets, with particular expertise in luxury homes, investment properties, and new developments. Our comprehensive IDX integration provides clients with access to the most up-to-date property listings and market data.
            </p>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="bg-realestate-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Our Impact By The Numbers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <stat.icon className="h-8 w-8 text-realestate-600" />
                </div>
                <div className="text-3xl font-bold text-realestate-700">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Our Approach */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Approach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <CheckCircle className="h-6 w-6 text-realestate-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Personalized Service</h3>
                  <p className="text-gray-600">We understand that every client's needs are unique. Our tailored approach ensures we find the perfect property match for you.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <Building className="h-6 w-6 text-realestate-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Local Market Expertise</h3>
                  <p className="text-gray-600">Our agents have deep knowledge of local neighborhoods, property values, and market trends to guide your decisions.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <TrendingUp className="h-6 w-6 text-realestate-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Data-Driven Insights</h3>
                  <p className="text-gray-600">We leverage advanced analytics and IDX technology to provide you with accurate market data and property valuations.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <Users className="h-6 w-6 text-realestate-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Client-First Philosophy</h3>
                  <p className="text-gray-600">Your satisfaction is our priority. We're committed to delivering exceptional service throughout your real estate journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Leadership Team */}
        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Meet Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                <div className="p-6 text-center">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    {member.photo ? (
                      <AvatarImage src={member.photo} alt={member.name} />
                    ) : (
                      <AvatarFallback>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-realestate-600 mb-3">{member.title}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-realestate-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Work with Our Team?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Whether you're looking to buy, sell, or invest in real estate, our team of experts is here to guide you every step of the way.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="/contact" 
              className="bg-white text-realestate-700 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="/agents" 
              className="border border-white text-white px-6 py-2 rounded-md font-medium hover:bg-realestate-600 transition-colors"
            >
              Meet Our Agents
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
