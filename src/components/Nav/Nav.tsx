'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLang } from '@/context/LangContext';
import { commonT, homeT } from '@/lib/translations';
import styles from './Nav.module.css';

export function Nav() {
  const { lang, setLang } = useLang();
  const pathname = usePathname();

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

        <div className={styles.links}>
          <Link
            href="/"
            className={pathname === '/' ? styles.activeLink : styles.link}
          >
            {commonT.nav.home[lang]}
          </Link>
          <Link
            href="/about/"
            className={pathname === '/about' ? styles.activeLink : styles.link}
          >
            {commonT.nav.about[lang]}
          </Link>
          <Link
            href="/schedule/"
            className={pathname === '/schedule' ? styles.activeLink : styles.link}
          >
            {commonT.nav.schedule[lang]}
          </Link>
          <Link
            href="/resources/"
            className={pathname === '/resources' ? styles.activeLink : styles.link}
          >
            {commonT.nav.resources[lang]}
          </Link>
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
