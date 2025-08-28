'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function HomePageAnimationTrigger() {
  const pathname = usePathname();
  
  useEffect(() => {
    if (pathname === '/') {
      // Force re-animation of fixed elements by temporarily removing and re-adding animation
      const header = document.querySelector('header');
      const socialMediaIcons = document.querySelector('.socialMediaIconsContainer');
      const pageButtons = document.querySelector('.pageButtonsContainer');
      
      if (header) {
        (header as HTMLElement).style.animation = 'none';
        void (header as HTMLElement).offsetHeight; // Trigger reflow
        (header as HTMLElement).style.animation = '';
      }
      
      if (socialMediaIcons) {
        (socialMediaIcons as HTMLElement).style.animation = 'none';
        void (socialMediaIcons as HTMLElement).offsetHeight; // Trigger reflow
        (socialMediaIcons as HTMLElement).style.animation = '';
      }
      
      if (pageButtons) {
        (pageButtons as HTMLElement).style.animation = 'none';
        void (pageButtons as HTMLElement).offsetHeight; // Trigger reflow
        (pageButtons as HTMLElement).style.animation = '';
      }
    }
  }, [pathname]);
  
  return null;
}
