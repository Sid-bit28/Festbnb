import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar/Navbar';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Festbnb',
  description: 'Festbnb: A fun place for hostel room bookings for students.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
