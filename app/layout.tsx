import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import ClientOnly from './_components/ClientOnly';
import Navbar from './_components/navbar/Navbar';
import RegisterModal from './_components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}</body>
    </html>
  )
}
