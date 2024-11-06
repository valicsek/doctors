"use client";

import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import { DoctorSchedule, type DaySchedule } from "./doctor-schedule";
import Link from "next/link";
import { slugify } from "@/lib/utils";
import { type Doctor } from "@/lib/data";

interface DoctorCardProps {
  doctor: Doctor;
  schedule: DaySchedule[];
}

export function DoctorCard({ doctor, schedule }: DoctorCardProps) {
  const doctorProfileUrl = `/${slugify(doctor.specialty)}/${slugify(doctor.name)}/${doctor.id}`;

  return (
    <div className="bg-white shadow-sm overflow-hidden border">
      <div className="space-y-6">
        <div className="p-4">
          <div className="flex gap-6">
            <div className="relative w-40 h-40 flex-shrink-0">
              <Image src={doctor.image} alt={doctor.name} fill className="object-cover rounded-lg" sizes="160px" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-col h-full justify-between">
                <div className="space-y-1">
                  <div>
                    <Link href={doctorProfileUrl} className="hover:text-primary">
                      <div className="flex items-center gap-2 mb-2">
                        <h2 className="text-2xl font-semibold truncate">{doctor.name}</h2>
                        {doctor.rating && (
                          <div className="flex ml-auto bg-yellow-400 p-1 rounded-lg items-center text-white">
                            <Star className="h-4 w-4 fill-current" />
                            <span className="ml-1 text-sm">{doctor.rating} vélemény</span>
                          </div>
                        )}
                      </div>
                    </Link>
                    <p className="text-gray-600">{doctor.specialty}</p>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{doctor.city}</span>
                  </div>
                  <div className="text-gray-600">
                    <span className="font-medium">Languages:</span> {doctor.languages.join(", ")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule Section */}
        <div className="border-t pt-4 bg-gray-50 p-4">
          <DoctorSchedule schedule={schedule} doctorId={doctor.id} />
        </div>
      </div>
    </div>
  );
}
