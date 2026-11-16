'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLang } from '@/context/LangContext';
import { commonT, homeT } from '@/lib/translations';
import styles from './Nav.module.css';

export function Nav() {
  const { lang, setLang } = useLang();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/Mongol_Archery_Organization_Logo.PNG"
            alt="Mongol Archery Organization Logo"
            width={80}
            height={80}
            className={styles.logoImage}
          />
          <span className={styles.logoText}>
            {homeT.hero.title[lang]}
          </span>
        </Link>

        <button type="button" className={styles.menuToggle} aria-expanded={menuOpen}
          aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {lang === 'en' ? (menuOpen ? 'Close' : 'Menu') : (menuOpen ? 'Хаах' : 'Цэс')}
          <span aria-hidden="true">{menuOpen ? '−' : '+'}</span>
        </button>
        <div id="main-navigation" className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {(['home', 'about', 'schedule', 'resources', 'donate'] as const).map((key) => {
            const href = key === 'home' ? '/' : `/${key}/`;
            const active = pathname.replace(/\/$/, '') === href.replace(/\/$/, '');
            return <Link key={key} href={href} aria-current={active ? 'page' : undefined}
              className={active ? styles.activeLink : styles.link} onClick={() => setMenuOpen(false)}>
              {commonT.nav[key][lang]}
            </Link>;
          })}
        </div>

        <div className={styles.langTabs} role="tablist" aria-label="Language">
          <button
            role="tab"
            aria-selected={lang === 'en'}
            aria-label="English"
            className={lang === 'en' ? styles.activeTab : styles.tab}
            onClick={() => setLang('en')}
            title="English"
          >
            <Image
              src="/images/US-Flag.svg"
              alt="US Flag"
              width={32}
              height={32}
              className={styles.flagIcon}
            />
          </button>
          <button
            role="tab"
            aria-selected={lang === 'mn'}
            aria-label="Mongolian"
            className={lang === 'mn' ? styles.activeTab : styles.tab}
            onClick={() => setLang('mn')}
            title="Монгол"
          >
            <Image
              src="/images/Mongolia-Flag.svg"
              alt="Mongolia Flag"
              width={32}
              height={32}
              className={styles.flagIcon}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
