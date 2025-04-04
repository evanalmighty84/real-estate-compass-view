
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Bed, Bath, Grid3X3, LayoutGrid, List } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import SearchFilters from "@/components/SearchFilters";
import { cn } from "@/lib/utils";

// Mock data for properties
const mockProperties = [
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
    imageUrl: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    status: "Pending" as const
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
  },
  {
    id: "prop8",
    title: "Suburban Ranch",
    address: "456 Oak Street, Burbank, CA 91502",
    price: 1200000,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1900,
    imageUrl: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Properties = () => {
  const location = useLocation();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortOrder, setSortOrder] = useState<string>('price-asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProperties, setFilteredProperties] = useState(mockProperties);

  // Parse query params from URL
  const queryParams = new URLSearchParams(location.search);
  const typeFromUrl = queryParams.get('type');

  React.useEffect(() => {
    // Apply filter from URL if present
    if (typeFromUrl) {
      setFilteredProperties(mockProperties.filter(property => 
        property.title.toLowerCase().includes(typeFromUrl) ||
        property.address.toLowerCase().includes(typeFromUrl)
      ));
    } else {
      setFilteredProperties(mockProperties);
    }
  }, [typeFromUrl]);

  const handleSearchFilters = (filters: any) => {
    console.log("Search filters:", filters);
    // In a real application, this would filter the properties based on the criteria
    // For now, we'll just log the filters and use the mock data
  };

  const handleSortChange = (value: string) => {
    setSortOrder(value);
    
    const sortedProperties = [...filteredProperties];
    
    switch (value) {
      case 'price-asc':
        sortedProperties.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sortedProperties.sort((a, b) => b.price - a.price);
        break;
      case 'date-new':
        // In a real application, you would sort by date
        // For this mock, we'll just randomize to simulate
        sortedProperties.sort(() => Math.random() - 0.5);
        break;
      case 'beds-desc':
        sortedProperties.sort((a, b) => b.bedrooms - a.bedrooms);
        break;
      case 'sqft-desc':
        sortedProperties.sort((a, b) => b.squareFeet - a.squareFeet);
        break;
      default:
        break;
    }
    
    setFilteredProperties(sortedProperties);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Property Listings</h1>
        
        <SearchFilters 
          className="mb-8"
          onSearch={handleSearchFilters}
        />
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <p className="text-gray-600">{filteredProperties.length} properties found</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="mr-2 text-sm text-gray-600">Sort by:</span>
              <Select value={sortOrder} onValueChange={handleSortChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                  <SelectItem value="price-desc">Price (High to Low)</SelectItem>
                  <SelectItem value="date-new">Newest First</SelectItem>
                  <SelectItem value="beds-desc">Most Bedrooms</SelectItem>
                  <SelectItem value="sqft-desc">Largest Size</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex border rounded-md">
              <Button 
                variant="ghost" 
                size="sm"
                className={cn(
                  "rounded-r-none", 
                  viewMode === 'grid' ? "bg-gray-100" : ""
                )}
                onClick={() => setViewMode('grid')}
              >
                <LayoutGrid size={16} />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                className={cn(
                  "rounded-l-none", 
                  viewMode === 'list' ? "bg-gray-100" : ""
                )}
                onClick={() => setViewMode('list')}
              >
                <List size={16} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className={cn(
          viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
            : "flex flex-col gap-4"
        )}>
          {filteredProperties.map((property) => (
            <PropertyCard 
              key={property.id} 
              {...property} 
              className={viewMode === 'list' ? "w-full" : ""}
            />
          ))}
        </div>
        
        <Pagination className="my-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      
      <Footer />
    </div>
  );
};

export default Properties;
