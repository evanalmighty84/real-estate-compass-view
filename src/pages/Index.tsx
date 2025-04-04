
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Building, Landmark, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PropertyCard from "@/components/PropertyCard";
import AgentCard from "@/components/AgentCard";
import SearchFilters from "@/components/SearchFilters";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Mock data for the featured properties
const featuredProperties = [
  {
    id: "prop1",
    title: "Modern Luxury Villa",
    address: "123 Elegant Street, Beverly Hills, CA 90210",
    price: 3750000,
    bedrooms: 5,
    bathrooms: 4.5,
    squareFeet: 4200,
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    isFeatured: true
  },
  {
    id: "prop2",
    title: "Downtown Penthouse",
    address: "456 Skyline Avenue, Los Angeles, CA 90001",
    price: 2250000,
    bedrooms: 3,
    bathrooms: 3,
    squareFeet: 2100,
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    isNew: true
  },
  {
    id: "prop3",
    title: "Suburban Family Home",
    address: "789 Maple Drive, Pasadena, CA 91101",
    price: 1100000,
    bedrooms: 4,
    bathrooms: 2.5,
    squareFeet: 2800,
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

// Mock data for the featured agents
const featuredAgents = [
  {
    id: "agent1",
    name: "Sarah Johnson",
    title: "Senior Realtor",
    email: "sarah@realestateidx.com",
    phone: "555-123-4567",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specialty: "Luxury Homes",
    isFeatured: true,
    listingCount: 24
  },
  {
    id: "agent2",
    name: "Michael Chen",
    title: "Commercial Specialist",
    email: "michael@realestateidx.com",
    phone: "555-234-5678",
    photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specialty: "Commercial",
    listingCount: 15
  },
  {
    id: "agent3",
    name: "Jessica Davis",
    title: "First-Time Buyer Expert",
    email: "jessica@realestateidx.com",
    phone: "555-345-6789",
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specialty: "Residential",
    listingCount: 19
  },
];

const Index = () => {
  const handleSearchSubmit = (query: string) => {
    console.log("Search query:", query);
    // In a real application, navigate to search results page with query
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero-section relative flex items-center justify-center py-24 px-4 text-center text-white">
        <div className="container max-w-4xl mx-auto z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Dream Property</h1>
          <p className="text-xl mb-8">Discover the perfect home with our comprehensive property listings</p>
          
          <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-2">
            <Input 
              placeholder="Enter address, city, ZIP or neighborhood" 
              className="flex-grow border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button 
              className="mt-2 md:mt-0 bg-realestate-600 hover:bg-realestate-700 md:ml-2"
              onClick={() => handleSearchSubmit('sample search')}
            >
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>
      </div>
      
      {/* Property Categories */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Browse Properties by Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Residential" 
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 p-4 z-20">
              <h3 className="text-xl font-semibold text-white mb-2">Residential</h3>
              <Link to="/properties?type=residential" className="text-white flex items-center hover:underline">
                Browse Homes <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="absolute top-4 left-4 z-20">
              <div className="bg-white/90 p-2 rounded-full">
                <Home className="h-6 w-6 text-realestate-700" />
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Commercial" 
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 p-4 z-20">
              <h3 className="text-xl font-semibold text-white mb-2">Commercial</h3>
              <Link to="/properties?type=commercial" className="text-white flex items-center hover:underline">
                Browse Properties <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="absolute top-4 left-4 z-20">
              <div className="bg-white/90 p-2 rounded-full">
                <Building className="h-6 w-6 text-realestate-700" />
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Luxury" 
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 p-4 z-20">
              <h3 className="text-xl font-semibold text-white mb-2">Luxury</h3>
              <Link to="/properties?type=luxury" className="text-white flex items-center hover:underline">
                View Luxury Homes <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="absolute top-4 left-4 z-20">
              <div className="bg-white/90 p-2 rounded-full">
                <Landmark className="h-6 w-6 text-realestate-700" />
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Land" 
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 p-4 z-20">
              <h3 className="text-xl font-semibold text-white mb-2">Land</h3>
              <Link to="/properties?type=land" className="text-white flex items-center hover:underline">
                View Land Listings <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="absolute top-4 left-4 z-20">
              <div className="bg-white/90 p-2 rounded-full">
                <Search className="h-6 w-6 text-realestate-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Properties */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Properties</h2>
            <Link 
              to="/properties" 
              className="text-realestate-600 flex items-center hover:underline"
            >
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
          
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">Find Your Perfect Property</h3>
            <SearchFilters />
          </div>
        </div>
      </div>
      
      {/* Featured Agents */}
      <div className="container mx-auto py-12 px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Meet Our Agents</h2>
          <Link 
            to="/agents" 
            className="text-realestate-600 flex items-center hover:underline"
          >
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredAgents.map((agent) => (
            <AgentCard key={agent.id} {...agent} />
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-realestate-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Whether you're buying, selling, or just browsing, our team of expert agents is here to guide you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild
              size="lg" 
              className="bg-white text-realestate-700 hover:bg-gray-100"
            >
              <Link to="/properties">
                Browse Properties
              </Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-realestate-600"
            >
              <Link to="/contact">
                Contact an Agent
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
