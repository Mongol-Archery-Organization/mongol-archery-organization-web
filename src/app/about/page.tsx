'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useLang } from '@/context/LangContext';
import { aboutT } from '@/lib/translations';
import styles from './page.module.css';

const sections = [
  { id: 'our-mission', key: 'mission' },
  { id: 'our-history', key: 'history' },
  { id: 'what-we-practice', key: 'disciplines' },
  { id: 'how-to-join', key: 'join' },
] as const;

type Section = (typeof sections)[number]['id'];

export default function AboutPage() {
  const { lang } = useLang();
  const [activeSection, setActiveSection] = useState<Section>('our-mission');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const focusContent = useRef(false);
  const currentSection = sections.find((section) => section.id === activeSection)!;

  useEffect(() => {
    const syncSection = () => {
      const section = sections.find((item) => `#${item.id}` === window.location.hash);
      setActiveSection(section?.id ?? 'our-mission');
      setMobileMenuOpen(false);
    };
    syncSection();
    window.addEventListener('hashchange', syncSection);
    window.addEventListener('popstate', syncSection);
    return () => {
      window.removeEventListener('hashchange', syncSection);
      window.removeEventListener('popstate', syncSection);
    };
  }, []);

  useEffect(() => {
    if (focusContent.current) {
      headingRef.current?.focus({ preventScroll: true });
      headingRef.current?.scrollIntoView({ block: 'start' });
      focusContent.current = false;
    }
  }, [activeSection, mobileMenuOpen]);

  const selectSection = (section: Section) => {
    if (section === activeSection && !mobileMenuOpen) return;
    focusContent.current = true;
    setActiveSection(section);
    setMobileMenuOpen(false);
    if (window.location.hash !== `#${section}`) {
      window.history.pushState(window.history.state, '', `#${section}`);
    }
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1>{aboutT.heroTitle[lang]}</h1>
        </div>
      </section>

      <div className={styles.layout}>
        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={mobileMenuOpen}
          aria-controls="about-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {aboutT[currentSection.key].heading[lang]}
          <span aria-hidden="true">{mobileMenuOpen ? '−' : '+'}</span>
        </button>
        <aside
          id="about-navigation"
          className={`${styles.sidebar} ${mobileMenuOpen ? styles.mobileOpen : ''}`}
        >
          <nav className={styles.sidebarNav} aria-label={aboutT.heroTitle[lang]}>
            {sections.map((section) => (
              <button
                type="button"
                key={section.id}
                className={styles.navItem}
                aria-current={activeSection === section.id ? 'true' : undefined}
                aria-controls="about-content"
                onClick={() => selectSection(section.id)}
              >
                {aboutT[section.key].heading[lang]}
              </button>
            ))}
          </nav>
        </aside>

        <div className={styles.content} id="about-content">
          <article className={styles.section} aria-labelledby={activeSection}>
            <h2 id={activeSection} ref={headingRef} tabIndex={-1}>
              {aboutT[currentSection.key].heading[lang]}
            </h2>

            {activeSection === 'our-mission' && (
              <>
                {aboutT.mission.story.paragraphs[lang].map((paragraph) => {
                  const reference = aboutT.mission.story.decreeReference[lang];
                  const [before, after] = paragraph.split(reference);
                  return (
                    <p key={paragraph}>
                      {before}
                      {after !== undefined && (
                        <>
                          <Link href="/resources/#decree" className={styles.inlineLink}>
                            {reference}
                          </Link>
                          {after}
                        </>
                      )}
                    </p>
                  );
                })}
                <div className={styles.goals}>
                  <p>{aboutT.mission.story.mission[lang]}</p>
                  <ul className={styles.list}>
                    {aboutT.mission.story.goals[lang].map((goal) => <li key={goal}>{goal}</li>)}
                  </ul>
                </div>
                <p>{aboutT.mission.story.closing[lang]}</p>
              </>
            )}

            {activeSection === 'our-history' && <p>{aboutT.history.content[lang]}</p>}

            {activeSection === 'what-we-practice' && (
              <p className={styles.placeholder}>{aboutT.disciplines.placeholder[lang]}</p>
            )}

            {activeSection === 'how-to-join' && (
              <>
                <p>{aboutT.join.content[lang]}</p>
                <Link href="/schedule/" className={styles.textLink}>
                  {aboutT.join.scheduleLink[lang]}
                </Link>
                <div className={styles.contact}>
                  <p>
                    <strong>{aboutT.join.facebook[lang]}</strong>{' '}
                    <Link href="https://www.facebook.com/groups/mongolarchers">
                      Mongol Archers
                    </Link>
                  </p>
                </div>
              </>
            )}
          </article>
        </div>
      </div>
    </div>
  );
}
