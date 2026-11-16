'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Gallery } from '@/components/Gallery/Gallery';
import { useLang } from '@/context/LangContext';
import styles from './Community.module.css';

const facebook = 'https://www.facebook.com/groups/mongolarchers';

const leaders = [
  {
    name: { en: 'Otgonjargal Dorj', mn: 'Доржийн Отгонжаргал' },
    role: { en: 'CEO and Founder', mn: 'Гүйцэтгэх захирал, Үүсгэн байгуулагч' },
    image: 'otgonjargal-dorj',
    founder: true,
  },
  {
    name: { en: 'Nicholas MacRitchie Freer', mn: 'Nicholas MacRitchie Freer' },
    role: { en: 'Founder and Board member', mn: 'Үүсгэн байгуулагч, Төлөөлөн удирдах зөвлөлийн гишүүн' },
    image: 'nicholas-macritchie-freer',
    founder: true,
  },
  {
    name: { en: 'Badamsukh Yadamsuren', mn: 'Ядамсүрэнгийн Бадамсүх' },
    role: { en: 'Board member', mn: 'Төлөөлөн удирдах зөвлөлийн гишүүн' },
    image: 'badamsukh-yadamsuren',
    founder: false,
  },
  {
    name: { en: 'Myagmarsuren Otgonjargal', mn: 'Отгонжаргалын Мягмарсүрэн' },
    role: { en: 'Board member', mn: 'Төлөөлөн удирдах зөвлөлийн гишүүн' },
    image: 'myagmarsuren-otgonjargal',
    founder: false,
  },
];

export function Leadership() {
  const { lang } = useLang();
  const mn = lang === 'mn';
  return <>
    <p>{mn ? 'Манай нэгдлийг үүсгэн байгуулж, хөгжүүлэхэд хувь нэмрээ оруулж буй хүмүүс.' : 'The people helping establish and guide our archery community.'}</p>
    {[{ title: mn ? 'Үүсгэн байгуулагчид' : 'Founders', founder: true }, { title: mn ? 'Удирдах зөвлөл' : 'Board members', founder: false }].map(group => <section key={group.title}>
      <h3>{group.title}</h3>
      <div className={styles.grid}>{leaders.filter(person => person.founder === group.founder).map(person => <div className={styles.card} key={person.image}>
        <Image className={styles.portrait} src={`/images/leadership/${person.image}.webp`}
          alt={person.name[lang]} width={400} height={440} />
        <h4>{person.name[lang]}</h4>
        <p className={styles.muted}>{person.role[lang]}</p>
      </div>)}</div>
    </section>)}
  </>;
}

export function Membership() {
  const { lang } = useLang();
  const mn = lang === 'mn';
  const benefits = mn ? [
    'Гишүүнчлэлийн хугацаанд улирлын болон Наадмын тэмцээн зэрэг манай цаашдын арга хэмжээнд оролцооны хураамжгүй оролцоно.',
    'Сур харвааны бүлгийн идэвхтэй гишүүдэд гэрчилгээ олгоно.',
    'Манай худалдаалах сур харвааны хэрэгслийг гишүүний хөнгөлөлттэй үнээр авна.',
  ] : [
    'No participation fees for our future events, including seasonal tournaments and the Naadam tournament, during your membership.',
    'A certificate for active members of the archery group.',
    'Member discounts on archery equipment we offer for sale.',
  ];
  return <div className={styles.panel}>
    <h3>{mn ? 'Гишүүнчлэлийн давуу талууд' : 'Membership benefits'}</h3>
    <ul className={styles.benefits}>{benefits.map(b => <li key={b}>{b}</li>)}</ul>
    <p className={styles.membershipFee}>{mn ? 'Жилийн гишүүнчлэлийн хураамж: ' : 'Annual membership: '}<strong>$25</strong>{mn ? ' ам.доллар / жил.' : ' USD per year.'}</p>
    <span className={styles.badge}>{mn ? 'Онлайн төлбөр удахгүй' : 'Online payments coming soon'}</span>
    <p>{mn ? 'Гишүүнээр элсэх талаар доорх Facebook бүлгээр бидэнтэй холбогдоорой.' : 'To ask about joining, connect with us through the Facebook group below.'}</p>
  </div>;
}

const copy = {
  sponsors: {
    en: ['Our Sponsors', 'Growing the tradition, together.', 'Celebrating the partners who help our archery community thrive.'],
    mn: ['Ивээн тэтгэгчид', 'Уламжлалаа хамтдаа хөгжүүлье.', 'Манай сур харвааны нэгдлийг дэмжих түншүүдэд талархал илэрхийлье.'],
  },
  donate: {
    en: ['Donate', 'Keep the tradition moving forward.', 'Support a community dedicated to sharing and preserving traditional Mongolian archery.'],
    mn: ['Хандив', 'Уламжлалаа ирээдүйд өвлүүлье.', 'Монголын уламжлалт сур харвааг түгээн дэлгэрүүлж, хадгалан хамгаалж буй нэгдлийг дэмжээрэй.'],
  },
  gallery: {
    en: ['Gallery', 'Moments worth remembering.', 'A curated collection of our major gatherings, tournaments, and shared traditions.'],
    mn: ['Зургийн цомог', 'Дурсамж болон үлдэх мөчүүд.', 'Томоохон уулзалт, тэмцээн, хамтын уламжлалыг харуулсан сонгомол зургууд.'],
  },
} as const;

export function CommunityPage({ kind }: { kind: keyof typeof copy }) {
  const { lang } = useLang();
  const [label, title, intro] = copy[kind][lang];
  return <>
    <header className={styles.hero}><div className={styles.heroInner}>
      {kind === 'donate' ? <h1>{label}</h1> : <><span className={styles.eyebrow}>{label}</span><h1>{title}</h1><p>{intro}</p></>}
    </div></header>
    <div className={styles.body}>
      <CommunitySection kind={kind} />
    </div>
  </>;
}

export function CommunitySection({ kind }: { kind: keyof typeof copy }) {
  const { lang } = useLang();
  const mn = lang === 'mn';
  return <>
      {kind === 'sponsors' && <>
        <p>{mn ? 'Монголын уламжлалт сур харваа, манай нэгдлийг дэмжиж буй ивээн тэтгэгчдэдээ баярлалаа.' : 'Thank you to the sponsors supporting our community and traditional Mongolian archery.'}</p>
        <div className={styles.grid}>{[
          { name: 'Numon Design Build', image: 'numon-design-build' },
          { name: 'Royal Kitchen', image: 'royal-kitchen' },
        ].map(sponsor => <div className={styles.card} key={sponsor.image}>
          <div className={styles.sponsorLogo}><Image src={`/images/sponsors/${sponsor.image}.webp`}
            alt={sponsor.name} fill sizes="(max-width: 640px) 100vw, 320px" /></div>
          <h3>{sponsor.name}</h3>
        </div>)}</div>
        <div className={styles.panel}><h3>{mn ? 'Бидэнтэй хамтран ажиллах' : 'Become a sponsor'}</h3>
          <p>{mn ? 'Манай нэгдлийг дэмжих талаар ярилцахыг хүсвэл бидэнтэй холбогдоорой.' : 'Interested in supporting our community? Get in touch to explore a partnership.'}</p>
          <a className={styles.action} href={facebook}>{mn ? 'Facebook-ээр холбогдох' : 'Connect on Facebook'}</a>
        </div>
      </>}
      {kind === 'donate' && <section className={styles.donation} aria-labelledby="giving-heading">
        <div className={styles.donationCopy}>
          <span className={styles.badge}>{mn ? 'Тун удахгүй' : 'Coming soon'}</span>
          <h2 id="giving-heading">{mn ? 'Хандив өгөх' : 'Make a donation'}</h2>
          <p>{mn ? 'Таны дэмжлэг Монголын уламжлалт сур харвааг хойч үедээ өвлүүлэх эрхэм зорилгод хувь нэмэр оруулна.' : 'Your support helps us pursue our mission of passing traditional Mongolian archery on to future generations.'}</p>
          <p>{mn ? 'Хандив болон түүний дэмжих үйл ажиллагааны талаарх дэлгэрэнгүй мэдээллийг энд нийтэлнэ.' : 'More details about giving and the work it supports will be shared here.'}</p>
          <p>{mn ? 'Онлайн хандивын систем хараахан нээгдээгүй байна. Дэмжлэг үзүүлэх талаар Facebook-ээр бидэнтэй холбогдоорой.' : 'Online donations are not open yet. Contact us on Facebook to ask about supporting the organization.'}</p>
          <a className={styles.action} href={facebook}>{mn ? 'Хандивын талаар холбогдох' : 'Ask about giving'}</a>
          <p className={styles.membershipLink}>{mn ? 'Гишүүнээр элсэхийг хүсэж байна уу?' : 'Looking for membership instead?'}{' '}<Link href="/about/#how-to-join">{mn ? 'Гишүүнчлэлийн мэдээлэл →' : 'View membership →'}</Link></p>
        </div>
      </section>}
      {kind === 'gallery' && <Gallery />}
  </>;
}
