
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-realestate-700 text-xl font-bold">RealEstateIDX</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="text-gray-700 hover:text-realestate-600 px-3 py-2 text-sm font-medium">Home</Link>
            <Link to="/properties" className="text-gray-700 hover:text-realestate-600 px-3 py-2 text-sm font-medium">Properties</Link>
            <Link to="/agents" className="text-gray-700 hover:text-realestate-600 px-3 py-2 text-sm font-medium">Agents</Link>
            <Link to="/about" className="text-gray-700 hover:text-realestate-600 px-3 py-2 text-sm font-medium">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-realestate-600 px-3 py-2 text-sm font-medium">Contact</Link>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon">
              <Search className="h-4 w-4" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <User className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link to="/login" className="w-full">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/register" className="w-full">Register</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-realestate-600">Home</Link>
            <Link to="/properties" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-realestate-600">Properties</Link>
            <Link to="/agents" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-realestate-600">Agents</Link>
            <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-realestate-600">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-realestate-600">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
