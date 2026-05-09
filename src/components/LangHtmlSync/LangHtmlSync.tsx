'use client';

import { useEffect } from 'react';
import { useLang } from '@/context/LangContext';

export function LangHtmlSync() {
  const { lang } = useLang();

  useEffect(() => {
    document.documentElement.lang = lang === 'mn' ? 'mn' : 'en';
  }, [lang]);

  return null;
}
