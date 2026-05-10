'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import { resourcesT } from '@/lib/translations';
import styles from './page.module.css';

type Section = 'introduction' | 'equipment' | 'techniques' | 'getting' | 'cultural';

const sections: { id: Section; labelKey: string }[] = [
  { id: 'getting', labelKey: 'getting' },
  { id: 'introduction', labelKey: 'introduction' },
  { id: 'cultural', labelKey: 'cultural' },
  { id: 'equipment', labelKey: 'equipment' },
  { id: 'techniques', labelKey: 'techniques' },
];

export default function ResourcesPage() {
  const { lang } = useLang();
  const [activeSection, setActiveSection] = useState<Section>('getting');

  const getNavLabel = (labelKey: string): string => {
    const labels: Record<Section, string> = {
      introduction: resourcesT.introduction.heading[lang],
      equipment: resourcesT.equipment.heading[lang],
      techniques: resourcesT.techniques.heading[lang],
      getting: resourcesT.getting.heading[lang],
      cultural: resourcesT.cultural.heading[lang],
    };
    return labels[labelKey as Section] || '';
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1>{resourcesT.pageTitle[lang]}</h1>
          <p>
            {lang === 'en'
              ? 'Learn about traditional Mongolian archery, techniques, and equipment.'
              : 'Уламжлалт Монгол нумын сум, техник болон тоног төхөөрөмжийн тухай сурагдаж авах.'}
          </p>
        </div>
      </section>

      <section className={styles.layoutSection}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <nav className={styles.sidebarNav}>
            {sections.map((section) => (
              <button
                key={section.id}
                className={`${styles.navItem} ${activeSection === section.id ? styles.active : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                {getNavLabel(section.labelKey)}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className={styles.mainContent}>
          {/* Introduction */}
          {activeSection === 'introduction' && (
            <article className={styles.section}>
              <h2>{resourcesT.introduction.heading[lang]}</h2>
              <p>{resourcesT.introduction.content[lang]}</p>
            </article>
          )}

          {/* Equipment Guide */}
          {activeSection === 'equipment' && (
            <article className={styles.section}>
              <h2>{resourcesT.equipment.heading[lang]}</h2>

              <div className={styles.subsection}>
                <h3>{resourcesT.equipment.bow.heading[lang]}</h3>
                <p>{resourcesT.equipment.bow.content[lang]}</p>
              </div>

              <div className={styles.subsection}>
                <h3>{resourcesT.equipment.arrows.heading[lang]}</h3>
                <p>{resourcesT.equipment.arrows.content[lang]}</p>
              </div>

              <div className={styles.subsection}>
                <h3>{resourcesT.equipment.thumbRing.heading[lang]}</h3>
                <p>{resourcesT.equipment.thumbRing.content[lang]}</p>
              </div>
            </article>
          )}

          {/* Techniques */}
          {activeSection === 'techniques' && (
            <article className={styles.section}>
              <h2>{resourcesT.techniques.heading[lang]}</h2>

              <div className={styles.subsection}>
                <h3>{resourcesT.techniques.draw.heading[lang]}</h3>
                <p>{resourcesT.techniques.draw.content[lang]}</p>
              </div>

              <div className={styles.subsection}>
                <h3>{resourcesT.techniques.stance.heading[lang]}</h3>
                <p>{resourcesT.techniques.stance.content[lang]}</p>
              </div>
            </article>
          )}

          {/* Getting Started */}
          {activeSection === 'getting' && (
            <article className={styles.section}>
              <h2>{resourcesT.getting.heading[lang]}</h2>
              <p>{resourcesT.getting.content[lang]}</p>
              <p className={styles.highlight}>
                {lang === 'en' ? 'Visit our ' : 'Манай '}
                <Link href="/schedule/">{lang === 'en' ? 'Schedule' : 'Хуваарь'}</Link>
                {lang === 'en' ? ' page to find practice times and locations.' : ' хуудсыг үзэх.'}
              </p>
            </article>
          )}

          {/* Cultural Significance */}
          {activeSection === 'cultural' && (
            <article className={styles.section}>
              <h2>{resourcesT.cultural.heading[lang]}</h2>
              <p>{resourcesT.cultural.content[lang]}</p>
            </article>
          )}
        </main>
      </section>
    </div>
  );
}
