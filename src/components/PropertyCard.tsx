
import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface PropertyCardProps {
  id: string;
  title: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  imageUrl: string;
  isNew?: boolean;
  isFeatured?: boolean;
  status?: 'For Sale' | 'For Rent' | 'Sold' | 'Pending';
  className?: string;
}

const PropertyCard = ({
  id,
  title,
  address,
  price,
  bedrooms,
  bathrooms,
  squareFeet,
  imageUrl,
  isNew = false,
  isFeatured = false,
  status = 'For Sale',
  className,
}: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  
  const formatPrice = (price: number) => {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    });
  };
  
  const statusColors = {
    'For Sale': 'bg-green-500',
    'For Rent': 'bg-blue-500',
    'Sold': 'bg-red-500',
    'Pending': 'bg-amber-500',
  };

  return (
    <div 
      className={cn(
        "property-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300",
        className
      )}
    >
      <div className="relative">
        <Link to={`/properties/${id}`}>
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-48 object-cover"
            />
          ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
              No Image Available
            </div>
          )}
        </Link>
        
        <div className="absolute top-0 left-0 p-2 flex gap-2">
          <Badge className={statusColors[status]} variant="secondary">
            {status}
          </Badge>
          
          {isNew && (
            <Badge className="bg-realestate-600">New</Badge>
          )}
          
          {isFeatured && (
            <Badge className="bg-amber-500">Featured</Badge>
          )}
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-0 right-0 m-2 bg-white/80 hover:bg-white"
          onClick={(e) => {
            e.preventDefault();
            setIsFavorite(!isFavorite);
          }}
        >
          <Heart className={cn("h-4 w-4", isFavorite ? "fill-red-500 text-red-500" : "text-gray-600")} />
        </Button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg truncate">{title}</h3>
          <span className="text-realestate-700 font-bold">{formatPrice(price)}</span>
        </div>
        
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin size={14} className="mr-1" />
          <span className="truncate">{address}</span>
        </div>
        
        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <div className="flex items-center text-gray-600">
            <Bed size={16} className="mr-1" />
            <span className="mr-3">{bedrooms}</span>
            <Bath size={16} className="mr-1" />
            <span className="mr-3">{bathrooms}</span>
            <Square size={16} className="mr-1" />
            <span>{squareFeet.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
