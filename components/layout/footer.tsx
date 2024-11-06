"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { specialties } from "@/lib/specialties";

export function Footer() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('Footer');

  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('sections.specialties')}</h3>
            <div className="grid grid-cols-2 gap-2">
              {specialties.slice(0, 8).map((specialty) => (
                <Link
                  key={specialty.name}
                  href={`/${locale}/specialty/${specialty.slug}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {locale === 'en' ? specialty.nameEn : specialty.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('sections.cities')}</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href={`/${locale}/city/budapest`} className="text-gray-600 hover:text-blue-600">Budapest</Link>
              <Link href={`/${locale}/city/debrecen`} className="text-gray-600 hover:text-blue-600">Debrecen</Link>
              <Link href={`/${locale}/city/szeged`} className="text-gray-600 hover:text-blue-600">Szeged</Link>
              <Link href={`/${locale}/city/pecs`} className="text-gray-600 hover:text-blue-600">Pécs</Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('sections.about')}</h3>
            <p className="text-gray-600">
              {t('aboutText')}
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-gray-500">
          <p>{t('copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
}