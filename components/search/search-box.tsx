'use client'

import { Search, MapPin } from 'lucide-react'
import { useRouter, useParams } from 'next/navigation'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { doctors } from '@/lib/data'

const cities = [
    'Budapest',
    'Debrecen',
    'Szeged',
    'Miskolc',
    'Pécs',
    'Győr',
    'Nyíregyháza',
    'Kecskemét',
]

export function SearchBox() {
    const t = useTranslations('HomePage.searchBox')
    const router = useRouter()
    const params = useParams()
    const locale = params.locale as string

    const [searchTerm, setSearchTerm] = useState('')
    const [city, setCity] = useState('')
    const [showSuggestions, setShowSuggestions] = useState(false)

    // Get unique specialties from doctors
    const specialties = Array.from(new Set(doctors.map((doc) => doc.specialty)))

    // Filter suggestions based on search term
    const suggestions =
        searchTerm.length > 1
            ? [...specialties, ...doctors.map((d) => d.name)]
                  .filter((item) =>
                      item.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .slice(0, 5)
            : []

    const handleSearch = () => {
        // Check if the search term matches a doctor's name
        const doctorMatch = doctors.find(
            (d) => d.name.toLowerCase() === searchTerm.toLowerCase()
        )

        if (doctorMatch) {
            // If it's a doctor's name, redirect to their profile
            router.push(
                `/${locale}/${doctorMatch.specialty.toLowerCase()}/${doctorMatch.name.toLowerCase().replace(/\s+/g, '-')}/${doctorMatch.id}`
            )
        } else {
            // Otherwise, search with filters
            const params = new URLSearchParams()
            if (searchTerm) params.set('specialty', searchTerm)
            if (city) params.set('city', city)

            router.push(`/${locale}/doctors?${params.toString()}`)
        }
        setShowSuggestions(false)
    }

    const handleSuggestionClick = (suggestion: string) => {
        setSearchTerm(suggestion)
        setShowSuggestions(false)
    }

    return (
        <div className="flex flex-col md:flex-row relative">
            <div className="relative flex-1">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                    type="text"
                    placeholder={t('specialtyPlaceholder')}
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                        setShowSuggestions(true)
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-l-full md:rounded-l-full md:rounded-r-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                {/* Suggestions dropdown */}
                {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                        {suggestions.map((suggestion, index) => (
                            <div
                                key={index}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() =>
                                    handleSuggestionClick(suggestion)
                                }
                            >
                                {suggestion}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="relative flex-1">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 md:rounded-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none bg-white text-gray-500"
                >
                    <option value="">{t('cityPlaceholder')}</option>
                    {cities.map((city) => (
                        <option key={city} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
            </div>

            <button
                onClick={handleSearch}
                className="px-8 py-3 bg-secondary text-white rounded-r-full md:rounded-r-full md:rounded-l-none hover:bg-primary/90 transition-colors"
            >
                {t('searchButton')}
            </button>
        </div>
    )
}
