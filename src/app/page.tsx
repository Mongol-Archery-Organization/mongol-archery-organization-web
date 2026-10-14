'use client';

import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import { homeT } from '@/lib/translations';
import styles from './page.module.css';

export default function HomePage() {
  const { lang } = useLang();

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{homeT.hero.title[lang]}</h1>
          <p className={styles.heroSubtitle}>{homeT.hero.subtitle[lang]}</p>
          <div className={styles.heroCTA}>
            <Link href="/about/#how-to-join" className={styles.button}>
              {homeT.hero.ctaJoin[lang]}
            </Link>
            <Link href="/schedule/" className={styles.buttonSecondary}>
              {homeT.hero.ctaSchedule[lang]}
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.introduction} aria-labelledby="community-heading">
        <div className={styles.introductionContent}>
          <h2 id="community-heading">{homeT.introduction.title[lang]}</h2>
          {homeT.introduction.paragraphs[lang].map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Link href="/about/" className={styles.aboutLink}>
            {homeT.introduction.link[lang]}
          </Link>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className={styles.quickLinks}>
        <div className={styles.container}>
          <h2>{homeT.quickLinks.title[lang]}</h2>
          <div className={styles.cardGrid}>
            {homeT.quickLinks.cards.map((card) => (
              <div key={card.link} className={styles.card}>
                <h3>{card.title[lang]}</h3>
                <p>{card.description[lang]}</p>
                <Link href={card.link}>
                  {lang === 'en' ? 'Learn More →' : 'Дэлгэрүүлэх →'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
