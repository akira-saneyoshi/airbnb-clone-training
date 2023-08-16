import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';

import ClientOnly from './_components/ClientOnly';
import Navbar from './_components/navbar/Navbar';
import RegisterModal from './_components/modals/RegisterModal';
import LoginModal from './_components/modals/LoginModal';
import RentModal from './_components/modals/RentModal';
import SearchModal from './_components/modals/SearchModal';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
