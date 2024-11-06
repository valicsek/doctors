"use client";

import { MapPin, Star, Phone, Mail, Globe, Clock } from "lucide-react";
import Image from "next/image";
import { DoctorSchedule } from "./doctor-schedule";
import { defaultWeeklySchedule } from "@/lib/data";
import type { Doctor } from "@/lib/data";

interface DoctorProfileProps {
  doctor: Doctor;
}

export function DoctorProfile({ doctor }: DoctorProfileProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative w-full md:w-64 h-64 md:h-80 flex-shrink-0">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 256px"
              />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-3xl font-bold">{doctor.name}</h1>
                {doctor.rating && (
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="ml-1 font-medium">{doctor.rating}</span>
                  </div>
                )}
              </div>

              <p className="text-xl text-gray-600 mb-6">{doctor.specialty}</p>

              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>{doctor.city}</span>
                </div>

                {doctor.phone && (
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-5 w-5 mr-3" />
                    <span>{doctor.phone}</span>
                  </div>
                )}

                {doctor.availability && (
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-3" />
                    <span>{doctor.availability}</span>
                  </div>
                )}

                <div className="flex items-center text-gray-600">
                  <Globe className="h-5 w-5 mr-3" />
                  <span>Languages: {doctor.languages.join(", ")}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="flex flex-wrap gap-4">
                  <div className="bg-blue-50 px-4 py-2 rounded-md">
                    <p className="text-sm text-gray-600">Consultation fee</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {doctor.price.toLocaleString()} Ft
                    </p>
                  </div>

                  {doctor.acceptsCard && (
                    <div className="bg-green-50 px-4 py-2 rounded-md">
                      <p className="text-sm text-gray-600">Payment</p>
                      <p className="text-lg font-semibold text-gray-900">Card accepted</p>
                    </div>
                  )}

                  {doctor.acceptsHealthInsurance && (
                    <div className="bg-purple-50 px-4 py-2 rounded-md">
                      <p className="text-sm text-gray-600">Insurance</p>
                      <p className="text-lg font-semibold text-gray-900">Health insurance accepted</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-6">Available Appointments</h2>
        <DoctorSchedule schedule={defaultWeeklySchedule} doctorId={doctor.id} />
      </div>
    </div>
  );
}