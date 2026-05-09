'use client';

import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import { aboutT } from '@/lib/translations';
import styles from './page.module.css';

export default function AboutPage() {
  const { lang } = useLang();

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>{aboutT.heroTitle[lang]}</h1>
        </div>
      </section>

      {/* Content Section */}
      <div className={styles.content}>
        <div className={styles.container}>
          {/* Mission */}
          <section className={styles.section}>
            <h2>{aboutT.mission.heading[lang]}</h2>
            <p>{aboutT.mission.content[lang]}</p>
          </section>

          {/* History */}
          <section className={styles.section}>
            <h2>{aboutT.history.heading[lang]}</h2>
            <p>{aboutT.history.content[lang]}</p>
          </section>

          {/* Disciplines */}
          <section className={styles.section}>
            <h2>{aboutT.disciplines.heading[lang]}</h2>
            <p>{aboutT.disciplines.intro[lang]}</p>
            <ul className={styles.list}>
              {aboutT.disciplines.items.map((item) => (
                <li key={item.name.en}>
                  <strong>{item.name[lang]}</strong> - {item.description[lang]}
                </li>
              ))}
            </ul>
          </section>

          {/* How to Join */}
          <section className={styles.section}>
            <h2>{aboutT.join.heading[lang]}</h2>
            <p>{aboutT.join.content[lang]}</p>
            <div className={styles.contact}>
              <p>
                <strong>{aboutT.join.facebook[lang]}</strong>{' '}
                <Link href="https://www.facebook.com/groups/mongolarchers">
                  Mongol Archers
                </Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
