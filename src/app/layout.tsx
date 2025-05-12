<<<<<<< HEAD
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer'

export const metadata = {
  title: 'My Website',
  description: 'Portfolio sayti',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body>
        <Header />
        <main style={{ padding: '0' }}>
          {children}
        </main>
        <Footer/>
=======
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
>>>>>>> 61371e1 (salom)
      </body>
    </html>
  );
}
