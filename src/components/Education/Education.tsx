'use client';

import Image from 'next/image';
import { useLang } from '@/context/LangContext';
import { educationT as t } from '@/lib/translations/education';
import { educationIllustrations } from '@/lib/education-illustrations';
import styles from './Education.module.css';

type Topic = 'equipment' | 'safety' | 'scoring';
type FigureData = { image: string; width: number; height: number; caption: { en: string; mn: string } };

function Figure({ image, width, height, caption }: FigureData) {
  const { lang } = useLang();
  const original = `/images/education/${image}.webp`;
  const illustration = educationIllustrations[image];
  const src = illustration?.src ?? original;
  return <figure className={styles.figure}>
    <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`${t.enlarge[lang]}: ${caption[lang]} (${lang === 'en' ? 'opens in a new tab' : 'шинэ цонхонд нээгдэнэ'})`}>
      <Image src={src} alt={caption[lang]} width={illustration?.width ?? width} height={illustration?.height ?? height} sizes="(max-width: 768px) 100vw, 680px" />
    </a>
    <figcaption>
      {illustration && <span className={styles.artLabel}>{lang === 'en' ? 'Illustrated interpretation' : 'Эх зурагт тулгуурласан дүрслэл'}</span>}
      {caption[lang]} <span aria-hidden="true">↗</span>
    </figcaption>
  </figure>;
}

export function Education({ topic }: { topic: Topic }) {
  const { lang } = useLang();
  const mn = lang === 'mn';
  const headings = { equipment: t.equipmentHeading, safety: t.safetyHeading, scoring: t.scoringHeading };

  return <article className={styles.article}>
    <h2>{headings[topic][lang]}</h2>
    {topic === 'equipment' && <>
      <p>{t.equipmentIntro[lang]}</p>
      <div className={styles.notice}>
        <a href="/resources/#safety">{mn ? 'Харвахаасаа өмнө аюулгүй байдлын заавартай танилцаарай →' : 'Before you shoot, read the safety instructions →'}</a>
      </div>
      <nav className={styles.quickLinks} aria-label={mn ? 'Хэрэгслийн төрлүүд' : 'Equipment topics'}>
        {t.equipment.map(item => <a href={`#equipment-${item.id}`} key={item.id}>{item.title[lang]}</a>)}
        <a href="#equipment-targets">{mn ? 'Бай сур' : 'Targets'}</a>
      </nav>
      {t.equipment.map(item => <section key={item.id} className={styles.block} id={`equipment-${item.id}`}>
        <h3>{item.title[lang]}</h3>
        <p>{item.description[lang]}</p>
        <Figure {...item} />
        {item.parts.length > 0 && <details className={styles.parts} open>
          <summary>{t.partsHeading[lang]}</summary>
          <ul>{item.parts.map(part => <li key={part.en}>{part[lang]}</li>)}</ul>
        </details>}
      </section>)}
      <section className={styles.block} id="equipment-targets">
        <h3>{t.targetsHeading[lang]}</h3>
        <p>{t.targetsIntro[lang]}</p>
        {t.targetFigures.map(figure => <Figure key={figure.image} {...figure} />)}
        <a className={styles.relatedLink} href="/resources/#scoring">{mn ? 'Оноо тооцох журам, дохиог үзэх →' : 'See how hits and signals are judged →'}</a>
      </section>
    </>}
    {topic === 'safety' && <>
      <p>{t.safetyIntro[lang]}</p>
      <div className={styles.notice}><strong>{t.safetyCallout[lang]}</strong></div>
      {t.safetyGroups.map(group => <section className={styles.block} key={group.title.en}>
        <h3>{group.title[lang]}</h3>
        <ul className={styles.checklist}>{group.items.map(item => <li key={item.en}>{item[lang]}</li>)}</ul>
      </section>)}
      <a className={styles.relatedLink} href="/resources/#equipment">{mn ? 'Хэрэгслээ таньж мэдэх →' : 'Get to know your equipment →'}</a>
    </>}
    {topic === 'scoring' && <>
      <p>{t.scoringIntro[lang]}</p>
      <div className={styles.notice}><strong>{t.scoringCallout[lang]}</strong></div>
      <Figure {...t.targetFigures[0]} />
      <ol className={styles.rules}>
        {t.scoringRules.map(rule => <li key={rule.title.en}>
          <h3>{rule.title[lang]}</h3><p>{rule.text[lang]}</p>
        </li>)}
      </ol>
      <p className={styles.scope}>{t.scoringScope[lang]}</p>
      <a className={styles.relatedLink} href="/resources/#safety">{mn ? 'Зурхайн аюулгүй ажиллагааны заавар →' : 'Read the range safety instructions →'}</a>
    </>}
  </article>;
}
