"use client";

import { useEffect, useRef } from 'react';

export function AviasalesWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;

    // Clear container content
    containerRef.current.innerHTML = '';
    
    // Create script element
    const script = document.createElement('script');
    script.async = true;
    script.charset = "utf-8";
    script.src = "https://tp.media/content?promo_id=7879&shmarker=607310&campaign_id=100&trs=390088&search_host=www.aviasales.com%2Fsearch&locale=en&powered_by=true&currency=usd&primary=%2332a8dd&color_button=%2332a8dd&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%2332a8dd&border_radius=3&plain=true&no_labels=true";
    
    // Add script to container
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-full min-h-[300px] rounded-lg shadow-sm bg-white"
      style={{ minWidth: '320px' }}
    />
  );
}