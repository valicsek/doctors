import './globals.css';
import {clsx} from 'clsx';
import {Inter} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {ReactNode} from 'react';
import type {Metadata} from 'next';
import {Navbar} from '@/components/layout/navbar';
import {Footer} from '@/components/layout/footer';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'DoctorFinder | Find Your Healthcare Professional',
  description: 'Search and find qualified healthcare professionals in your area'
};

export default async function Layout({children}: {children: ReactNode}) {
  // set language based on browser locale
  const browserLocale = 'en'; // navigator.language;
  setRequestLocale(browserLocale);

  // get translation messages
  const messages = await getMessages();

  return (
    <html className="h-full" lang={browserLocale}>
      <body className={clsx(inter.className, 'flex h-full flex-col')}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
