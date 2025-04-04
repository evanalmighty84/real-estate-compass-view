
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface AgentCardProps {
  id: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  photoUrl?: string;
  specialty?: string;
  isFeatured?: boolean;
  listingCount?: number;
  className?: string;
}

const AgentCard: React.FC<AgentCardProps> = ({
  id,
  name,
  title,
  email,
  phone,
  photoUrl,
  specialty,
  isFeatured = false,
  listingCount = 0,
  className,
}) => {
  return (
    <div className={cn(
      "featured-agent bg-white rounded-lg p-4 shadow-md transition-all duration-300",
      className
    )}>
      <div className="flex flex-col items-center text-center mb-4">
        <Avatar className="h-24 w-24 mb-3">
          {photoUrl ? (
            <AvatarImage src={photoUrl} alt={name} />
          ) : (
            <AvatarFallback className="bg-realestate-100 text-realestate-700 text-xl">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          )}
        </Avatar>
        
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-600 text-sm">{title}</p>
        
        {specialty && (
          <Badge variant="outline" className="mt-2">
            {specialty}
          </Badge>
        )}
        
        {isFeatured && (
          <Badge className="mt-2 bg-amber-500">
            Featured Agent
          </Badge>
        )}
        
        {listingCount > 0 && (
          <p className="text-sm text-gray-500 mt-2">
            {listingCount} active listing{listingCount !== 1 ? 's' : ''}
          </p>
        )}
      </div>
      
      <div className="flex flex-col space-y-2">
        <Button asChild variant="outline" size="sm" className="flex items-center">
          <a href={`mailto:${email}`}>
            <Mail className="h-4 w-4 mr-2" />
            Email
          </a>
        </Button>
        
        <Button asChild variant="outline" size="sm" className="flex items-center">
          <a href={`tel:${phone}`}>
            <Phone className="h-4 w-4 mr-2" />
            Call
          </a>
        </Button>
        
        <Button asChild variant="default" size="sm" className="bg-realestate-600 hover:bg-realestate-700">
          <Link to={`/agents/${id}`}>
            View Profile
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default AgentCard;
