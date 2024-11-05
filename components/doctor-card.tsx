"use client";

import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import { DoctorSchedule, type DaySchedule } from "./doctor-schedule";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  city: string;
  image: string;
  phone?: string;
  availability?: string;
  featured?: boolean;
  rating?: number;
  price: number;
  languages: string[];
  hasDiscount?: boolean;
  acceptsCard?: boolean;
  acceptsHealthInsurance?: boolean;
}

interface DoctorCardProps {
  doctor: Doctor;
  schedule: DaySchedule[];
}

export function DoctorCard({ doctor, schedule }: DoctorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 space-y-6">
        {/* Doctor Info Section */}
        <div className="flex gap-6">
          <div className="relative w-40 h-40 flex-shrink-0">
            <Image
              src={doctor.image}
              alt={doctor.name}
              fill
              className="object-cover rounded-lg"
              sizes="160px"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex flex-col h-full justify-between">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-2xl font-semibold truncate">{doctor.name}</h2>
                    {doctor.rating && (
                      <div className="flex items-center text-yellow-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="ml-1 text-sm">{doctor.rating}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-lg text-gray-600 mb-4">{doctor.specialty}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{doctor.city}</span>
                  </div>
                  <div className="text-gray-600">
                    <span className="font-medium">Languages:</span>{" "}
                    {doctor.languages.join(", ")}
                  </div>
                  <div className="text-gray-600">
                    <span className="font-medium">Price:</span>{" "}
                    {doctor.price.toLocaleString()} Ft
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule Section */}
        <div className="border-t pt-4">
          <h3 className="font-medium mb-4">Weekly Schedule</h3>
          <DoctorSchedule schedule={schedule} doctorId={doctor.id} />
        </div>
      </div>
    </div>
  );
}