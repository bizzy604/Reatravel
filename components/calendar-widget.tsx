"use client";

import { useEffect, useRef } from 'react';

export function CalendarWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = '';
    
    const script = document.createElement('script');
    script.async = true;
    script.charset = "utf-8";
    script.src = "https://tp.media/content?currency=usd&trs=390088&shmarker=607310&searchUrl=www.aviasales.com%2Fsearch&locale=en&powered_by=true&origin=LON&destination=BKK&one_way=false&only_direct=false&period=year&range=7%2C14&primary=%230C73FE&color_background=%23FFFFFF&dark=%23000000&light=%23FFFFFF&achieve=%2345AD35&promo_id=4041&campaign_id=100";
    
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