'use client';

import { useLang } from '@/context/LangContext';
import { ArcherySession } from '@/lib/schedule';
import { commonT, scheduleT } from '@/lib/translations';
import styles from './ScheduleCard.module.css';

interface ScheduleCardProps {
  session: ArcherySession;
}

export function ScheduleCard({ session }: ScheduleCardProps) {
  const { lang } = useLang();

  // Format dates in the active language
  const formatDate = (dateStr: string, lang: 'en' | 'mn'): string => {
    const date = new Date(dateStr + 'T00:00:00');
    if (lang === 'mn') {
      return date.toLocaleDateString('mn-MN', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      });
    }
    return dateStr; // Already in English format from server
  };

  const formatDateNoWeekday = (dateStr: string, lang: 'en' | 'mn'): string => {
    const date = new Date(dateStr + 'T00:00:00');
    if (lang === 'mn') {
      return date.toLocaleDateString('mn-MN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
    }
    return dateStr;
  };

  const displayDate = lang === 'mn' ? formatDate(session.isoDate, 'mn') : session.displayDate;
  const confirmByDate = lang === 'mn' ? formatDate(session.confirmByIsoDate, 'mn') : session.confirmByDate;

  const statusBadgeClass = {
    planned: styles.statusPlanned,
    confirmed: styles.statusConfirmed,
    cancelled: styles.statusCancelled,
  }[session.status];

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.date}>{displayDate}</h3>
        <div className={`${styles.badge} ${statusBadgeClass}`}>
          {commonT.status[session.status][lang]}
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.detail}>
          <span className={styles.label}>{scheduleT.cardLabels.time[lang]}</span>
          <span className={styles.value}>{session.time}</span>
        </div>
        <div className={styles.detail}>
          <span className={styles.label}>{scheduleT.cardLabels.location[lang]}</span>
          <span className={styles.value}>{session.location}</span>
        </div>
      </div>

      {session.status === 'planned' && (
        <div className={styles.note}>
          <p>
            {lang === 'en'
              ? `${scheduleT.cardLabels.confirmBy[lang]} ${confirmByDate}.`
              : `Хуваарь ${formatDateNoWeekday(session.confirmByIsoDate, 'mn')}-д тодорхой болно.`}
          </p>
        </div>
      )}
    </div>
  );
}
