import React from 'react';
import { Phone } from 'lucide-react';
 // from `react-icons`

const StickyPhone = () => {
  return (
    <a
      href="tel:8982707575"
      className="fixed bottom-12 left-4 z-50 flex items-center bg-[#9b6a55] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#dea289] transition"
    >
      <span className="mr-2">
        < Phone className="w-8 h-8" />
      </span>
      <a href='tel:8982707575' className="font-medium">8982707575</a>
    </a>
  );
};

export default StickyPhone;
