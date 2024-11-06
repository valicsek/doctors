'use client'

import { MapPin, Star } from 'lucide-react'
import Image from 'next/image'
import type { Doctor } from '@/lib/data'

interface DoctorDetailsProps {
    doctor: Doctor
    selectedSlot: string
}

export function DoctorDetails({ doctor, selectedSlot }: DoctorDetailsProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
                <div className="flex flex-col gap-6">
                    <div className="relative w-full h-48 md:h-64">
                        <Image
                            src={doctor.image}
                            alt={doctor.name}
                            fill
                            className="object-cover rounded-lg"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <h1 className="text-2xl font-bold">
                                {doctor.name}
                            </h1>
                            {doctor.rating && (
                                <div className="flex items-center text-yellow-500">
                                    <Star className="h-5 w-5 fill-current" />
                                    <span className="ml-1 font-medium">
                                        {doctor.rating}
                                    </span>
                                </div>
                            )}
                        </div>

                        <p className="text-xl text-gray-600 mb-6">
                            {doctor.specialty}
                        </p>

                        <div className="flex items-center text-gray-600 mb-6">
                            <MapPin className="h-5 w-5 mr-3" />
                            <span>{doctor.city}</span>
                        </div>

                        <div className="space-y-4 border-t pt-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 px-4 py-3 rounded-md">
                                    <p className="text-sm text-gray-600">
                                        Selected Time
                                    </p>
                                    <p className="text-lg font-semibold text-gray-900">
                                        {decodeURIComponent(selectedSlot)}
                                    </p>
                                </div>

                                <div className="bg-green-50 px-4 py-3 rounded-md">
                                    <p className="text-sm text-gray-600">
                                        Consultation fee
                                    </p>
                                    <p className="text-lg font-semibold text-gray-900">
                                        {doctor.price.toLocaleString()} Ft
                                    </p>
                                </div>
                            </div>

                            {doctor.acceptsCard && (
                                <div className="bg-gray-50 px-4 py-3 rounded-md text-center">
                                    <p className="text-sm text-gray-600">
                                        Payment Method
                                    </p>
                                    <p className="text-lg font-semibold text-gray-900">
                                        Card payment available
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
