// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import ReduxProvider from '../components/ReduxProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio de Jovani',
  description: 'Développeur web et mobile — React, Next.js, WPF, etc.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ReduxProvider>
          <Header />
          <main className="min-h-screen px-4 py-6">{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
