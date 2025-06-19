// src/components/FloatingWhatsApp.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/6287783802062" // Ganti dengan nomor WhatsApp kamu
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi via WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}

export default FloatingWhatsApp;
