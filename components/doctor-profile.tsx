'use client'

import { MapPin, Star } from 'lucide-react'
import Image from 'next/image'
import { DoctorSchedule } from './doctor-schedule'
import { defaultWeeklySchedule } from '@/lib/data'
import type { Doctor } from '@/lib/data'
import { useTranslations } from 'next-intl'

interface DoctorProfileProps {
    doctor: Doctor
}

function RatingStars({ rating }: { rating: number }) {
    return (
        <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    className={`h-5 w-5 ${
                        star <= rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300 fill-current'
                    }`}
                />
            ))}
        </div>
    )
}

export function DoctorProfile({ doctor }: DoctorProfileProps) {
    const t = useTranslations('Doctor')

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
                            <div className="flex flex-col gap-2 mb-4">
                                <h1 className="text-3xl font-bold">
                                    {doctor.name}
                                </h1>
                                {doctor.rating && (
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1">
                                            <RatingStars
                                                rating={doctor.rating}
                                            />
                                            <span className="text-lg font-medium text-gray-700">
                                                {doctor.rating}
                                            </span>
                                        </div>
                                        <span className="text-gray-500">
                                            (176 {t('reviews', { count: 176 })})
                                        </span>
                                    </div>
                                )}
                            </div>

                            <p className="text-xl text-gray-600 mb-6">
                                {doctor.specialty}
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center text-gray-600">
                                    <MapPin className="h-5 w-5 mr-3" />
                                    <span>{doctor.city}</span>
                                </div>

                                <div className="text-gray-600">
                                    <span className="font-medium">
                                        {t('languages')}:
                                    </span>{' '}
                                    {doctor.languages.join(', ')}
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t">
                                <div className="flex flex-wrap gap-4">
                                    <div className="bg-blue-50 px-4 py-2 rounded-md">
                                        <p className="text-sm text-gray-600">
                                            {t('consultationFee')}
                                        </p>
                                        <p className="text-lg font-semibold text-gray-900">
                                            {doctor.price.toLocaleString()} Ft
                                        </p>
                                    </div>

                                    {doctor.acceptsCard && (
                                        <div className="bg-green-50 px-4 py-2 rounded-md">
                                            <p className="text-sm text-gray-600">
                                                {t('paymentMethods')}
                                            </p>
                                            <p className="text-lg font-semibold text-gray-900">
                                                {t('cardAccepted')}
                                            </p>
                                        </div>
                                    )}

                                    {doctor.acceptsHealthInsurance && (
                                        <div className="bg-purple-50 px-4 py-2 rounded-md">
                                            <p className="text-sm text-gray-600">
                                                {t('paymentMethods')}
                                            </p>
                                            <p className="text-lg font-semibold text-gray-900">
                                                {t('healthInsurance')}
                                            </p>
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
                <h2 className="text-xl font-semibold mb-6">
                    {t('availableAppointments')}
                </h2>
                <DoctorSchedule
                    schedule={defaultWeeklySchedule}
                    doctorId={doctor.id}
                />
            </div>
        </div>
    )
}
