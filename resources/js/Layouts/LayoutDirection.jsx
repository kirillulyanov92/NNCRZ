import React from 'react';
import Header from '@/Components/Header';
import Hero from '@/Components/Hero';
import Footer from '@/Components/Footer';

export default function LayoutDirection({ children, img, h1 }) {
    console.log('children:', children);
  return (
    <>
        <Header />
        <Hero img={img} h1={h1} />
        <section className="text-gray-600 body-font">{children}
        </section>
        <Footer />
    </>
  )
}
