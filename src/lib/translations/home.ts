export const homeT = {
  hero: {
    title: {
      en: 'Mongol Archery Organization',
      mn: 'Mongol Archery Organization',
    },
    subtitle: {
      en: 'Honoring the Heritage of Mongolian Archery.',
      mn: 'Монгол нум cумын өвийг дээдлэж байна.',
    },
    ctaJoin: {
      en: 'Join Us',
      mn: 'Нэгдэх',
    },
    ctaSchedule: {
      en: 'See Schedule',
      mn: 'Хуваарь үзэх',
    },
  },
  about: {
    title: {
      en: 'About Mongolian Archery',
      mn: 'Монгол нум сумын тухай',
    },
    description: {
      en: 'Mongolian archery (нум сум) is an ancient tradition, one of the "Three Games of Men" at the Naadam festival. Our organization preserves this cultural heritage and invites practitioners of all levels to join.',
      mn: 'Монгол нум (нум сум) нь эртний уламжлал бөгөөд Наадмын наймдугаар сарын ярилцлагын "Эрийн гурван наадам"-ын нэг юм. Манай байгууллага энэ соёлын өв дээшлүүлж, бүх түвшний сурагчдыг урлага дээрээ нэгдүүлэхийг урьж байна.',
    },
  },
  quickLinks: {
    title: {
      en: 'Quick Links',
      mn: 'Түргэн холбоосууд',
    },
    cards: [
      {
        title: { en: 'About Us', mn: 'Бидний тухай' },
        description: {
          en: 'Learn our story and mission',
          mn: 'Бидний түүх, зорилгыг суралцах',
        },
        link: '/about/',
      },
      {
        title: { en: 'Schedule', mn: 'Хуваарь' },
        description: {
          en: 'Find our practice times',
          mn: 'Сургалтын цагийг үзэх',
        },
        link: '/schedule/',
      },
      {
        title: { en: 'Resources', mn: 'Эх сурвалж' },
        description: {
          en: 'Educational materials and guides',
          mn: 'Сурах материал болон гарын авлага',
        },
        link: '/resources/',
      },
    ],
  },
} as const;
