import { CarouselItem } from '@/shared/ui/carousel';

export function BannerCarouselItem({ children }: { children: React.ReactNode }) {
  return(
    <CarouselItem>
      <div className="relative sm:aspect-[24/9] aspect-[16/9] bg-primary/10 rounded-lg overflow-hidden">
        {children}
      </div>
    </CarouselItem>
  );
}