import { DM_Sans } from 'next/font/google';
import { Header } from '@/features/layout/header';
import { AppProvider } from './provider';
import { Footer } from '@/features/layout/footer';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/shared/lib/i18n';
import { notFound } from 'next/navigation';
import './globals.css';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{ locale: string }>
  children: React.ReactNode;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${dmSans.variable} antialiased h-full font-sans`}>
        <div className="flex flex-col min-h-[100vh] bg-inherit">
          <NextIntlClientProvider
            locale={locale}
            messages={messages}
          >
            <AppProvider>
              <Header />

              <div className="flex-auto flex flex-col container">
                {children}
              </div>
              
              <Footer />
            </AppProvider>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
