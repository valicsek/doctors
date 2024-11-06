'use client'

import { DoctorCard } from './doctor-card'
import {
    type Doctor,
    doctors as doctorData,
    defaultWeeklySchedule,
} from '@/lib/data'

interface DoctorListProps {
    specialty?: string
    city?: string
    featured?: boolean
    limit?: number
    searchTerm?: string
    minRating?: number
    priceRange?: [number, number]
    languages?: string[]
    hasDiscount?: boolean
    acceptsCard?: boolean
    acceptsHealthInsurance?: boolean
}

export function DoctorList({
    specialty,
    city,
    featured,
    limit,
    searchTerm = '',
    minRating = 0,
    priceRange = [0, Infinity],
    languages = [],
    hasDiscount,
    acceptsCard,
    acceptsHealthInsurance,
}: DoctorListProps) {
    let filteredDoctors = doctorData.filter((doctor) => {
        const matchesSpecialty =
            !specialty ||
            doctor.specialty.toLowerCase() === specialty.toLowerCase()
        const matchesCity =
            !city || doctor.city.toLowerCase() === city.toLowerCase()
        const matchesFeatured = !featured || doctor.featured === true
        const matchesSearch =
            !searchTerm ||
            doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesRating = doctor.rating ? doctor.rating >= minRating : false
        const matchesPrice =
            doctor.price >= priceRange[0] && doctor.price <= priceRange[1]
        const matchesLanguages =
            languages.length === 0 ||
            languages.some((lang) => doctor.languages.includes(lang))
        const matchesDiscount = !hasDiscount || doctor.hasDiscount
        const matchesCard = !acceptsCard || doctor.acceptsCard
        const matchesInsurance =
            !acceptsHealthInsurance || doctor.acceptsHealthInsurance

        return (
            matchesSpecialty &&
            matchesCity &&
            matchesFeatured &&
            matchesSearch &&
            matchesRating &&
            matchesPrice &&
            matchesLanguages &&
            matchesDiscount &&
            matchesCard &&
            matchesInsurance
        )
    })

    if (limit) {
        filteredDoctors = filteredDoctors.slice(0, limit)
    }

    return (
        <div className="space-y-6">
            {filteredDoctors.map((doctor) => (
                <DoctorCard
                    key={doctor.id}
                    doctor={doctor}
                    schedule={defaultWeeklySchedule}
                />
            ))}

            {filteredDoctors.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-xl text-gray-600">
                        No doctors found matching your criteria. Please try
                        different search terms.
                    </p>
                </div>
            )}
        </div>
    )
}
