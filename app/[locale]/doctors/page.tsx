'use client';

import {DoctorList} from '@/components/doctor-list';
import {DoctorFilters} from '@/components/doctor-filters';
import {useSearchParams} from 'next/navigation';
import {useState, useEffect} from 'react';

export default function DoctorsPage() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState({
    specialty: searchParams.get('specialty') ?? undefined,
    city: searchParams.get('city') ?? undefined,
    search: searchParams.get('search') ?? '',
    location: '', // Added missing required location field
    rating: 0,
    priceRange: [4000, 89000] as [number, number],
    languages: [] as string[],
    hasDiscount: false,
    acceptsCard: false,
    acceptsHealthInsurance: false
  });

  // Update filters when search params change
  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      specialty: searchParams.get('specialty') ?? undefined,
      city: searchParams.get('city') ?? undefined,
      search: searchParams.get('search') ?? ''
    }));
  }, [searchParams]);

  return (
    <main className="flex-1 bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Search Results</h1>
          <p className="text-muted-foreground">
            Healthcare professionals matching your criteria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-6">
          <DoctorFilters
            initialFilters={filters}
            onFilterChange={(newFilters) => {
              setFilters((prev) => ({
                ...prev,
                ...newFilters
              }));
            }}
          />
          <DoctorList
            specialty={filters.specialty}
            city={filters.city}
            searchTerm={filters.search}
            minRating={filters.rating}
            priceRange={filters.priceRange}
            languages={filters.languages}
            hasDiscount={filters.hasDiscount}
            acceptsCard={filters.acceptsCard}
            acceptsHealthInsurance={filters.acceptsHealthInsurance}
          />
        </div>
      </div>
    </main>
  );
}
