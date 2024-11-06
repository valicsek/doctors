'use client'

import { useTranslations } from 'next-intl'
import { DoctorList } from '@/components/doctor-list'
import { SpecialtyGrid } from '@/components/specialty-grid'
import { SearchBox } from '@/components/search/search-box'

export default function Home() {
    const t = useTranslations('HomePage')

    return (
        <main className="flex-1 space-y-4">
            {/* Hero Section */}
            <div className="bg-primary text-white relative">
                <div className="max-w-5xl mx-auto px-4 py-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {t('heroSection.title')}
                    </h1>
                    <p className="text-xl opacity-90 mb-8">
                        {t('heroSection.description')}
                    </p>
                    {/* Search Box */}
                    <SearchBox />
                </div>
            </div>

            {/* Popular Specialties */}
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-8">
                    {t('popularSpecialties.title')}
                </h2>
                <SpecialtyGrid />
            </div>

            {/* Featured Doctors */}
            <div>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-8">
                        {t('featuredDoctors.title')}
                    </h2>
                    <DoctorList featured limit={4} />
                </div>
            </div>
        </main>
    )
}
