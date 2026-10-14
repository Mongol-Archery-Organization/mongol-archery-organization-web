'use client';

import { useEffect, useRef, useState } from 'react';
import { useLang } from '@/context/LangContext';
import { scheduleT } from '@/lib/translations';
import { getUpcomingSundays } from '@/lib/schedule';
import { ScheduleCard } from '@/components/ScheduleCard/ScheduleCard';
import styles from './page.module.css';

const SESSIONS_PER_PAGE = 3;

export default function SchedulePage() {
  const { lang } = useLang();
  const [sessions, setSessions] = useState<ReturnType<typeof getUpcomingSundays>>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const headingRef = useRef<HTMLHeadingElement>(null);

  // The site is statically exported; calculate upcoming dates when it is opened.
  useEffect(() => {
    setSessions(getUpcomingSundays());
  }, []);

  const pageCount = Math.ceil(sessions.length / SESSIONS_PER_PAGE);
  const startIndex = (currentPage - 1) * SESSIONS_PER_PAGE;
  const visibleSessions = sessions.slice(startIndex, startIndex + SESSIONS_PER_PAGE);
  const endIndex = Math.min(startIndex + SESSIONS_PER_PAGE, sessions.length);
  const visibleRange = startIndex + 1 === endIndex ? `${endIndex}` : `${startIndex + 1}–${endIndex}`;

  const goToPage = (page: number) => {
    setCurrentPage(page);
    headingRef.current?.focus({ preventScroll: true });
    headingRef.current?.scrollIntoView({ block: 'start' });
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>{scheduleT.pageTitle[lang]}</h1>
          <p>{scheduleT.subtitle[lang]}</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <h2 ref={headingRef} id="upcoming-sessions" tabIndex={-1}>{scheduleT.upcomingSessions[lang]}</h2>
          <p className={styles.pageSummary} role="status">
            {sessions.length === 0
              ? scheduleT.pagination.loading[lang]
              : lang === 'en'
                ? `Showing ${visibleRange} of ${sessions.length} sessions · Page ${currentPage} of ${pageCount}`
                : `Нийт ${sessions.length} сургалтын ${visibleRange} · ${currentPage} / ${pageCount} хуудас`}
          </p>
          <div className={styles.cardList} id="schedule-sessions">
            {visibleSessions.map((session) => (
              <ScheduleCard key={session.isoDate} session={session} />
            ))}
          </div>
          {pageCount > 1 && (
            <nav className={styles.pagination} aria-label={scheduleT.pagination.label[lang]}>
              <button
                type="button"
                className={styles.pageButton}
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label={scheduleT.pagination.previous[lang]}
                aria-controls="schedule-sessions"
              >
                <span aria-hidden="true">←</span>
              </button>
              {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
                <button
                  type="button"
                  key={page}
                  className={styles.pageButton}
                  aria-current={currentPage === page ? 'page' : undefined}
                  aria-label={lang === 'en' ? `Page ${page}` : `${page}-р хуудас`}
                  aria-controls="schedule-sessions"
                  onClick={() => goToPage(page)}
                >
                  {page}
                </button>
              ))}
              <button
                type="button"
                className={styles.pageButton}
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === pageCount}
                aria-label={scheduleT.pagination.next[lang]}
                aria-controls="schedule-sessions"
              >
                <span aria-hidden="true">→</span>
              </button>
            </nav>
          )}
        </div>
      </section>
    </div>
  );
}
