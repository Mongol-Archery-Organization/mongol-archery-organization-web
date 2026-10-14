export const homeT = {
  hero: {
    title: {
      en: 'Mongol Archery Organization',
      mn: 'Mongol Archery Organization',
    },
    subtitle: {
      en: 'Honoring the Heritage of Mongolian Archery.',
      mn: 'Монгол нум сумын өв соёлыг хүндэтгэн дээдэлцгээе.',
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
  introduction: {
    title: {
      en: 'Our Community',
      mn: 'Бидний нэгдэл',
    },
    paragraphs: {
      en: [
        'Founded in May 2015, Mongol Archery Group is dedicated to preserving and promoting traditional Mongolian archery beyond the borders of Mongolia. We bring together people of all ages and backgrounds to learn, practice, and experience one of Mongolia’s most treasured traditions.',
        'Through archery, we aim to strengthen our community, share Mongolia’s rich cultural heritage, and pass these traditions on to future generations.',
      ],
      mn: [
        'Mongol Archery Group нь 2015 оны 5 дугаар сард байгуулагдсан бөгөөд Монголын уламжлалт сур харвааны өв соёлыг хилийн чанадад хадгалан хамгаалах, сурталчлан таниулах зорилготой байгууллага юм. Бид бүх насны хүмүүсийг нэгтгэн Монголын эрхэм нандин уламжлалуудын нэг болох сур харвааг сурч мэдэх, дадлагажих, өвлөн уламжлах боломжийг бүрдүүлдэг.',
        'Сур харваагаар дамжуулан бид монголчуудынхаа эв нэгдлийг бэхжүүлж, үндэсний өв соёлоо олон нийтэд таниулан сурталчилж, хойч үедээ өвлүүлэн үлдээхийг зорьдог.',
      ],
    },
    link: {
      en: 'Learn more about us →',
      mn: 'Бидний тухай дэлгэрэнгүй →',
    },
  },
  quickLinks: {
    title: {
      en: 'Quick Links',
      mn: 'Түргэн холбоосууд',
    },
    cards: [
      {
        title: {
          en: 'About Us',
          mn: 'Бидний тухай',
        },
        description: {
          en: 'Learn our story and mission',
          mn: 'Бидний түүх, зорилгыг суралцах',
        },
        link: '/about/',
      },
      {
        title: {
          en: 'Schedule',
          mn: 'Хуваарь',
        },
        description: {
          en: 'Find our practice times',
          mn: 'Сургалтын цагийг үзэх',
        },
        link: '/schedule/',
      },
      {
        title: {
          en: 'Resources',
          mn: 'Эх сурвалж',
        },
        description: {
          en: 'Educational materials and guides',
          mn: 'Сурах материал болон гарын авлага',
        },
        link: '/resources/',
      },
    ],
  },
} as const;
