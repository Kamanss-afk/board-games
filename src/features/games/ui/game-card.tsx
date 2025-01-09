import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/shared/ui/badge';
import { PlayButton } from '@/shared/icons/play-button';
import { paths } from '@/shared/lib/next-router';
import type { Game } from '../model/types';

export function GameCard({
  id,
  label,
  image,
  name,
  category,
}: Game) {
  return(
    <Link href={paths.lobby.getHref({ id })}>
      <div className="relative rounded-2xl overflow-hidden group pb-[100%] text-white bg-primary/10">
        <Image
          fill
          sizes='100%'
          loading='lazy'
          src={image}
          alt={name}
          className='group-hover:scale-110 transition-transform duration-300 transform-gpu'
        />
        <CardLabel>{label}</CardLabel>
        <CardButton />
        <CardOverlay>
          <div className="absolute bottom-0 h-[35%] w-full px-4 py-1 text-sm lg:text-base">
            <div className="font-bold whitespace-nowrap truncate ">{name}</div>
            <div className="text-neutral-300">{category}</div>
          </div>
        </CardOverlay>
      </div>
    </Link>
  );
}

function CardButton() {
  return(
    <div className="absolute z-[1] w-[30%] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-65%] transition duration-300 group-hover:opacity-100 opacity-0 hover:scale-125">
      <PlayButton />
    </div>
  );
}

function CardLabel({ children }: { children: React.ReactNode }) {
  return(
    <Badge className="absolute top-[10px] left-[10px] transition-opacity duration-200 group-hover:opacity-0 opacity-100">
      {children}
    </Badge>
  );
}

function CardOverlay({ children }: { children: React.ReactNode }) {
  return(
    <div className="absolute size-full bottom-0 transition duration-300 group-hover:translate-y-0 translate-y-full group-hover:opacity-100 opacity-0 bg-primary/90">
      {children}
    </div>
  );
}