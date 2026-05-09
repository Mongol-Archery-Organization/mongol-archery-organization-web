'use client';

import { useLang } from '@/context/LangContext';
import { scheduleT } from '@/lib/translations';
import { getUpcomingSundays } from '@/lib/schedule';
import { ScheduleCard } from '@/components/ScheduleCard/ScheduleCard';
import styles from './page.module.css';

export default function SchedulePage() {
  const { lang } = useLang();
  const sessions = getUpcomingSundays();

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>{scheduleT.pageTitle[lang]}</h1>
          <p>
            {lang === 'en'
              ? 'Join us for Sunday practice sessions at our Rockville location.'
              : 'Бидэнтэй Ням гарагийн сургалтын сешнүүдэд оролцоорой.'}
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <h2>{scheduleT.upcomingSessions[lang]}</h2>
          <div className={styles.cardList}>
            {sessions.map((session) => (
              <ScheduleCard key={session.isoDate} session={session} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
