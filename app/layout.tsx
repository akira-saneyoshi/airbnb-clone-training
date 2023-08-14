import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import ClientOnly from './_components/ClientOnly';
import Navbar from './_components/navbar/Navbar';
import RegisterModal from './_components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './_components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';

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
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
