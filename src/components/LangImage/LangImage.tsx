'use client';

import Image from 'next/image';
import { useLang } from '@/context/LangContext';

interface LangImageProps {
  src: { en: string; mn: string };
  alt: { en: string; mn: string };
  width: number;
  height: number;
  className?: string;
}

export function LangImage({ src, alt, width, height, className }: LangImageProps) {
  const { lang } = useLang();

  return (
    <Image
      src={src[lang]}
      alt={alt[lang]}
      width={width}
      height={height}
      className={className}
    />
  );
}
