'use client';

import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent } from '@/shared/ui/carousel';

export function BannerCarousel({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return(
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[plugin.current]}
    >
      <CarouselContent>
        {children}
      </CarouselContent>
    </Carousel>
  );
}