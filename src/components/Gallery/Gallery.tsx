'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useLang } from '@/context/LangContext';
import { naadam2026Photos as photos } from '@/lib/naadam-2026';
import styles from './Gallery.module.css';

const imageRoot = '/images/gallery/naadam-2026';

export function Gallery() {
  const { lang } = useLang();
  const mn = lang === 'mn';
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const [selected, setSelected] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);
  const photo = photos[selected];

  useEffect(() => {
    if (!viewerOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [viewerOpen]);

  const move = (direction: number) => setSelected(index => (index + direction + photos.length) % photos.length);
  const openPhoto = (index: number, opener: HTMLButtonElement) => {
    openerRef.current = opener;
    setSelected(index);
    dialogRef.current?.showModal();
    setViewerOpen(true);
  };

  return <>
    <p>{mn ? 'Манай онцлох арга хэмжээнүүдийн сонгомол зураг, дурсамжууд.' : 'Selected photographs and shared memories from our milestone events.'}</p>
    <details className={styles.album}>
      <summary className={styles.albumSummary}>
        <Image className={styles.cover} src={`${imageRoot}/01.webp`} width={1440} height={1080}
          alt={mn ? 'Монгол далбааны өмнө цугласан Наадам 2026-ийн оролцогчид' : 'Naadam 2026 participants gathered in front of the Mongolian flag'}
          sizes="(max-width: 768px) 100vw, 680px" />
        <span className={styles.albumInfo}>
          <span className={styles.title}>{mn ? 'Наадам 2026' : 'Naadam 2026'}</span>
          <span className={styles.meta}>{photos.length} {mn ? 'сонгомол зураг' : 'selected photographs'}</span>
          <span className={styles.expandLabel}>
            <span className={styles.closedLabel}>{mn ? 'Цомог үзэх' : 'Explore album'} <span aria-hidden="true">+</span></span>
            <span className={styles.openLabel}>{mn ? 'Цомог хураах' : 'Collapse album'} <span aria-hidden="true">−</span></span>
          </span>
        </span>
      </summary>
      <div className={styles.albumBody}>
        <p>{mn ? 'Наадам 2026-ийн хамтын баяр, уламжлалт дээл, сур харвааны өв соёлыг харуулсан дурсамжит мөчүүд.' : 'Community celebrations, traditional deel, and the people carrying our archery heritage forward at Naadam 2026.'}</p>
        <a className={styles.videoLink} href="https://www.facebook.com/share/v/1EtMLEt22x/" target="_blank" rel="noopener noreferrer">
          {mn ? 'Facebook дээр бичлэг үзэх ↗' : 'Watch on Facebook ↗'}
          <span className={styles.srOnly}>{mn ? ' (шинэ цонхонд нээгдэнэ)' : ' (opens in a new tab)'}</span>
        </a>
        <div className={styles.photoGrid}>
          {photos.map((item, index) => <figure key={item.id}>
            <button type="button" className={styles.thumbnail} onClick={event => openPhoto(index, event.currentTarget)}
              aria-label={`${mn ? 'Зургийг томруулж үзэх' : 'Enlarge photo'} ${index + 1}: ${item.caption[lang]}`}>
              <Image src={`${imageRoot}/${item.id}-thumb.webp`} alt={item.caption[lang]} width={item.width} height={item.height}
                sizes="(max-width: 480px) 100vw, 320px" loading="lazy" />
            </button>
            <figcaption>{item.caption[lang]}</figcaption>
          </figure>)}
        </div>
      </div>
    </details>
    <article className={styles.upcoming}>
      <h3>{mn ? 'Наадам 2025' : 'Naadam 2025'}</h3>
      <p>{mn ? 'Өнгөрсөн наадмын сонгомол зургуудыг удахгүй нэмнэ.' : 'Highlights from our previous Naadam celebration are coming soon.'}</p>
    </article>
    <dialog ref={dialogRef} className={styles.viewer} aria-label={mn ? 'Наадам 2026 зургийн цомог' : 'Naadam 2026 photo viewer'}
      onClose={() => {
        setViewerOpen(false);
        openerRef.current?.focus({ preventScroll: true });
      }}
      onClick={event => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}
      onKeyDown={event => {
        if (event.key === 'ArrowRight') { event.preventDefault(); move(1); }
        if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); }
      }}>
      <div className={styles.viewerContent}>
        <div className={styles.toolbar}>
          <span aria-live="polite">{selected + 1} / {photos.length}</span>
          <button type="button" onClick={() => dialogRef.current?.close()} autoFocus>{mn ? 'Хаах' : 'Close'} ×</button>
        </div>
        {viewerOpen && <Image className={styles.fullPhoto} src={`${imageRoot}/${photo.id}.webp`}
          alt={photo.caption[lang]} width={photo.width} height={photo.height}
          onTouchStart={event => { touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }}
          onTouchEnd={event => {
            if (!touchStart.current) return;
            const dx = event.changedTouches[0].clientX - touchStart.current.x;
            const dy = event.changedTouches[0].clientY - touchStart.current.y;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1);
            touchStart.current = null;
          }} />}
        <p className={styles.caption} aria-live="polite">{photo.caption[lang]}</p>
        <div className={styles.controls}>
          <button type="button" onClick={() => move(-1)}>← {mn ? 'Өмнөх' : 'Previous'}</button>
          <button type="button" onClick={() => move(1)}>{mn ? 'Дараах' : 'Next'} →</button>
        </div>
      </div>
    </dialog>
  </>;
}
