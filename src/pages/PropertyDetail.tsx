
import React from 'react';
import { useParams } from 'react-router-dom';
import { Bed, Bath, Square, MapPin, Calendar, Heart, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import AgentCard from "@/components/AgentCard";
import PropertyCard from "@/components/PropertyCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock property data
const mockProperty = {
  id: "prop1",
  title: "Modern Luxury Villa",
  address: "123 Elegant Street, Beverly Hills, CA 90210",
  price: 3750000,
  bedrooms: 5,
  bathrooms: 4.5,
  squareFeet: 4200,
  yearBuilt: 2019,
  lotSize: "0.75 acres",
  propertyType: "Single Family",
  status: "For Sale" as const,
  description: `This stunning modern luxury villa offers the perfect blend of sophisticated design and comfortable living. The property features an open floor plan with high ceilings and abundant natural light.

The gourmet kitchen includes top-of-the-line appliances, a large center island, and custom cabinetry. The primary suite boasts a spa-like bathroom and spacious walk-in closet.

Additional amenities include a home theater, wine cellar, home office, swimming pool, and landscaped gardens. The property is located in a prestigious neighborhood with easy access to shopping, dining, and entertainment.`,
  features: [
    "Swimming Pool",
    "Home Theater",
    "Wine Cellar",
    "Smart Home System",
    "3-Car Garage",
    "Gourmet Kitchen",
    "Hardwood Floors",
    "Central AC & Heating",
    "Fireplace",
    "Walk-in Closets"
  ],
  images: [
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687644-c7171b46277b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  ],
  virtualTour: true,
  agent: {
    id: "agent1",
    name: "Sarah Johnson",
    title: "Senior Realtor",
    email: "sarah@realestateidx.com",
    phone: "555-123-4567",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specialty: "Luxury Homes",
    isFeatured: true,
    listingCount: 24
  }
};

// Mock similar properties data
const similarProperties = [
  {
    id: "prop2",
    title: "Downtown Penthouse",
    address: "456 Skyline Avenue, Los Angeles, CA 90001",
    price: 2250000,
    bedrooms: 3,
    bathrooms: 3,
    squareFeet: 2100,
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "prop5",
    title: "Mountain Retreat",
    address: "555 Alpine Way, Big Bear, CA 92315",
    price: 850000,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 2200,
    imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "prop6",
    title: "Historic Townhouse",
    address: "321 Heritage Lane, Pasadena, CA 91101",
    price: 1450000,
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 2400,
    imageUrl: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [currentImage, setCurrentImage] = React.useState(0);
  
  // In a real application, you would fetch the property data based on the ID
  const property = mockProperty;
  
  const formatPrice = (price: number) => {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-6">
          <div>
            <Badge className="mb-2">{property.status}</Badge>
            <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin size={16} className="mr-1" />
              {property.address}
            </div>
            <div className="text-2xl font-bold text-realestate-700 mb-4">
              {formatPrice(property.price)}
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setIsFavorite(!isFavorite)}
              className="flex items-center"
            >
              <Heart className={`mr-2 h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
              {isFavorite ? "Saved" : "Save"}
            </Button>
            
            <Button
              variant="outline"
              className="flex items-center"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
        
        {/* Property Images */}
        <div className="mb-8">
          <div className="grid grid-cols-1 gap-4">
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <img 
                src={property.images[currentImage]} 
                alt={property.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {property.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentImage === index ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-5 gap-2">
              {property.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`relative rounded-md overflow-hidden ${
                    currentImage === index ? 'ring-2 ring-realestate-600' : ''
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`View ${index + 1}`} 
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Property Details */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-6 mb-6 border-b pb-6">
                  <div className="flex items-center">
                    <Bed size={20} className="mr-2 text-realestate-600" />
                    <div>
                      <p className="text-sm text-gray-500">Bedrooms</p>
                      <p className="font-semibold">{property.bedrooms}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Bath size={20} className="mr-2 text-realestate-600" />
                    <div>
                      <p className="text-sm text-gray-500">Bathrooms</p>
                      <p className="font-semibold">{property.bathrooms}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Square size={20} className="mr-2 text-realestate-600" />
                    <div>
                      <p className="text-sm text-gray-500">Square Feet</p>
                      <p className="font-semibold">{property.squareFeet.toLocaleString()}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar size={20} className="mr-2 text-realestate-600" />
                    <div>
                      <p className="text-sm text-gray-500">Year Built</p>
                      <p className="font-semibold">{property.yearBuilt}</p>
                    </div>
                  </div>
                </div>
                
                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    {property.virtualTour && (
                      <TabsTrigger value="tour">Virtual Tour</TabsTrigger>
                    )}
                  </TabsList>
                  
                  <TabsContent value="description" className="mt-0">
                    <p className="text-gray-700 whitespace-pre-line">{property.description}</p>
                  </TabsContent>
                  
                  <TabsContent value="features" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {property.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-realestate-500 mr-2"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  {property.virtualTour && (
                    <TabsContent value="tour" className="mt-0">
                      <div className="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center text-gray-500">
                        <p>Virtual Tour would be embedded here in a real application</p>
                      </div>
                    </TabsContent>
                  )}
                </Tabs>
              </CardContent>
            </Card>
            
            {/* Similar Properties */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Similar Properties</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {similarProperties.map(property => (
                  <PropertyCard key={property.id} {...property} />
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Contact Form */}
            <ContactForm propertyId={property.id} />
            
            {/* Listing Agent */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Listing Agent</h3>
              <AgentCard {...property.agent} />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;
