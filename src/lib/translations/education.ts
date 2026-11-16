// Adapted from the supplied educational.pdf: scoring p. 1, safety pp. 2–3,
// equipment figures pp. 4–6. English is a translation of the Mongolian source.
const t = (en: string, mn: string) => ({ en, mn });

export const educationT = {
  equipmentHeading: t('Equipment Guide', 'Хэрэгслийн гарын авлага'),
  safetyHeading: t('Safety', 'Аюулгүй байдал'),
  scoringHeading: t('Scoring System', 'Оноо тооцох журам'),
  enlarge: t('Open the full-size illustration', 'Зургийг томоор үзэх'),
  equipmentIntro: t('Get to know the bow, arrow, string, thumb protection, and targets used in traditional Mongolian archery.', 'Монголын уламжлалт сур харваанд хэрэглэдэг нум, сум, хөвч, эрхийвч, бай суртай танилцаарай.'),
  partsHeading: t('Read the numbered diagram', 'Зургийн дугаарын тайлбар'),
  equipment: [
    {
      id: 'bow', title: t('The bow · Нум', 'Нум'), image: 'bow', width: 1010, height: 370,
      caption: t('The strung bow and its parts.', 'Нум, түүний эд анги.'),
      description: t('The grip sits between the bow’s two limbs. The rigid tips, string bridges, and nocks support the bowstring. Learn these parts before checking or handling a bow.', 'Нумын бариул нь хоёр тал буюу гарын дунд байрлана. Хичир, товх, хөвчний амгавч суух онь нь хөвчийг байрлуулахад чухал үүрэгтэй. Нумаа шалгаж, хэрэглэхийн өмнө эд ангиудыг нь таньж мэдээрэй.'),
      parts: [t('1. Grip', '1. Нумын бариур'), t('2. Limbs / arms', '2. Нумын хоёр тал буюу гар'), t('3. Rigid tips (khichir)', '3. Хичир'), t('4. Bowstring loop knots', '4. Хөвчний амгавчны зангилаа'), t('5. String bridges', '5. Товх'), t('6. Nocks for the string loops', '6. Хөвчний амгавч суух онь'), t('7. Bowstring (shown in the drawing)', '7. Хөвч (зурагт тэмдэглэснээр)')],
    },
    {
      id: 'arrow', title: t('The arrow · Сум', 'Сум'), image: 'arrow', width: 1000, height: 260,
      caption: t('A Khalkh archery arrow.', 'Халх харвааны сум.'),
      description: t('This diagram identifies the nock, shaft, feathers, and blunt head of a Khalkh archery arrow. Inspect the shaft, nock, and head before each shooting turn.', 'Энэ зурагт Халх харвааны сумны онь, мөс, өд, булцууг үзүүлжээ. Харвах ээлж бүрийн өмнө сумны мөс, онь, булцууны бүрэн бүтэн байдлыг шалгана.'),
      parts: [t('1. Nock', '1. Онь'), t('2. Shaft / wooden core', '2. Мөс, сумны үүсгүүр'), t('3. Feathers / fletching', '3. Өд'), t('4. Khatigar (front shaft section)', '4. Хатигар'), t('5. Main arrow body', '5. Сумны эх бие'), t('6. Blunt head (bultsuu)', '6. Булцуу'), t('7. Head cap', '7. Булцууны тах')],
    },
    {
      id: 'bowstring', title: t('The bowstring · Хөвч', 'Хөвч'), image: 'bowstring', width: 980, height: 420,
      caption: t('The bowstring and its parts.', 'Хөвч ба түүний хэсгүүд.'),
      description: t('The bowstring includes the main string, a nocking point, and end loops. Check that the loops and nocking point are secure and that the string shows no damage.', 'Хөвч нь гол, онилох цэг, амгавч зэрэг хэсгээс бүрдэнэ. Амгавч, онилох цэг найдвартай эсэх, хөвч гэмтсэн эсэхийг шалгана.'),
      parts: [t('1. Wrapped / served section (khuiluur)', '1. Хуйлуур'), t('2. Nocking point', '2. Онилох цэг'), t('3. Main string', '3. Хөвчний гол'), t('5. Loop lacing', '5. Амгавчны үдээр'), t('6. End loop', '6. Амгайвч')],
    },
    {
      id: 'thumb-rings', title: t('Thumb protection · Эрхийвч', 'Эрхийвч'), image: 'thumb-rings', width: 890, height: 530,
      caption: t('Two forms of thumb protection.', 'Эрхийвчнүүд.'),
      description: t('These two forms of thumb protection are used when drawing the string. Check the fit and condition before shooting; the safety instructions identify slipping thumb protection as a hazard.', 'Хөвч татахад хэрэглэдэг хоёр төрлийн эрхийвчийг үзүүлэв. Харвахын өмнө таарамж, бүрэн бүтэн байдлыг шалгана. Аюулгүй байдлын зааварт эрхийвч хамагдах эрсдэлээс сэргийлэхийг заасан.'),
      parts: [],
    },
    {
      id: 'belt', title: t('Archery belt · Агсуурга-бүс', 'Агсуурга-бүс'), image: 'belt', width: 960, height: 530,
      caption: t('The agsuurga belt.', 'Агсуурга-бүс.'),
      description: t('The agsuurga is the traditional belt illustrated among the archer’s accessories. The drawing shows its fastening rings and hanging ends.', 'Агсуурга-бүс нь харваачийн дагалдах хэрэгслийн нэг юм. Зурагт бүсний цагираг, унжлага бүхий хийцийг үзүүлсэн байна.'),
      parts: [],
    },
  ],
  targetsHeading: t('Targets and the target area · Сур, зурхай', 'Бай сур, зурхай'),
  targetsIntro: t('Sur are the target pieces; the zurkhai is the marked target area. The illustrations show khana targets, an individual khasaa target, and a target arrangement. Khana and khasaa have different scoring provisions.', 'Сур нь бай болгон хэрэглэдэг хэсэг, зурхай нь байг өрж байрлуулсан талбай юм. Зургуудад хана сур өрсөн зурхай, нэг ширхэг хасаа, хасааны өрөлтийг үзүүлсэн. Хана, хасаанд оноо тооцох тусгай заалт ялгаатай.'),
  targetFigures: [
    { image: 'khana-targets', width: 1010, height: 524, caption: t('Khana target area. Schematic view, not an exact competition layout.', 'Хана сурын зурхайн бүдүүвч. Тэмцээний яг таг өрөлтийг заагаагүй.') },
    { image: 'khasaa-target', width: 996, height: 580, caption: t('One khasaa target.', 'Хасаа, нэг ширхэг сур.') },
    { image: 'khasaa-arrangement', width: 950, height: 220, caption: t('Target arrangement; each target is 8 cm high and 8 cm across.', 'Хасаа-сурын өрөлт. Нэг сурыг 8 см өндөр, 8 см өргөн гэж тэмдэглэжээ.') },
  ],
  safetyIntro: t('Every participant must receive the safety briefing and follow the range judge’s directions.', 'Оролцогч бүр аюулгүй байдлын зааварчилгаа авч, зурхайн шүүгчийн шаардлагыг биелүүлнэ.'),
  safetyCallout: t('Signal before shooting. Wait for the range judge’s raised-hand permission before releasing an arrow.', 'Харвахын өмнө дохио өгнө. Зурхайн шүүгч гараа өргөн зөвшөөрсөн дохио өгсний дараа харвана.'),
  safetyGroups: [
    {
      title: t('Before practice or competition', 'Бэлтгэл, тэмцээний өмнө'),
      items: [
        t('Follow the group’s rules and complete the safety briefing before taking part.', 'Нэгдлийн дүрэм, журмыг мөрдөж, оролцохын өмнө аюулгүй байдлын зааварчилгаа авна.'),
        t('Personally inspect the bow, arrows, bowstring, thumb protection, and accessories before practice and before every shooting turn. Do not use cracked bows or arrows, loose nocks, or visibly damaged strings.', 'Бэлтгэл болон харвах ээлж бүрийн өмнө нум, сум, хөвч, эрхийвч, дагалдах хэрэгслээ биечлэн шалгана. Хугархай, гэмтэлтэй нум сум, мултрах онь, тасрах дөхсөн хөвч ашиглахгүй.'),
        t('Warm up and exercise before and after training or competition to help prevent injury.', 'Бэлтгэл, тэмцээний өмнө ба дараа гэмтлээс сэргийлж бие халаалт, дасгал хөдөлгөөн хийнэ.'),
        t('Choose clothing and equipment for the weather. Stop when visibility is restricted or conditions are unsafe.', 'Цаг агаарт тохирсон хувцас, хэрэглэл сонгоно. Үзэгдэх орчин хязгаарлагдсан, аюултай нөхцөлд харвааг үргэлжлүүлэхгүй.'),
        t('Carry bows and arrows in suitable cases or bags away from the practice or competition area.', 'Бэлтгэл, тэмцээний талбайгаас гадуур нум сумаа зориулалтын хайрцаг, цүнхэнд авч явна.'),
        t('Be prepared to provide first aid if an accident or near miss occurs.', 'Осол, осолд дөхсөн тохиолдолд эмнэлгийн анхны тусламж үзүүлэх бэлтгэлтэй байна.'),
      ],
    },
    {
      title: t('At the shooting line', 'Харвааны зогсоол дээр'),
      items: [
        t('Stay attentive, avoid distracting other archers, and keep people not involved in shooting or target duties away from the working area.', 'Анхааралтай байж, бусдын анхаарлыг сарниулахгүй. Харваа, зурхайн ажилд хамааралгүй хүнийг ажлын хэсэгт ойртуулахгүй.'),
        t('Check the positions and safety of people working at the targets. Raise either hand to give the “attention” signal to the range judge before shooting.', 'Зурхайд ажиллаж буй хүмүүсийн байрлал, аюулгүй байдлыг анхаарч, харвахын өмнө баруун эсвэл зүүн гараа өргөн шүүгчид “анхаар” дохио өгнө.'),
        t('The range judge responds with a raised hand to authorize the ready archer to shoot. Do not release before that permission.', 'Зурхайн шүүгч харвахад бэлэн болсон харваачид гараа өргөн зөвшөөрсөн дохио өгнө. Тэр зөвшөөрлөөс өмнө харвахгүй.'),
        t('When archers shoot at different distances, the nearer archer must leave space and stand on the closed side of the farther archer’s bow. Have the instructor show you this position.', 'Өөр өөр зайд харвах үед ойрын зайд харвагч нь холын зайд харвагчийн нумны битүү талд зогсож, холдон зай тавьж өгнө. Энэ байрлалыг багшаар заалгана.'),
      ],
    },
    {
      title: t('For assigned target-area duties', 'Зурхайд ажиллах үед'),
      items: [
        t('Follow the range judge’s instructions. Choose a position where the incoming arrow’s direction, flight, and speed remain visible.', 'Зурхайн шүүгчийн зааврыг дагана. Ирж буй сумны чиглэл, даллалт, хурдыг харах боломжтой байрлалд зогсоно.'),
        t('Do not stand ahead of another target-area archer’s shoulder or block the view of the person behind you. Keep at least one meter between people.', 'Өмнө зогсож буй харваачийн мөрнөөс илүү гарч зогсохгүй, арын харваачийн харааг халхлахгүй. Хоорондоо нэг метрээс багагүй зайтай байна.'),
        t('While targets are being reset after a hit, an archer stands to close the target area; the range judge may appoint that person.', 'Сум оносны дараа хасаа өрж байх үед нэг харваач зурхайг хааж зогсоно. Түүнийг зурхайн шүүгч томилж болно.'),
        t('Limit activity at the targets to authorized duties such as indicating arrow placement, calling hits, and resetting targets.', 'Зурхайд сумны бууц заах, уухайлах, хасаа өрөх зэрэг дүрэмд заасан ажлыг л гүйцэтгэнэ.'),
      ],
    },
    {
      title: t('Prohibited actions', 'Хориглох зүйлс'),
      items: [
        t('Never leave a strung bow unattended on the range or in the practice hall.', 'Талбай, заал танхимд хөвчилсөн нумыг хараа хяналтгүй орхихгүй.'),
        t('Do not participate after consuming alcohol on the day of shooting or the previous day. Alcohol and tobacco use are prohibited on the range.', 'Харвах өдөр болон өмнөх өдөр согтууруулах ундаа хэрэглэсэн бол оролцохгүй. Талбай, зурхайд архи, тамхи хэрэглэхийг хориглоно.'),
        t('Do not use a phone or distract others while working in the target area.', 'Зурхайд утсаар ярьж, бусдын анхаарлыг сарниулахгүй.'),
        t('Do not shoot in an undesignated or unprepared location, or in conditions harmful to participants’ health.', 'Зориулалтын бус, бэлтгээгүй газар болон эрүүл мэндэд хортой нөхцөлд харвахгүй.'),
      ],
    },
    {
      title: t('Handling the bow', 'Нумтай харьцах'),
      items: [
        t('Never dry-fire: do not release the bowstring after drawing without an arrow.', 'Нумыг хоосон татсан үед хөвчийг хоосон тавьж, мулталж болохгүй.'),
        t('Never draw a bow toward a person. With an arrow fitted, do not point toward people or property; an accidental release can cause injury or damage.', 'Нумыг хүн рүү чиглүүлэн татахгүй. Сумтай нумыг хүн, эд зүйл рүү чиглүүлэхгүй; сум алдах нь гэмтэл, хохирол учруулж болзошгүй.'),
      ],
    },
    {
      title: t('Health requirements', 'Эрүүл мэндийн шаардлага'),
      items: [
        t('Seek medical consultation when excessive exertion or physical or psychological difficulties affect participation.', 'Хэт ачаалал, бие, сэтгэлзүйн өөрчлөлт, хямралтай үед эмчид хандаж зөвлөгөө авна.'),
        t('Pregnant participants must have medical permission before taking part.', 'Жирэмсэн оролцогч эмчийн магадлах бичиг, зөвшөөрөлтэй оролцоно.'),
      ],
    },
  ],
  scoringIntro: t('These are the scoring provisions supplied for the Washington, DC Mongolian community’s National Naadam archery event. They explain which shots count and how the target-area team signals the result.', 'Эдгээр нь Вашингтон ДС хотын монголчуудын “Үндэсний баяр наадам”-ын сурын харваанд зориулсан оноо авах журам юм. Ямар сумыг оноонд тооцох, зурхайгаас үр дүнг хэрхэн дохиолохыг тайлбарлана.'),
  scoringCallout: t('A qualifying hit must move the target by one full sur’s distance. Simply touching a target does not establish a score. The khana and khasaa pass-through rules below are separate provisions.', 'Ердийн оноо авахын тулд оносон сурыг нэг бүтэн сурын зайд хөдөлгөсөн байна. Зөвхөн шүргэх нь оноо болохгүй. Хана, хасааг сүлбэсэн сумны тусгай заалтыг доор үзүүлэв.'),
  scoringRules: [
    {
      title: t('A scoring hit', 'Оноонд тооцох сум'),
      text: t('An arrow landing inside the front line (ganga), or striking the target directly, counts when it moves the struck target by one sur’s distance. A hit on an azraga-sur marker does not count.', 'Сум зурхайн өвөр шугам (ганга)-ны дотор тусах буюу бай сурыг шууд онож, оносон сурыг байрнаас нь нэг сур тавих зайд хөдөлгөвөл оноонд тооцно. Азрага-суранд хүрч оносныг оноонд тооцохгүй.'),
    },
    {
      title: t('Short of the line', 'Дутсан сум'),
      text: t('An arrow landing outside the front line is short. The target-area team signals the shortfall using traditional measures such as töö, sööm, tokhoi, ald, and delem.', 'Сум өвөр шугам (ганга)-ны гадна тусвал дутсанд тооцно. Зурхай дээрх харваачид дутсан хэмжээг төө, сөөм, тохой, алд, дэлэм зэрэг хэмжээгээр дохиолж өгнө.'),
    },
    {
      title: t('Over the target', 'Давсан сум'),
      text: t('An arrow passing over the targets, whether it brushes them or not, is over. The target-area team holds a palm downward at the height the arrow passed to show the overshoot.', 'Сум бай-сурны дээгүүр шүргэж эсвэл шүргэлгүй гарвал давсанд тооцно. Гарын алгыг доош харуулж, сум өнгөрсөн өндөрт барин давааны хэмжээг мэдэгдэнэ.'),
    },
    {
      title: t('Wide of the target', 'Хазгай сум'),
      text: t('An arrow passing beside the targets, whether it brushes them or not, is wide. The target-area team turns both palms upward and gestures inward to signal the miss.', 'Сум бай-сурны хажуугаар шүргэж эсвэл шүргэлгүй гарвал хазгайд тооцно. Хоёр гарын алгыг дээш харуулан дотогш дохиж мэдэгдэнэ.'),
    },
    {
      title: t('A bouncing arrow', 'Дуурсан сум'),
      text: t('An arrow that lands in the target area and jumps over the targets is called duurakh. The signal is to cross and rotate both arms in front of the body.', 'Зурхайд туссан сум бай-сурны дээгүүр харайж, үсрэн гарвал “сум дуурах” гэнэ. Хоёр гараа урдаа зөрүүлэн эргүүлж дохио өгнө.'),
    },
    {
      title: t('Insufficient target movement', 'Байсан сум'),
      text: t('An arrow landing in the target area that fails to reach the targets, or reaches them without moving a khasaa by one full sur’s distance, is called baikh. The signal is both palms downward, moving up and down in front of the body.', 'Зурхайд туссан сум байнд хүрээгүй, эсвэл хүрсэн ч хасааг нэг бүтэн сурын зайд хөдөлгөж чадаагүй бол “сум байх” гэнэ. Хоёр гарын алгыг доош харуулж, урдаа дээш доош хөдөлгөнө.'),
    },
    {
      title: t('Disputed results', 'Онооны маргаан'),
      text: t('If archers disagree about a hit, the range judge decides. A supervising judge is involved when necessary.', 'Оносон эсэх талаар санал зөрвөл зурхайн шүүгч шийдвэрлэнэ. Шаардлагатай үед хяналтын шүүгч оролцоно.'),
    },
    {
      title: t('Passing through khana targets', 'Хана сурыг сүлбэсэн сум'),
      text: t('An arrow passing through khana targets counts when the arrow’s body has passed completely through.', 'Хана суранд сүлбэсэн сумыг сумны бүдүүн буюу бие нь бүтэн гарсан тохиолдолд оноонд тооцно.'),
    },
    {
      title: t('Passing through khasaa targets', 'Хасаа сурыг сүлбэсэн сум'),
      text: t('An arrow passing through khasaa targets does not count.', 'Хасаа суранд сүлбэж гарсан сумыг оноонд тооцохгүй.'),
    },
  ],
  scoringScope: t('Confirm the total arrow count, maximum match score, and tie-break rules with the event officials before competing.', 'Тэмцээнд оролцохын өмнө нийт харвах сумны тоо, дээд оноо, тэнцсэн оноог шийдвэрлэх журмыг шүүгчээс тодруулна.'),
} as const;
