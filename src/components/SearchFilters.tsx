
import React from 'react';
import { Search, ChevronDown, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SearchFiltersProps {
  className?: string;
  onSearch?: (filters: any) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ className, onSearch }) => {
  const [location, setLocation] = React.useState('');
  const [propertyType, setPropertyType] = React.useState('');
  const [minPrice, setMinPrice] = React.useState(0);
  const [maxPrice, setMaxPrice] = React.useState(2000000);
  const [bedrooms, setBedrooms] = React.useState('');
  const [bathrooms, setBathrooms] = React.useState('');
  const [moreFilters, setMoreFilters] = React.useState<Record<string, any>>({});
  const [activeFilters, setActiveFilters] = React.useState<string[]>([]);

  const handleSearch = () => {
    const filters = {
      location,
      propertyType,
      price: { min: minPrice, max: maxPrice },
      bedrooms: bedrooms || 'Any',
      bathrooms: bathrooms || 'Any',
      ...moreFilters,
    };
    
    // Update active filters for display
    const newActiveFilters = [];
    if (location) newActiveFilters.push(`Location: ${location}`);
    if (propertyType) newActiveFilters.push(`Type: ${propertyType}`);
    if (bedrooms) newActiveFilters.push(`${bedrooms}+ Beds`);
    if (bathrooms) newActiveFilters.push(`${bathrooms}+ Baths`);
    newActiveFilters.push(`Price: $${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}`);
    
    setActiveFilters(newActiveFilters);
    if (onSearch) onSearch(filters);
  };

  const handleRemoveFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
    
    // Reset the corresponding filter
    if (filter.includes('Location')) setLocation('');
    if (filter.includes('Type')) setPropertyType('');
    if (filter.includes('Beds')) setBedrooms('');
    if (filter.includes('Baths')) setBathrooms('');
    // We don't reset price range here as it would require more complex logic
  };
  
  const handleClearAllFilters = () => {
    setLocation('');
    setPropertyType('');
    setMinPrice(0);
    setMaxPrice(2000000);
    setBedrooms('');
    setBathrooms('');
    setMoreFilters({});
    setActiveFilters([]);
  };

  const formatPrice = (value: number) => {
    return `$${value.toLocaleString()}`;
  };

  return (
    <div className={cn("bg-white p-4 rounded-lg shadow-md", className)}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <Input 
            placeholder="City, ZIP, Neighborhood" 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger>
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Any</SelectItem>
              <SelectItem value="single-family">Single Family</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
              <SelectItem value="multi-family">Multi-Family</SelectItem>
              <SelectItem value="land">Land</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <span>{formatPrice(minPrice)} - {formatPrice(maxPrice)}</span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4 p-2">
                <h4 className="font-medium">Price Range</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{formatPrice(minPrice)}</span>
                    <span>{formatPrice(maxPrice)}</span>
                  </div>
                  <Slider
                    defaultValue={[minPrice, maxPrice]}
                    min={0}
                    max={2000000}
                    step={50000}
                    onValueChange={([min, max]) => {
                      setMinPrice(min);
                      setMaxPrice(max);
                    }}
                  />
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
          <Select value={bedrooms} onValueChange={setBedrooms}>
            <SelectTrigger>
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Any</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
              <SelectItem value="5">5+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
          <Select value={bathrooms} onValueChange={setBathrooms}>
            <SelectTrigger>
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Any</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex flex-wrap gap-2 mb-2 md:mb-0">
          {activeFilters.map((filter, index) => (
            <Badge key={index} variant="secondary" className="flex items-center gap-1">
              {filter}
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => handleRemoveFilter(filter)} 
              />
            </Badge>
          ))}
          {activeFilters.length > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-xs h-6"
              onClick={handleClearAllFilters}
            >
              Clear All
            </Button>
          )}
        </div>
        
        <Button 
          onClick={handleSearch}
          className="bg-realestate-600 hover:bg-realestate-700"
        >
          <Search className="h-4 w-4 mr-2" />
          Search Properties
        </Button>
      </div>
    </div>
  );
};

export default SearchFilters;
