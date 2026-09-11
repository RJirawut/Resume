<script setup>
import profileImage from './assets/profile.png'
import psuEmblem from './assets/psu-emblem.png'
import khonhadEmblem from './assets/khonhad-emblem.png'
import certMl from './assets/cert-ml.jpg'
import certFlutter from './assets/cert-flutter.jpg'
import certScholarship from './assets/cert-scholarship.jpg'
import certPride from './assets/cert-pride.jpg'
import certSmo from './assets/cert-smo.jpg'
import certCriticalThinking from './assets/cert-critical-thinking.png'
import certSports from './assets/cert-sports.jpg'
import certIctClub from './assets/cert-ict-club.jpg'
import certFactoryQuality from './assets/cert-factory-quality.jpg'
import certEnvQuality from './assets/cert-env-quality.jpg'
import certPwaVue from './assets/cert-pwa-vue.jpg'
import certAiIllustrator from './assets/cert-ai-illustrator.jpg'
import certEvolutionComputer from './assets/cert-evolution-computer.jpg'
import certHealthyBodyMind from './assets/cert-healthy-body-mind.jpg'
import certComputerHardware from './assets/cert-computer-hardware.png'
import certTrafficVolunteer from './assets/cert-traffic-volunteer.jpg'
import certEnglishCamp from './assets/cert-english-camp.jpg'
import certAntiDrugCamp from './assets/cert-anti-drug-camp.jpg'

const person = {
  initials: 'JR',
  name: 'จิรวุฒิ เรืองพรหม',
  englishName: 'JIRAWUT RUEANGPROM',
  nickname: 'จอม',
  role: 'Frontend Developer',
  email: 'Jirawut.ru@gmail.com',
  phone: '093-024-7378',
  line: 'jirawut1203',
  facebook: 'Jirawut Rueangprom',
  location: 'Nakhon Si Thammarat, Thailand',
  profileImage,
  intro:
    'I design and build clean, responsive web interfaces with Vue, JavaScript, and modern frontend workflows.',
  profile:
    'ผมเป็นคนมุ่งมั่น ตั้งใจทำงานทุกอย่างให้ประสบความสำเร็จ ไม่ย่อท้อต่ออุปสรรคถึงแม้ว่าอุปสรรคนั้นจะยากเพียงใดก็ต้องอดทนและเอาชนะมันให้ได้ สามารถทำงานภายใต้แรงกดดันและรับฟังความคิดเห็นจากผู้อื่นได้ มีความตั้งใจเรียนรู้สิ่งใหม่ๆได้เสมอ นอกจากนี้ผมยังมีทักษะในการใช้ AI เข้ามาผสมผสานเพื่อให้งานออกมามีประสิทธิภาพมากที่สุด',
}

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#profile' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Training', href: '#training' },
  { label: 'Works', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

const trainings = [
  {
    title: 'Mobile App Development With Flutter & Dart',
    issuer: 'โครงการ SCIENCE IT คณะวิทยาศาสตร์ มหาวิทยาลัยสงขลานครินทร์',
    date: '31 ตุลาคม - 2 พฤศจิกายน 2022',
    image: certFlutter,
  },
  {
    title: 'Critical Thinking (กระบวนการคิดวิเคราะห์)',
    issuer: 'Prince of Songkla University (PSU MOOC)',
    date: '11 ตุลาคม 2022',
    image: certCriticalThinking,
  },
  {
    title: 'เกียรติบัตรเชิดชูเกียรติ ฝ่ายเทคโนโลยีสารสนเทศ สโมสรนักศึกษา ปีการศึกษา 2564',
    issuer: 'คณะวิทยาศาสตร์ มหาวิทยาลัยสงขลานครินทร์',
    date: '7 กรกฎาคม 2022',
    image: certSmo,
  },
  {
    title: 'นักศึกษาทุนนักกิจกรรมดีเด่น ระดับคณะ ปีการศึกษา 2563',
    issuer: 'คณะวิทยาศาสตร์ มหาวิทยาลัยสงขลานครินทร์',
    date: '23 มิถุนายน 2022',
    image: certScholarship,
  },
  {
    title: 'เกียรติบัตรเชิดชูเกียรติ ร่วมสร้างชื่อเสียงในงานวิทย์ภาคภูมิ ประจำปี 2565',
    issuer: 'คณะวิทยาศาสตร์ มหาวิทยาลัยสงขลานครินทร์',
    date: '1 มิถุนายน 2022',
    image: certPride,
  },
  {
    title: 'เกียรติบัตรเชิดชูเกียรติ ฝ่ายกีฬา สโมสรนักศึกษา ปีการศึกษา 2563',
    issuer: 'คณะวิทยาศาสตร์ มหาวิทยาลัยสงขลานครินทร์',
    date: '1 มิถุนายน 2022',
    image: certSports,
  },
  {
    title: 'เกียรติบัตรเชิดชูเกียรติ คณะกรรมการ ชุมนุมเทคโนโลยีสารสนเทศและการสื่อสาร สโมสรนักศึกษา ปีการศึกษา 2563',
    issuer: 'คณะวิทยาศาสตร์ มหาวิทยาลัยสงขลานครินทร์',
    date: '1 มิถุนายน 2022',
    image: certIctClub,
  },
  {
    title: 'การสร้างงาน Graphic ด้วยโปรแกรม Adobe Illustrator',
    issuer: 'สำนักงานดิจิทัลนวัตกรรมและระบบอัจฉริยะ (DIIS-PSU)',
    date: 'พฤษภาคม 2022',
    image: certAiIllustrator,
  },
  {
    title: 'Building Progressive Web Application with Vue.js and Firebase',
    issuer: 'โครงการ Science IT คณะวิทยาศาสตร์ มหาวิทยาลัยสงขลานครินทร์',
    date: '11 เมษายน 2022',
    image: certPwaVue,
  },
  {
    title: 'Science smart skills หลักสูตร ระบบมาตรฐานคุณภาพสิ่งแวดล้อม',
    issuer: 'คณะวิทยาศาสตร์ ม.สงขลานครินทร์ (ร่วมกับ บริษัท เบทาโกร จำกัด (มหาชน))',
    date: '25 ธันวาคม 2021',
    image: certEnvQuality,
  },
  {
    title: 'Science smart skills หลักสูตร ระบบมาตรฐานคุณภาพในโรงงาน',
    issuer: 'คณะวิทยาศาสตร์ ม.สงขลานครินทร์ (ร่วมกับ บมจ.เจริญโภคภัณฑ์อาหาร)',
    date: '11 ธันวาคม 2021',
    image: certFactoryQuality,
  },
  {
    title: 'Machine Learning for Data Science and Analytics',
    issuer: 'คณะวิทยาศาสตร์ มหาวิทยาลัยสงขลานครินทร์ (Virtual Workshop)',
    date: '25 ธันวาคม 2020',
    image: certMl,
  },
  {
    title: 'Healthy Body And Mind',
    issuer: 'Prince of Songkla University (PSU MOOC)',
    date: '2 กันยายน 2020',
    image: certHealthyBodyMind,
  },
  {
    title: 'Evolution of Computer',
    issuer: 'Prince of Songkla University (PSU MOOC)',
    date: '25 ธันวาคม 2019',
    image: certEvolutionComputer,
  },
  {
    title: 'Computer Hardware',
    issuer: 'Prince of Songkla University (PSU MOOC)',
    date: '25 ธันวาคม 2019',
    image: certComputerHardware,
  },
  {
    title: 'ENGLISH CAMP 2018',
    issuer: 'Khonhadprachason School',
    date: '21 - 22 กรกฎาคม & 4 - 5 สิงหาคม 2018',
    image: certEnglishCamp,
  },
  {
    title: 'โครงการขอนหาดปลอดภัยด้วยค่ายเยาวชนอาสาพลังแผ่นดิน "ลูกขอนหาดวัยใส ห่างไกลสารเสพติด"',
    issuer: 'อบต.ขอนหาด ร่วมกับ โรงเรียนขอนหาดประชาสรรค์',
    date: '24 - 27 กันยายน 2017',
    image: certAntiDrugCamp,
  },
  {
    title: 'อบรมอาสาสมัครจราจร หลักสูตรการฝึกอบรมเยาวชนต้านยาเสพติด',
    issuer: 'อบต.ขอนหาด ร่วมกับ สถานีตำรวจภูธรขอนหาด',
    date: '12 - 13 กันยายน 2017',
    image: certTrafficVolunteer,
  },
]

const facts = [
  { label: 'ชื่อ', value: person.name },
  { label: 'ชื่อเล่น', value: person.nickname },
  { label: 'วันเกิด', value: '12 มีนาคม 2543' },
  { label: 'อายุ', value: '26 ปี' },
  { label: 'ที่อยู่', value: 'บ้านเลขที่ 102 ม.8 ต.ขอนหาด อ.ชะอวด จ.นครศรีธรรมราช 80180' },
]

const experiences = [
  {
    role: 'Intern',
    place: 'สำนักนวัตกรรมดิจิทัลและระบบอัจฉริยะ มหาวิทยาลัยสงขลานครินทร์',
    periodLabel: 'Intern',
    periodDate: '2022',
    detailsTitle: 'รายละเอียดงาน :',
    details: [
      'ทำหน้าที่เป็น Editor คอยดูแลการตัดต่อคลิปวีดีโอที่เกี่ยวข้องกับการสอนการใช้โปรแกรม Microsoft PowerPoint เพื่อให้ผู้เรียนได้รับประสบการณ์ที่ดีที่สุด',
      'ใช้โปรแกรม Adobe Photoshop เพื่อออกแบบกราฟิกและภาพประกอบที่น่าสนใจ เพิ่มความน่าสนใจให้กับเนื้อหาวีดีโอ',
      'ใช้ Adobe Premiere Pro ในการตัดต่อวีดีโออย่างมืออาชีพ เพื่อให้วีดีโอดูเรียบง่ายและเข้าใจง่าย',
      'ใช้ Adobe After Effects เพื่อสร้างเอฟเฟกต์พิเศษที่ช่วยเสริมสร้างความน่าสนใจและความเข้าใจในเนื้อหา',
      'ร่วมงานกับทีมพัฒนาสื่อการสอนเพื่อให้แน่ใจว่าวีดีโอที่ผลิตออกมาสอดคล้องกับวัตถุประสงค์การเรียนการสอน',
      'ตรวจสอบและแก้ไขงานตัดต่อให้ตรงตามมาตรฐานคุณภาพก่อนส่งมอบให้กับผู้ใช้บริการ',
    ],
  },
  {
    role: 'Cooperative',
    place: 'บริษัท อิมเพิลพลัส จํากัด',
    periodLabel: 'Cooperative',
    periodDate: '2023',
    detailsTitle: 'รายละเอียดงาน :',
    details: [
      'ทำหน้าที่เขียนโปรแกรมในส่วนของหน้าเว็บไซต์ (Front End) โดยพัฒนาและออกแบบให้มีความน่าสนใจและใช้งานง่าย',
      'ติดตั้งซอฟต์แวร์ที่จำเป็นสำหรับการทำสหกิจศึกษา รวมถึงการตั้งค่าและเตรียมสภาพแวดล้อมการทำงานให้พร้อม',
      'ดำเนินการติดตั้งระบบปฏิบัติการแบบ Dual Boot โดยลง Ubuntu ลงในเครื่อง เพื่อทำความคุ้นเคยกับระบบปฏิบัติการ Linux',
      'ติดตั้ง Angular และจัดการลง Extensions ที่จำเป็นสำหรับการพัฒนาโปรแกรมด้วย Angular',
      'เขียนโปรแกรมด้วย Angular เพื่อสร้างฟังก์ชันการทำงานที่ตอบสนองความต้องการของผู้ใช้และเพิ่มประสิทธิภาพในการทำงาน',
    ],
  },
  {
    role: 'Administration',
    place: 'ฐานทัพเรือสงขลา',
    periodLabel: 'Admin',
    periodDate: '2024',
    detailsTitle: 'รายละเอียดงาน :',
    details: [
      'รับเรื่องเอกสารจากแผนกต่างๆ และส่งต่อให้กับผู้ที่เกี่ยวข้องอย่างรวดเร็ว เพื่อให้การทำงานเป็นไปอย่างราบรื่น',
      'ออกเลขที่เอกสารทั้งภายในและภายนอกอย่างถูกต้องและตรงเวลา เพื่อให้สามารถติดตามเอกสารได้ง่าย',
      'สแกนเอกสารและจัดเก็บในระบบดิจิทัล เพื่อให้เข้าถึงข้อมูลได้สะดวกและลดการใช้กระดาษ',
      'ตรวจสอบเอกสารอย่างละเอียดเพื่อให้แน่ใจว่าข้อมูลถูกต้อง',
      'ดูแลความสะอาดและเรียบร้อยภายในห้องทำงาน',
    ],
  },
  {
    role: 'Document Service Staff',
    place: 'ร้านถ่ายเอกสาร Lucky',
    periodLabel: 'Service',
    periodDate: '2025',
    detailsTitle: 'รายละเอียดงาน :',
    details: [
      'พิมพ์งาน เอกสารต่างๆ ถ่ายเอกสารและเข้าเล่มเอกสารอย่างละเอียด เพื่อให้สามารถเข้าถึงข้อมูลได้ง่ายและเป็นระเบียบ',
      'ออกแบบงานอินโฟกราฟิกต่างๆ ที่สอดคล้องกับแนวทางและภาพลักษณ์ของร้าน เพื่อดึงดูดลูกค้าและสร้างความน่าสนใจ',
      'นับเงินและทำบัญชีอย่างถูกต้องและแม่นยำ เพื่อให้สามารถติดตามและจัดการรายรับ-รายจ่ายได้อย่างมีประสิทธิภาพ',
      'ดูแลรักษาความสะอาดและความเรียบร้อยภายในร้าน เพื่อสร้างบรรยากาศที่น่าเข้ามาใช้บริการและสร้างความประทับใจให้กับลูกค้า',
    ],
  },
  {
    role: 'Freelance Developer',
    place: 'งานอิสระ',
    periodLabel: 'Freelance',
    periodDate: '2025 - Now',
    detailsTitle: 'รายละเอียดงาน :',
    details: [
      'รับทำงานเป็น Freelance Developer โดยมุ่งเน้นการพัฒนา Single Page เป็นหลัก',
      'ออกแบบและพัฒนาระบบจัดการหอพักรายวันและรายเดือน เพื่อให้ผู้ใช้สามารถบริหารจัดการข้อมูลได้อย่างสะดวกและรวดเร็ว',
      'นำเสนอผลงานในรูปแบบต่างๆ บนแพลตฟอร์มออนไลน์ เพื่อเพิ่มโอกาสในการเข้าถึงลูกค้าและขยายฐานลูกค้าให้กว้างขึ้น',
      'ทำงานร่วมกับลูกค้าในการปรับปรุงฟีเจอร์และแก้ไขปัญหาต่างๆ เพื่อให้ตรงตามความต้องการและสร้างความพึงพอใจสูงสุด',
      'ติดตามแนวโน้มและเทคโนโลยีใหม่ๆ เพื่อพัฒนาทักษะและนำมาปรับใช้ในงานพัฒนาให้มีคุณภาพดีขึ้น',
    ],
  },
]

const workSamples = [
  {
    title: 'Business Single Page Website',
    type: 'Single Page Website',
    description:
      'เว็บไซต์ธุรกิจหน้าเดียวสำหรับแนะนำบริการ สินค้า จุดเด่น และช่องทางติดต่อ พร้อมระบบนำทางและ responsive layout',
    stack: ['VueJS', 'CSS', 'Responsive'],
  },
  {
    title: 'Frontend UI Sections',
    type: 'Interface Design',
    description:
      'ออกแบบ hero, timeline, card, skill และ contact sections ให้เป็นระบบ อ่านง่าย และเหมาะกับเว็บสมัครงาน',
    stack: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'AI-assisted Workflow',
    type: 'Productivity',
    description:
      'ใช้ AI ช่วยวางโครงงาน ตรวจแนวคิด อธิบายโค้ด และเร่ง workflow โดยยังตรวจสอบผลลัพธ์ด้วยตัวเอง',
    stack: ['AI Tools', 'Figma', 'Review'],
  },
]

const skillGroups = [
  {
    title: 'Programming',
    skills: ['HTML', 'CSS', 'JavaScript', 'VueJS', 'React', 'Angular', 'C', 'Java', 'PHP', 'Python'],
  },
  {
    title: 'Design',
    skills: ['Responsive Design', 'UX/UI', 'Graphic Design', 'Video Editor'],
  },
  {
    title: 'Tools',
    skills: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe Premiere Pro', 'Microsoft Office', 'AI Workflow'],
  },
]

const languages = [
  { name: 'ไทย', value: 'ใช้งานได้ดี', level: 100 },
  { name: 'อังกฤษ', value: 'พื้นฐาน', level: 40 },
]

const educations = [
  {
    degree: 'วิทยาศาสตรบัณฑิต',
    major: 'เทคโนโลยีสารสนเทศและการสื่อสาร',
    university: 'มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตหาดใหญ่',
    logo: psuEmblem,
  },
  {
    degree: 'มัธยมศึกษาตอนปลาย',
    major: 'แผนการเรียน วิทย์ - คณิต',
    university: 'โรงเรียนขอนหาดประชาสรรค์',
    logo: khonhadEmblem,
  },
  {
    degree: 'มัธยมศึกษาตอนต้น',
    major: '',
    university: 'โรงเรียนขอนหาดประชาสรรค์',
    logo: khonhadEmblem,
  },
]

const address = [
  'บ้านเลขที่ 102 ม.8',
  'ต.ขอนหาด อ.ชะอวด',
  'จ.นครศรีธรรมราช 80180',
]

const contacts = [
  { label: 'Email', value: person.email, href: `mailto:${person.email}` },
  { label: 'Phone', value: person.phone, href: 'tel:0930247378' },
  { label: 'Line', value: person.line, href: 'https://line.me/ti/p/~jirawut1203' },
  {
    label: 'Facebook',
    value: person.facebook,
    href: 'https://www.facebook.com/search/top?q=Jirawut%20Rueangprom',
  },
]
</script>

<template>
  <main>
    <nav class="topbar" aria-label="Primary navigation">
      <a class="brand" href="#top" aria-label="Back to top">
        <strong>{{ person.englishName }}</strong>
      </a>

      <div class="nav-links">
        <a v-for="item in navItems" :key="item.href" :href="item.href">
          {{ item.label }}
        </a>
      </div>
    </nav>

    <header id="top" class="hero">
      <aside class="hero-visual" aria-label="Profile photo">
        <div class="photo-frame">
          <img :src="person.profileImage" :alt="person.name" />
        </div>
      </aside>

      <section class="hero-copy">
        <h1>
          I'M
          <span>{{ person.englishName }}</span>
        </h1>

        <div class="hero-actions">
          <a class="read-more" href="#profile">READ MORE</a>
          <a class="ghost-action" :href="`mailto:${person.email}`">CONTACT</a>
        </div>
      </section>
    </header>

    <section id="profile" class="section about-section">
      <div class="section-label">
        <span>01</span>
        <p>About Me</p>
      </div>

      <div class="about-grid">
        <article>
          <h2>สร้างเว็บที่ดูดี ใช้งานง่าย และพร้อมต่อยอด</h2>
          <p>{{ person.profile }}</p>
        </article>

        <div class="fact-list">
          <div v-for="fact in facts" :key="fact.label">
            <span>{{ fact.label }}</span>
            <strong>{{ fact.value }}</strong>
          </div>
        </div>
      </div>
    </section>

    <section id="education" class="section education-section">
      <div class="section-label">
        <span>02</span>
        <p>Education</p>
      </div>

      <div class="education-list">
        <div v-for="(edu, index) in educations" :key="index" class="education-layout">
          <figure class="education-logo">
            <img :src="edu.logo" :alt="edu.university" />
          </figure>

          <article class="education-copy">
            <p class="card-kicker">Education</p>
            <h3>{{ edu.degree }}</h3>
            <strong v-if="edu.major">{{ edu.major }}</strong>
            <span>{{ edu.university }}</span>
          </article>
        </div>
      </div>
    </section>

    <section id="experience" class="section experience-section">
      <div class="section-label">
        <span>03</span>
        <p>Experience</p>
      </div>

      <div class="timeline">
        <article v-for="item in experiences" :key="item.role" class="timeline-item">
          <div class="timeline-content">
            <h3>{{ item.place }}</h3>
            <div class="timeline-meta">
              <strong>{{ item.role }}</strong>
              <span>{{ item.periodDate }}</span>
            </div>
            <span v-if="item.description">{{ item.description }}</span>
            <div v-if="item.details && item.details.length" class="timeline-details">
              <strong>{{ item.detailsTitle }}</strong>
              <ul>
                <li v-for="detail in item.details" :key="detail">{{ detail }}</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section id="training" class="section training-section">
      <div class="section-label">
        <span>04</span>
        <p>Training & Certifications</p>
      </div>

      <div class="training-grid">
        <article v-for="item in trainings" :key="item.title" class="training-card">
          <div class="cert-image-wrapper">
            <img :src="item.image" :alt="item.title" loading="lazy" />
          </div>
          <div class="training-info">
            <p class="cert-date">{{ item.date }}</p>
            <h3>{{ item.title }}</h3>
            <span class="cert-issuer">{{ item.issuer }}</span>
          </div>
        </article>
      </div>
    </section>

    <section id="work" class="section work-section">
      <div class="section-label">
        <span>05</span>
        <p>Selected Work</p>
      </div>

      <div class="work-grid">
        <article v-for="work in workSamples" :key="work.title" class="work-card">
          <p>{{ work.type }}</p>
          <h3>{{ work.title }}</h3>
          <span>{{ work.description }}</span>
          <div class="tag-list">
            <small v-for="tag in work.stack" :key="tag">{{ tag }}</small>
          </div>
        </article>
      </div>
    </section>

    <section id="skills" class="section skills-section">
      <div class="section-label">
        <span>06</span>
        <p>Skills</p>
      </div>

      <div class="skills-layout">
        <article v-for="group in skillGroups" :key="group.title" class="skill-card">
          <h3>{{ group.title }}</h3>
          <div>
            <span v-for="skill in group.skills" :key="skill">{{ skill }}</span>
          </div>
        </article>

        <article class="language-card">
          <h3>Language</h3>
          <div v-for="language in languages" :key="language.name" class="language-row">
            <div>
              <strong>{{ language.name }}</strong>
              <span>{{ language.value }}</span>
            </div>
            <div class="progress" :aria-label="`${language.name} ${language.level}%`">
              <span :style="{ width: `${language.level}%` }"></span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section id="contact" class="section contact-section">
      <div class="contact-panel">
        <div class="contact-left">
          <div class="section-label compact">
            <span>07</span>
            <p>Contact</p>
          </div>
          <address class="contact-address">
            <span v-for="line in address" :key="line">{{ line }}</span>
          </address>
        </div>

        <div class="contact-right">
          <div v-for="contact in contacts" :key="contact.label" class="contact-item">
            <span>{{ contact.label }}</span>
            <a :href="contact.href">
              <strong>{{ contact.value }}</strong>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
