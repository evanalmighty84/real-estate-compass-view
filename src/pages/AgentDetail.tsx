
import React from 'react';
import { useParams } from 'react-router-dom';
import { Mail, Phone, Star, MapPin, Award, FileText, BarChart, ClipboardCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PropertyCard from "@/components/PropertyCard";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock agent data
const mockAgent = {
  id: "agent1",
  name: "Sarah Johnson",
  title: "Senior Realtor",
  email: "sarah@realestateidx.com",
  phone: "555-123-4567",
  photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  bio: `Sarah Johnson is a highly experienced real estate professional with over 10 years in the industry. She specializes in luxury properties and has a proven track record of successfully matching clients with their dream homes.

Sarah's deep knowledge of the local market, strong negotiation skills, and commitment to client satisfaction have earned her numerous industry awards and a loyal client base. She is known for her personalized approach, attention to detail, and ability to navigate complex real estate transactions with ease.

Whether you're looking to buy, sell, or invest, Sarah is dedicated to providing exceptional service and achieving outstanding results for her clients.`,
  specialty: "Luxury Homes",
  isFeatured: true,
  experience: 10,
  languages: ["English", "Spanish", "French"],
  certifications: ["Certified Residential Specialist (CRS)", "Accredited Buyer's Representative (ABR)", "Luxury Home Marketing Specialist"],
  areas: ["Beverly Hills", "Bel Air", "Hollywood Hills", "Santa Monica", "Malibu"],
  stats: {
    totalSales: 87,
    activeListings: 24,
    soldLastYear: 32,
    averageDaysOnMarket: 45
  },
  socialMedia: {
    linkedin: "https://linkedin.com/in/sarahjohnson",
    instagram: "https://instagram.com/sarahjohnsonrealty",
    facebook: "https://facebook.com/sarahjohnsonrealty"
  }
};

// Mock agent listings
const agentListings = [
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
    id: "prop4",
    title: "Seaside Cottage",
    address: "1010 Ocean View Drive, Malibu, CA 90265",
    price: 4500000,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1800,
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    status: "For Rent" as const
  },
  {
    id: "prop7",
    title: "Modern Condo",
    address: "789 Downtown Blvd, Los Angeles, CA 90014",
    price: 950000,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1500,
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    isNew: true
  }
];

// Mock agent sold properties
const soldProperties = [
  {
    id: "sold1",
    title: "Elegant Mansion",
    address: "888 Luxury Lane, Beverly Hills, CA 90210",
    price: 7250000,
    bedrooms: 6,
    bathrooms: 7,
    squareFeet: 8500,
    imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    status: "Sold" as const
  },
  {
    id: "sold2",
    title: "Beachfront Property",
    address: "234 Ocean Drive, Malibu, CA 90265",
    price: 5800000,
    bedrooms: 4,
    bathrooms: 4.5,
    squareFeet: 3800,
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    status: "Sold" as const
  }
];

const AgentDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real application, fetch agent data based on ID
  const agent = mockAgent;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Agent Profile */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6 pb-6 border-b">
                  <Avatar className="h-32 w-32">
                    {agent.photoUrl ? (
                      <AvatarImage src={agent.photoUrl} alt={agent.name} />
                    ) : (
                      <AvatarFallback className="bg-realestate-100 text-realestate-700 text-xl">
                        {agent.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  
                  <div className="text-center md:text-left">
                    <h1 className="text-3xl font-bold">{agent.name}</h1>
                    <p className="text-lg text-gray-600 mb-2">{agent.title}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                      {agent.specialty && (
                        <Badge className="bg-realestate-100 text-realestate-700 border-realestate-200">
                          {agent.specialty}
                        </Badge>
                      )}
                      {agent.isFeatured && (
                        <Badge className="bg-amber-100 text-amber-700 border-amber-200">
                          <Star className="h-3 w-3 mr-1 fill-amber-500 text-amber-500" />
                          Featured Agent
                        </Badge>
                      )}
                      <Badge variant="outline">
                        {agent.experience}+ Years Experience
                      </Badge>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button asChild variant="outline" size="sm" className="flex items-center">
                        <a href={`mailto:${agent.email}`}>
                          <Mail className="h-4 w-4 mr-2" />
                          {agent.email}
                        </a>
                      </Button>
                      
                      <Button asChild variant="outline" size="sm" className="flex items-center">
                        <a href={`tel:${agent.phone}`}>
                          <Phone className="h-4 w-4 mr-2" />
                          {agent.phone}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <Tabs defaultValue="about" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="about">About</TabsTrigger>
                    <TabsTrigger value="expertise">Expertise</TabsTrigger>
                    <TabsTrigger value="stats">Statistics</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="about" className="mt-0">
                    <p className="text-gray-700 whitespace-pre-line mb-6">
                      {agent.bio}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold mb-2 flex items-center">
                          <Award className="h-4 w-4 mr-1 text-realestate-600" />
                          Certifications
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          {agent.certifications.map((cert, index) => (
                            <li key={index}>{cert}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2 flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-realestate-600" />
                          Areas Served
                        </h3>
                        <div className="flex flex-wrap gap-1">
                          {agent.areas.map((area, index) => (
                            <Badge key={index} variant="secondary">
                              {area}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="expertise" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-2 flex items-center">
                          <FileText className="h-4 w-4 mr-1 text-realestate-600" />
                          Specialties
                        </h3>
                        <p className="text-gray-700 mb-4">
                          {agent.specialty} specialist with expertise in luxury properties, investment opportunities, and first-time homebuyers.
                        </p>
                        
                        <h3 className="font-semibold mb-2 flex items-center">
                          <ClipboardCheck className="h-4 w-4 mr-1 text-realestate-600" />
                          Languages
                        </h3>
                        <div className="flex flex-wrap gap-1">
                          {agent.languages.map((language, index) => (
                            <Badge key={index} variant="outline">
                              {language}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-3">Top Services</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-realestate-500 mr-2"></div>
                            <span>Expert market analysis</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-realestate-500 mr-2"></div>
                            <span>Personalized property search</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-realestate-500 mr-2"></div>
                            <span>Professional photography and staging</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-realestate-500 mr-2"></div>
                            <span>Contract negotiation</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 rounded-full bg-realestate-500 mr-2"></div>
                            <span>Virtual tours and marketing</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="stats" className="mt-0">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <BarChart className="h-8 w-8 mx-auto mb-2 text-realestate-600" />
                        <p className="font-bold text-2xl text-realestate-700">{agent.stats.totalSales}</p>
                        <p className="text-gray-600 text-sm">Total Sales</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <FileText className="h-8 w-8 mx-auto mb-2 text-realestate-600" />
                        <p className="font-bold text-2xl text-realestate-700">{agent.stats.activeListings}</p>
                        <p className="text-gray-600 text-sm">Active Listings</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <ClipboardCheck className="h-8 w-8 mx-auto mb-2 text-realestate-600" />
                        <p className="font-bold text-2xl text-realestate-700">{agent.stats.soldLastYear}</p>
                        <p className="text-gray-600 text-sm">Sold Last Year</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <Clock className="h-8 w-8 mx-auto mb-2 text-realestate-600" />
                        <p className="font-bold text-2xl text-realestate-700">{agent.stats.averageDaysOnMarket}</p>
                        <p className="text-gray-600 text-sm">Avg Days on Market</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            {/* Agent Listings */}
            <div>
              <Tabs defaultValue="active" className="w-full">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Listings</h2>
                  <TabsList>
                    <TabsTrigger value="active">Active ({agentListings.length})</TabsTrigger>
                    <TabsTrigger value="sold">Sold ({soldProperties.length})</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="active" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {agentListings.map(property => (
                      <PropertyCard key={property.id} {...property} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="sold" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {soldProperties.map(property => (
                      <PropertyCard key={property.id} {...property} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div>
            {/* Contact Form */}
            <ContactForm agentId={agent.id} />
            
            {/* Testimonials */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Client Testimonials</h3>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center text-amber-500 mb-2">
                      {Array(5).fill(0).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-500" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-2">
                      "Sarah went above and beyond to find us our dream home. Her knowledge of the market and negotiating skills saved us thousands!"
                    </p>
                    <p className="text-sm text-gray-600">- John & Lisa M.</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center text-amber-500 mb-2">
                      {Array(5).fill(0).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-500" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-2">
                      "Working with Sarah to sell our home was a fantastic experience. She sold our property in just 2 weeks for above asking price!"
                    </p>
                    <p className="text-sm text-gray-600">- Rebecca T.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

// Import the Clock icon that was missing
const Clock = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
};

export default AgentDetail;
