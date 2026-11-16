'use client';

import { useEffect, useRef, useState } from 'react';
import { useLang } from '@/context/LangContext';
import { resourcesT } from '@/lib/translations';
import styles from './page.module.css';
import { Education } from '@/components/Education/Education';
import { educationT } from '@/lib/translations/education';

type Section = 'introduction' | 'equipment' | 'getting' | 'decree' | 'safety' | 'scoring';

const sections: { id: Section; labelKey: string }[] = [
  { id: 'getting', labelKey: 'getting' },
  { id: 'introduction', labelKey: 'introduction' },
  { id: 'decree', labelKey: 'decree' },
  { id: 'safety', labelKey: 'safety' },
  { id: 'equipment', labelKey: 'equipment' },
  { id: 'scoring', labelKey: 'scoring' },
];

export default function ResourcesPage() {
  const { lang } = useLang();
  const [activeSection, setActiveSection] = useState<Section>('getting');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const focusContent = useRef<Section | null>(null);

  useEffect(() => {
    const syncSection = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#equipment-')) {
        setActiveSection('equipment');
        setMobileMenuOpen(false);
        focusContent.current = null;
        return;
      }
      const section = sections.find((item) => `#${item.id}` === hash);
      focusContent.current = section?.id ?? null;
      setActiveSection(section?.id ?? 'getting');
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
    if (activeSection === 'equipment' && window.location.hash.startsWith('#equipment-')) {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView({ block: 'start' });
    }
    if (focusContent.current === activeSection) {
      contentRef.current?.focus({ preventScroll: true });
      contentRef.current?.scrollIntoView({ block: 'start' });
      focusContent.current = null;
    }
  }, [activeSection, mobileMenuOpen]);

  const getNavLabel = (labelKey: string): string => {
    const labels: Record<Section, string> = {
      introduction: resourcesT.introduction.heading[lang],
      equipment: educationT.equipmentHeading[lang],
      safety: educationT.safetyHeading[lang],
      scoring: educationT.scoringHeading[lang],
      getting: resourcesT.getting.heading[lang],
      decree: resourcesT.decree.heading[lang],
    };
    return labels[labelKey as Section] || '';
  };

  const handleSectionChange = (section: Section) => {
    if (section === activeSection && !mobileMenuOpen) return;
    focusContent.current = section;
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
          <h1>{resourcesT.pageTitle[lang]}</h1>
          <p>
            {lang === 'en'
              ? 'Learn about traditional Mongolian archery, equipment, safety, and scoring.'
              : 'Монголын уламжлалт сур харваа, хэрэгсэл, аюулгүй байдал, оноо тооцох журмын талаар мэдэж аваарай.'}
          </p>
        </div>
      </section>

      <section className={styles.layoutSection}>
        {/* Hamburger Menu Button (Mobile Only) */}
        <button
          className={styles.hamburgerBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="resource-navigation"
        >
          {lang === 'en' ? 'Resource topics' : 'Сэдвүүд'}
          <span aria-hidden="true">{mobileMenuOpen ? '−' : '+'}</span>
        </button>

        {/* Sidebar */}
        <aside id="resource-navigation" className={`${styles.sidebar} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          <nav className={styles.sidebarNav} aria-label={resourcesT.pageTitle[lang]}>
            {sections.map((section) => (
              <button
                key={section.id}
                className={`${styles.navItem} ${activeSection === section.id ? styles.active : ''}`}
                aria-current={activeSection === section.id ? 'true' : undefined}
                onClick={() => handleSectionChange(section.id)}
              >
                {getNavLabel(section.labelKey)}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div
          className={styles.mainContent}
          id={activeSection}
          ref={contentRef}
          tabIndex={-1}
          role="region"
          aria-label={getNavLabel(activeSection)}
        >
          {/* Introduction */}
          {activeSection === 'introduction' && (
            <article className={styles.section}>
              <h2>{resourcesT.introduction.heading[lang]}</h2>
              {resourcesT.introduction.paragraphs[lang].map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {resourcesT.introduction.styles.map((style) => (
                <section key={style.name.en} className={styles.styleCard}>
                  <h3>{style.name[lang]}</h3>
                  {style.paragraphs[lang].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </section>
              ))}
              <table className={styles.distanceTable}>
                <caption>{resourcesT.introduction.distancesHeading[lang]}</caption>
                <thead>
                  <tr>
                    <th scope="col">{resourcesT.introduction.styleLabel[lang]}</th>
                    <th scope="col">{resourcesT.introduction.menLabel[lang]}</th>
                    <th scope="col">{resourcesT.introduction.womenLabel[lang]}</th>
                  </tr>
                </thead>
                <tbody>
                  {resourcesT.introduction.styles.map((style) => (
                    <tr key={style.name.en}>
                      <th scope="row">{style.name[lang]}</th>
                      <td>{style.men[lang]}</td>
                      <td>{style.women[lang]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <section className={styles.subsection}>
                <h3>{resourcesT.introduction.dimensionsHeading[lang]}</h3>
                <ul className={styles.dimensions}>
                  {resourcesT.introduction.styles.map((style) => (
                    <li key={style.name.en}>
                      <strong>{style.name[lang]}:</strong> {style.dimensions[lang]}
                    </li>
                  ))}
                </ul>
              </section>
            </article>
          )}

          {activeSection === 'decree' && (
            <article className={`${styles.section} ${styles.decree}`}>
              <header className={styles.decreeHeader}>
                <h2>{resourcesT.decree.issuer[lang]}</h2>
                <div className={styles.decreeMeta}>
                  <time dateTime="2002-10-01">{resourcesT.decree.date[lang]}</time>
                  <span>{resourcesT.decree.number[lang]}</span>
                  <span>{resourcesT.decree.location[lang]}</span>
                </div>
                <h3>{resourcesT.decree.subject[lang]}</h3>
              </header>
              {resourcesT.decree.paragraphs[lang].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <ol className={styles.provisions}>
                <li>
                  {resourcesT.decree.provision[lang].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </li>
              </ol>
              <footer className={styles.signature}>
                <span>{resourcesT.decree.signatureTitle[lang]}</span>
                <strong>{resourcesT.decree.signatureName[lang]}</strong>
              </footer>
            </article>
          )}

          {(activeSection === 'equipment' || activeSection === 'safety' || activeSection === 'scoring') && (
            <Education topic={activeSection} />
          )}

          {/* Getting Started */}
          {activeSection === 'getting' && (
            <article className={styles.section}>
              <h2>{resourcesT.getting.heading[lang]}</h2>
              <p>{resourcesT.getting.content[lang]}</p>
              <ol className={styles.startSteps}>
                {resourcesT.getting.steps.map(step => <li key={step.title.en}>
                  <h3>{step.title[lang]}</h3>
                  <p>{step.content[lang]}</p>
                  {'href' in step && <a href={step.href}>{step.link[lang]} →</a>}
                </li>)}
              </ol>
              <p className={styles.highlight}>
                <a href="/about/#how-to-join">{resourcesT.getting.membership[lang]} →</a>
              </p>
            </article>
          )}

        </div>
      </section>
    </div>
  );
}
