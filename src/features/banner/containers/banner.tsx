import Image from 'next/image';
import { BannerCarousel } from '../ui/banner-carousel';
import { BannerCarouselItem } from '../ui/banner-carousel-item';

export async function Banner() {
  return(
    <BannerCarousel>
      {bannerItems.map(({ id, image, alt }) => (
        <BannerCarouselItem key={id}>
          <Image
            fill
            loading='lazy'
            sizes='100%'
            src={image}
            alt={alt}
          />
        </BannerCarouselItem>
      ))}
    </BannerCarousel>
  );
}

const bannerItems = [
  {
    id: '1',
    image: 'https://drive.google.com/uc?id=1yFIMIIXDEwPKrzP6XQpeSbSoky6Im9Zi',
    alt: 'Slide - 1',
  },
  {
    id: '2',
    image: 'https://drive.google.com/uc?id=1yFIMIIXDEwPKrzP6XQpeSbSoky6Im9Zi',
    alt: 'Slide - 2',
  },
  {
    id: '3',
    image: 'https://drive.google.com/uc?id=1yFIMIIXDEwPKrzP6XQpeSbSoky6Im9Zi',
    alt: 'Slide - 3',
  },
];