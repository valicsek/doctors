'use client'

import { useRouter, useParams } from 'next/navigation'
import Image from 'next/image'
import { specialties } from '@/lib/specialties'
import { useTranslations } from 'next-intl'

export function SpecialtyGrid() {
    const router = useRouter()
    const params = useParams()
    const locale = params.locale as string
    const t = useTranslations('Specialties')

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {specialties.map((specialty) => (
                <div
                    key={specialty.name}
                    className="relative group cursor-pointer overflow-hidden rounded-lg"
                    onClick={() =>
                        router.push(`/${locale}/specialty/${specialty.slug}`)
                    }
                >
                    <div className="relative h-48">
                        <Image
                            src={specialty.image}
                            alt={specialty.name}
                            fill
                            className="object-cover transition-transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                            {locale === 'en'
                                ? specialty.nameEn
                                : specialty.name}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
    )
}
