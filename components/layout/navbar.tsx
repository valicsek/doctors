"use client";

import { Search } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center">
            <Search className="h-6 w-6 mr-2" />
            <span className="text-xl font-bold">DoctorFinder</span>
          </Link>

          <div className="flex items-center gap-4">
            <button className="text-white hover:text-white/90 px-4 py-2 rounded-md transition-colors">
              For Doctors
            </button>
            <button className="bg-white text-primary hover:bg-white/90 px-4 py-2 rounded-md transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}