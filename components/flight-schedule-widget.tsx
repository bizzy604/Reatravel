"use client";

import { useEffect, useRef } from 'react';

export function FlightScheduleWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    script.async = true;
    script.charset = "utf-8";
    script.src = "https://tp.media/content?currency=kes&trs=390088&shmarker=607310&color_button=%23FF0000&target_host=www.aviasales.com%2Fsearch&locale=en&powered_by=true&origin=LON&destination=BKK&with_fallback=true&non_direct_flights=false&min_lines=5&border_radius=2&color_background=%23FFFFFF&color_text=%23000000&color_border=%23FFFFFF&promo_id=2811&campaign_id=100";
    
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
      className="w-full min-h-[300px] rounded-lg bg-white p-4"
      style={{ minWidth: '320px' }}
    />
  );
}