'use client';

import Image from 'next/image';
import { useLang } from '@/context/LangContext';
import { commonT } from '@/lib/translations';
import styles from './Footer.module.css';

export function Footer() {
  const { lang } = useLang();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3 className={styles.heading}>
            {lang === 'en' ? 'Mongolian Archery Organization' : 'Монгол Нум Сумын Нэгдэл'}
          </h3>
          <p className={styles.tagline}>{commonT.footer.tagline[lang]}</p>
        </div>

        <div className={styles.section}>
          <h4 className={styles.subheading}>
            {lang === 'en' ? 'Connect' : 'Холбогдох'}
          </h4>
          <a
            href="https://www.facebook.com/groups/775977682511303"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Facebook"
            title="Follow us on Facebook"
          >
            <Image
              src="/images/Facebook_Logo_Primary.png"
              alt="Facebook"
              width={32}
              height={32}
            />
          </a>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>© {currentYear} Mongolian Archery Organization. All rights reserved.</p>
      </div>
    </footer>
  );
}
