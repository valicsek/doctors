'use client';

import {Search} from 'lucide-react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {routing} from '@/i18n/routing';

export function Navbar() {
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1];

  const locales = routing.locales;

  const switchLocale = (locale: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    window.location.href = newPath;
  };

  return (
    <nav className="bg-primary text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center">
            <Search className="h-6 w-6 mr-2" />
            <span className="text-xl font-bold">DoctorFinder</span>
          </Link>

          <div className="flex items-center gap-4">
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
            <button className="text-white hover:text-white/90 px-4 py-2 rounded-md transition-colors">
              For Doctors
            </button>
            <button className="bg-white text-primary hover:bg-white/90 px-4 py-2 rounded-md transition-colors">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
