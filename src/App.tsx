import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen selection:bg-emerald-500 selection:text-white"
    >
      <Header />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <Pricing />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </motion.div>
  );
}
