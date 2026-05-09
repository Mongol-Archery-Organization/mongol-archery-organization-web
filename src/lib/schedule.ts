export const SCHEDULE_CONFIG = {
  practiceDay: 0,                                          // 0 = Sunday
  time: '12:00 PM – 5:00 PM',
  location: 'Lake Needwood Archery Range, Rockville, MD',  // update as needed
  contactEmail: 'info@mongolarchery.org',
  confirmedDates: [
    "2026-05-17"
  ] as string[],
  cancelledDates: [
    "2026-05-10"
  ] as string[],
};

export type SessionStatus = 'planned' | 'confirmed' | 'cancelled';

export interface ArcherySession {
  date: Date;
  isoDate: string;           // "YYYY-MM-DD"
  displayDate: string;       // "Sunday, May 03, 2026" — English; Mongolian formatting done client-side
  confirmByIsoDate: string;  // "YYYY-MM-DD" for the Thursday
  confirmByDate: string;     // "Thursday, April 30, 2026" — the Thursday before the Sunday
  status: SessionStatus;
  time: string;
  location: string;
}

export function getUpcomingSundays(): ArcherySession[] {
  const sessions: ArcherySession[] = [];
  const now = new Date();
  let currentDate = new Date(now);

  // Find the next Sunday
  const daysUntilNextSunday = (7 - currentDate.getDay()) % 7;
  if (daysUntilNextSunday === 0 && currentDate.getHours() >= 17) {
    // If it's Sunday but after 5 PM, start from next Sunday
    currentDate.setDate(currentDate.getDate() + 7);
  } else if (daysUntilNextSunday !== 0) {
    currentDate.setDate(currentDate.getDate() + daysUntilNextSunday);
  }

  // Generate the next 10 Sundays
  for (let i = 0; i < 10; i++) {
    const sunday = new Date(currentDate);
    sunday.setDate(currentDate.getDate() + i * 7);

    // Format the date as "Sunday, May 03, 2026"
    const displayDate = sunday.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    });

    // Calculate the Thursday before this Sunday (3 days earlier)
    const thursday = new Date(sunday);
    thursday.setDate(sunday.getDate() - 3);
    const confirmByDate = thursday.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    });

    // ISO date for confirmByDate
    const thursdayYear = thursday.getFullYear();
    const thursdayMonth = String(thursday.getMonth() + 1).padStart(2, '0');
    const thursdayDay = String(thursday.getDate()).padStart(2, '0');
    const confirmByIsoDate = `${thursdayYear}-${thursdayMonth}-${thursdayDay}`;

    // ISO date for checking against confirmed/cancelled lists
    const year = sunday.getFullYear();
    const month = String(sunday.getMonth() + 1).padStart(2, '0');
    const day = String(sunday.getDate()).padStart(2, '0');
    const isoDate = `${year}-${month}-${day}`;

    // Determine status
    let status: SessionStatus = 'planned';
    if (SCHEDULE_CONFIG.confirmedDates.includes(isoDate)) {
      status = 'confirmed';
    } else if (SCHEDULE_CONFIG.cancelledDates.includes(isoDate)) {
      status = 'cancelled';
    }

    sessions.push({
      date: sunday,
      isoDate,
      displayDate,
      confirmByIsoDate,
      confirmByDate,
      status,
      time: SCHEDULE_CONFIG.time,
      location: SCHEDULE_CONFIG.location,
    });
  }

  return sessions;
}
