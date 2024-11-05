"use client";

import { useState } from "react";
import { Star } from "lucide-react";

interface FilterProps {
  onFilterChange: (filters: FilterState) => void;
}

interface FilterState {
  search: string;
  location: string;
  languages: string[];
  priceRange: [number, number];
  rating: number;
  hasDiscount: boolean;
  acceptsCard: boolean;
  acceptsHealthInsurance: boolean;
}

const languages = ["English", "Hungarian", "German", "French", "Turkish"];
const locations = ["Budapest", "Debrecen", "Szeged", "Pécs", "Győr"];

export function DoctorFilters({ onFilterChange }: FilterProps) {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    location: "",
    languages: [],
    priceRange: [4000, 89000],
    rating: 0,
    hasDiscount: false,
    acceptsCard: false,
    acceptsHealthInsurance: false,
  });

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="w-full md:w-72 bg-white rounded-lg shadow-sm p-6 space-y-6 h-fit">
      <div>
        <h3 className="text-lg font-semibold mb-4">Keresés</h3>
        <input
          type="text"
          placeholder="Keresés..."
          className="w-full px-3 py-2 border rounded-md"
          value={filters.search}
          onChange={(e) => handleFilterChange({ search: e.target.value })}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Helyszín</h3>
        <select
          className="w-full px-3 py-2 border rounded-md"
          value={filters.location}
          onChange={(e) => handleFilterChange({ location: e.target.value })}
        >
          <option value="">Válassz helyszínt</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Beszélt idegen nyelv</h3>
        <select
          className="w-full px-3 py-2 border rounded-md"
          value={filters.languages[0] || ""}
          onChange={(e) =>
            handleFilterChange({ languages: [e.target.value] })
          }
        >
          <option value="">Válassz nyelvet</option>
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Ár</h3>
        <div className="space-y-2">
          <input
            type="range"
            min="4000"
            max="89000"
            value={filters.priceRange[1]}
            onChange={(e) =>
              handleFilterChange({
                priceRange: [filters.priceRange[0], parseInt(e.target.value)],
              })
            }
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>{filters.priceRange[0]} Ft</span>
            <span>{filters.priceRange[1]} Ft</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Értékelés</h3>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              onClick={() => handleFilterChange({ rating })}
              className={`p-1 rounded ${
                filters.rating >= rating ? "text-yellow-500" : "text-gray-300"
              }`}
            >
              <Star className="h-6 w-6 fill-current" />
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.hasDiscount}
            onChange={(e) =>
              handleFilterChange({ hasDiscount: e.target.checked })
            }
            className="rounded border-gray-300 text-primary focus:ring-primary"
          />
          <span>Kedvezményes időpontok</span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.acceptsCard}
            onChange={(e) =>
              handleFilterChange({ acceptsCard: e.target.checked })
            }
            className="rounded border-gray-300 text-primary focus:ring-primary"
          />
          <span>Bankkártyás előre fizetés</span>
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.acceptsHealthInsurance}
            onChange={(e) =>
              handleFilterChange({
                acceptsHealthInsurance: e.target.checked,
              })
            }
            className="rounded border-gray-300 text-primary focus:ring-primary"
          />
          <span>OTP EP kártyás előre fizetés</span>
        </label>
      </div>
    </div>
  );
}