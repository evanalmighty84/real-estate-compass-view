
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import AgentCard from "@/components/AgentCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock data for agents
const mockAgents = [
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
  {
    id: "agent4",
    name: "Robert Martinez",
    title: "Luxury Home Specialist",
    email: "robert@realestateidx.com",
    phone: "555-456-7890",
    photoUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specialty: "Luxury",
    listingCount: 12
  },
  {
    id: "agent5",
    name: "Emily Wong",
    title: "Residential Expert",
    email: "emily@realestateidx.com",
    phone: "555-567-8901",
    photoUrl: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specialty: "Residential",
    listingCount: 28
  },
  {
    id: "agent6",
    name: "David Wilson",
    title: "Investment Property Specialist",
    email: "david@realestateidx.com",
    phone: "555-678-9012",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specialty: "Investment",
    listingCount: 17
  },
  {
    id: "agent7",
    name: "Amanda Garcia",
    title: "New Development Specialist",
    email: "amanda@realestateidx.com",
    phone: "555-789-0123",
    photoUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specialty: "New Development",
    isFeatured: true,
    listingCount: 9
  },
  {
    id: "agent8",
    name: "James Taylor",
    title: "Vacation Home Specialist",
    email: "james@realestateidx.com",
    phone: "555-890-1234",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    specialty: "Vacation Homes",
    listingCount: 11
  }
];

const Agents = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [specialty, setSpecialty] = React.useState("any");
  const [sortOrder, setSortOrder] = React.useState("listings-desc");
  const [filteredAgents, setFilteredAgents] = React.useState(mockAgents);
  
  const handleSearch = () => {
    let filtered = mockAgents;
    
    if (searchQuery) {
      filtered = filtered.filter(agent => 
        agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.specialty?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (specialty && specialty !== "any") {
      filtered = filtered.filter(agent => 
        agent.specialty?.toLowerCase() === specialty.toLowerCase()
      );
    }
    
    // Sort agents
    switch (sortOrder) {
      case "listings-desc":
        filtered.sort((a, b) => (b.listingCount || 0) - (a.listingCount || 0));
        break;
      case "name-asc":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "featured":
        filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
        break;
      default:
        break;
    }
    
    setFilteredAgents(filtered);
  };
  
  React.useEffect(() => {
    handleSearch();
  }, [sortOrder]); // Re-sort when sort order changes
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Agents</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Search Agents</label>
              <Input
                placeholder="Search by name or specialty"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Specialty</label>
              <Select value={specialty} onValueChange={setSpecialty}>
                <SelectTrigger>
                  <SelectValue placeholder="Any Specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Specialty</SelectItem>
                  <SelectItem value="Residential">Residential</SelectItem>
                  <SelectItem value="Commercial">Commercial</SelectItem>
                  <SelectItem value="Luxury">Luxury</SelectItem>
                  <SelectItem value="Investment">Investment</SelectItem>
                  <SelectItem value="New Development">New Development</SelectItem>
                  <SelectItem value="Vacation Homes">Vacation Homes</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="listings-desc">Most Listings</SelectItem>
                  <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                  <SelectItem value="featured">Featured First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <Button onClick={handleSearch} className="bg-realestate-600 hover:bg-realestate-700">
              <Search className="mr-2 h-4 w-4" />
              Search Agents
            </Button>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-gray-600">{filteredAgents.length} agents found</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAgents.map(agent => (
            <AgentCard key={agent.id} {...agent} />
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

export default Agents;
