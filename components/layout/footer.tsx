"use client";

import Link from "next/link";
import { specialties } from "@/components/specialty-grid";

export function Footer() {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Medical Specialties</h3>
            <div className="grid grid-cols-2 gap-2">
              {specialties.slice(0, 8).map((specialty) => (
                <Link
                  key={specialty.name}
                  href={`/specialty/${specialty.slug}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {specialty.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Cities</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/city/budapest" className="text-gray-600 hover:text-blue-600">Budapest</Link>
              <Link href="/city/debrecen" className="text-gray-600 hover:text-blue-600">Debrecen</Link>
              <Link href="/city/szeged" className="text-gray-600 hover:text-blue-600">Szeged</Link>
              <Link href="/city/pecs" className="text-gray-600 hover:text-blue-600">Pécs</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-600">
              DoctorFinder helps you find the right healthcare professional in your area. 
              Browse through our network of qualified doctors and specialists.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-gray-500">
          <p>© {new Date().getFullYear()} DoctorFinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}