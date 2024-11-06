'use client'

import { Menu, Search, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

export function Navbar() {
    const pathname = usePathname()
    const currentLocale = pathname.split('/')[1]
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const t = useTranslations('Navbar')

    const locales = routing.locales

    const switchLocale = (locale: string) => {
        const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`)
        window.location.href = newPath
    }

    return (
        <div>
            <nav className="bg-primary text-white">
                <div className="max-w-5xl mx-auto">
                    <div className="flex justify-between h-16 items-center px-4">
                        <div>
                            <Link
                                href={`/${currentLocale}`}
                                className="flex items-center gap-2 justify-center"
                            >
                                <Search className="h-6 w-6 mr-2" />
                                <span className="text-xl font-bold">
                                    Doktorio.com
                                </span>
                            </Link>
                            <span className="text-sm font-bold text-tertiary">
                                {t('bookingsToday', { count: 215 })}
                            </span>
                        </div>

                        <div className="hidden md:flex items-center gap-4">
                            <select
                                value={currentLocale}
                                onChange={(e) => switchLocale(e.target.value)}
                                className="bg-primary text-white border border-white/20 rounded-md px-2 py-1"
                            >
                                {locales.map((locale) => (
                                    <option key={locale} value={locale}>
                                        {locale.toUpperCase()}
                                    </option>
                                ))}
                            </select>
                            <Link
                                href={`/${currentLocale}/for-doctors`}
                                className="text-white hover:text-white/90 px-4 py-2 rounded-md transition-colors"
                            >
                                {t('forDoctors')}
                            </Link>
                            <Link
                                href={`/${currentLocale}/signin`}
                                className="bg-white text-primary hover:bg-white/90 px-4 py-2 rounded-md transition-colors"
                            >
                                {t('signIn')}
                            </Link>
                        </div>

                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="md:hidden bg-primary/95 text-white">
                    <div className="flex flex-col items-center gap-4 p-4">
                        <select
                            value={currentLocale}
                            onChange={(e) => switchLocale(e.target.value)}
                            className="w-full bg-primary text-white border border-white/20 rounded-md px-2 py-1"
                        >
                            {locales.map((locale) => (
                                <option key={locale} value={locale}>
                                    {locale.toUpperCase()}
                                </option>
                            ))}
                        </select>
                        <Link
                            href={`/${currentLocale}/for-doctors`}
                            className="w-full text-center text-white hover:text-white/90 px-4 py-2 rounded-md transition-colors"
                        >
                            {t('forDoctors')}
                        </Link>
                        <Link
                            href={`/${currentLocale}/signin`}
                            className="w-full text-center bg-white text-primary hover:bg-white/90 px-4 py-2 rounded-md transition-colors"
                        >
                            {t('signIn')}
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}