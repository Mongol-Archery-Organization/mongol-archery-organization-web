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
  about: {
    title: {
      en: 'About Mongolian Archery',
      mn: 'Монгол нум сумын тухай',
    },
    description: {
      en: `Few martial traditions in human history rival the depth, power, and 
            elegance of Mongolian archery. For millennia, the bow was not merely 
            a weapon on the steppe — it was a way of life. It fed families, 
            defended homelands, and built empires. To be Mongolian was, in many 
            ways, to be an archer. Perhaps no single moment captures the awe-inspiring 
            heights of Mongolian archery better than the feat recorded in 
            the Ghenghis Khan Stele, where Esungge shot an arrow that traveled 335 alds — 
            a distance of approximately 540 meters, or over a third of a mile. 
            To put that in perspective, the modern record for the farthest archery 
            target hit (recognized by the Guinness World Records) is 330 meters.
            Today, Mongolian archery is recognized by UNESCO as part of the Intangible 
            Cultural Heritage of Humanity. Across the world, Mongolian communities 
            and archery enthusiasts are working to keep this tradition alive by learning 
            the old techniques, crafting traditional bows, and passing the knowledge to 
            the next generation. The Mongol Archery Organization is here to carry that 
            tradition forward by welcoming anyone who wants to learn, practice, and 
            be part of something that has endured for centuries.`,
      mn: `Хүн төрөлхтний түүхэнд Монголын нумын урлагтай өрсөлдөх цөөхөн уламжлал бий. 
            Мянган жилийн турш нум сум нь зөвхөн зэвсэг байгаагүй — энэ бол амьдралын хэв 
            маяг байсан. Нум сумаар гэр бүлээ тэжээж, нутгаа хамгаалж, эзэнт гүрнүүдийг 
            байгуулж иржээ. Монгол хүн байна гэдэг нь, олон талаараа, нумч байна гэсэн 
            үг байлаа. Монголын нумын урлагийн өндөр цэгийг илэрхийлсэн хамгийн тод жишээ 
            бол Чингис хааны чулуун бичээст тэмдэглэгдсэн Есүнгэгийн харвалт юм. 
            Есүнгэ 335 алд буюу ойролцоогоор 540 метр алсад харвасан нь өнөөг хүртэл домогт 
            хэвээр үлджээ. Харьцуулбал, Guinness-ийн дэлхийн рекордоор баталгаажсан орчин үеийн 
            хамгийн алс харвалтын рекорд 330 метр байдаг. Өнөөдөр Монголын нумын урлагийг 
            UNESCO хүн төрөлхтний өвийн нэг хэсэг болгон хүлээн зөвшөөрчээ. 
            Дэлхийн өнцөг булан бүрт монголчууд болон нумын урлагийг сонирхогчид эртний 
            арга техникийг эзэмшиж, уламжлалт нум хийж, мэдлэгээ залуу үедээ дамжуулан 
            энэ өвийг амьд байлгахын төлөө зүтгэж байна. Mongol Archery Organization нь энэ 
            уламжлалыг АНУ нутагын DMV хэсэгт үргэлжлүүлэн хөгжүүлэхийн тулд байгуулагдсан бөгөөд 
            суралцахыг хүсэгч хэн бүхнийг нээлттэй хүлээн авч байна.`,
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
