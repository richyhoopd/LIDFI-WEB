import React from 'react';
import { Button } from './ui/button';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className="text-4xl font-bold text-[#1F294C] tracking-tight">
              LIDFI
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-[#234567]">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+52 (33) 1301-3253</span>
            </div>
            <div className="flex items-center space-x-2 text-[#234567]">
              <Mail className="h-4 w-4" />
              <span className="text-sm">contacto@lidfi.com</span>
            </div>
            <Button size="lg" className="bg-[#1F294C] hover:bg-[#234567] text-white px-6 py-3 flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Contactar ahora
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}