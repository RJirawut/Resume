const { createApp } = Vue

createApp({
  data() {
    return {
      person: {
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
        profileImage: './src/assets/profile.png',
        intro:
          'I design and build clean, responsive web interfaces with Vue, JavaScript, and modern frontend workflows.',
        profile:
          'ผมเป็นคนมุ่งมั่น ตั้งใจทำงานทุกอย่างให้ประสบความสำเร็จ ไม่ย่อท้อต่ออุปสรรคถึงแม้ว่าอุปสรรคนั้นจะยากเพียงใดก็ต้องอดทนและเอาชนะมันให้ได้ สามารถทำงานภายใต้แรงกดดันและรับฟังความคิดเห็นจากผู้อื่นได้ มีความตั้งใจเรียนรู้สิ่งใหม่ๆได้เสมอ นอกจากนี้ผมยังมีทักษะในการใช้ AI เข้ามาผสมผสานเพื่อให้งานออกมามีประสิทธิภาพมากที่สุด',
      },
      navItems: [
        { label: 'Home', href: '#top' },
        { label: 'About', href: '#profile' },
        { label: 'Education', href: '#education' },
        { label: 'Experience', href: '#experience' },
        { label: 'Training', href: '#training' },
        { label: 'Works', href: '#work' },
        { label: 'Contact', href: '#contact' },
      ],
      trainings: [
        {
          title: 'Mobile App Development With Flutter & Dart',
          issuer: 'โครงการ SCIENCE IT คณะวิทยาศาสตร์ มหาวิทยาลัยสงขลานครินทร์',
          date: '31 ตุลาคม - 2 พฤศจิกายน 2022',
          image: './src/assets/cert-flutter.jpg',
        },
        {
          title: 'Critical Thinking (กระบวนการคิดวิเคราะห์)',
          issuer: 'Prince of Songkla University (PSU MOOC)',
          date: '11 ตุลาคม 2022',
          image: './src/assets/cert-critical-thinking.png',
        },
        {
          title: 'เกียรติบัตรเชิดชูเกียรติ ฝ่ายเทคโนโลยีสารสนเทศ สโมสรนักศึกษา ปีการศึกษา 2564',
          issuer: 'คณะวิทยาศาสตร์ มหาวิทยาลัยสงขลานครินทร์',
          date: '7 กรกฎาคม 2022',
          image: './src/assets/cert-smo.jpg',
        },
        {
          title: 'นักศึกษาทุนนักกิจกรรมดีเด่น ระดับคณะ ปีการศึกษา 2563',
          issuer: 'คณะวิทยาศาสตร์ มหาวิทยาลัยสงขลานครินทร์',
          date: '23 มิถุนายน 2022',
          image: './src/assets/cert-scholarship.jpg',
        },
        {
          title: 'เกียรติบัตรเชิดชูเกียรติ ร่วมสร้างชื่อเสียงในงานวิทย์ภาคภูมิ ประจำปี 2565',
          issuer: 'คณะวิทยาศาสตร์ มหาวิทยาลัยสงขลานครินทร์',
          date: '1 มิถุนายน 2022',
          image: './src/assets/cert-pride.jpg',
        },
        {
          title: 'เกียรติบัตรเชิดชูเกียรติ ฝ่ายกีฬา สโมสรนักศึกษา ปีการศึกษา 2563',
          issuer: 'คณะวิทยาศาสตร์ มหาวิทยาลัยสงขลานครินทร์',
          date: '1 มิถุนายน 2022',
          image: './src/assets/cert-sports.jpg',
        },
        {
          title: 'เกียรติบัตรเชิดชูเกียรติ คณะกรรมการ ชุมนุมเทคโนโลยีสารสนเทศและการสื่อสาร สโมสรนักศึกษา ปีการศึกษา 2563',
          issuer: 'คณะวิทยาศาสตร์ มหาวิทยาลัยสงขลานครินทร์',
          date: '1 มิถุนายน 2022',
          image: './src/assets/cert-ict-club.jpg',
        },
        {
          title: 'การสร้างงาน Graphic ด้วยโปรแกรม Adobe Illustrator',
          issuer: 'สำนักงานดิจิทัลนวัตกรรมและระบบอัจฉริยะ (DIIS-PSU)',
          date: 'พฤษภาคม 2022',
          image: './src/assets/cert-ai-illustrator.jpg',
        },
        {
          title: 'Building Progressive Web Application with Vue.js and Firebase',
          issuer: 'โครงการ Science IT คณะวิทยาศาสตร์ มหาวิทยาลัยสงขลานครินทร์',
          date: '11 เมษายน 2022',
          image: './src/assets/cert-pwa-vue.jpg',
        },
        {
          title: 'Science smart skills หลักสูตร ระบบมาตรฐานคุณภาพสิ่งแวดล้อม',
          issuer: 'คณะวิทยาศาสตร์ ม.สงขลานครินทร์ (ร่วมกับ บริษัท เบทาโกร จำกัด (มหาชน))',
          date: '25 ธันวาคม 2021',
          image: './src/assets/cert-env-quality.jpg',
        },
        {
          title: 'Science smart skills หลักสูตร ระบบมาตรฐานคุณภาพในโรงงาน',
          issuer: 'คณะวิทยาศาสตร์ ม.สงขลานครินทร์ (ร่วมกับ บมจ.เจริญโภคภัณฑ์อาหาร)',
          date: '11 ธันวาคม 2021',
          image: './src/assets/cert-factory-quality.jpg',
        },
        {
          title: 'Machine Learning for Data Science and Analytics',
          issuer: 'คณะวิทยาศาสตร์ มหาวิทยาลัยสงขลานครินทร์ (Virtual Workshop)',
          date: '25 ธันวาคม 2020',
          image: './src/assets/cert-ml.jpg',
        },
        {
          title: 'Healthy Body And Mind',
          issuer: 'Prince of Songkla University (PSU MOOC)',
          date: '2 กันยายน 2020',
          image: './src/assets/cert-healthy-body-mind.jpg',
        },
        {
          title: 'Evolution of Computer',
          issuer: 'Prince of Songkla University (PSU MOOC)',
          date: '25 ธันวาคม 2019',
          image: './src/assets/cert-evolution-computer.jpg',
        },
        {
          title: 'Computer Hardware',
          issuer: 'Prince of Songkla University (PSU MOOC)',
          date: '25 ธันวาคม 2019',
          image: './src/assets/cert-computer-hardware.png',
        },
        {
          title: 'ENGLISH CAMP 2018',
          issuer: 'Khonhadprachason School',
          date: '21 - 22 กรกฎาคม & 4 - 5 สิงหาคม 2018',
          image: './src/assets/cert-english-camp.jpg',
        },
        {
          title: 'โครงการขอนหาดปลอดภัยด้วยค่ายเยาวชนอาสาพลังแผ่นดิน "ลูกขอนหาดวัยใส ห่างไกลสารเสพติด"',
          issuer: 'อบต.ขอนหาด ร่วมกับ โรงเรียนขอนหาดประชาสรรค์',
          date: '24 - 27 กันยายน 2017',
          image: './src/assets/cert-anti-drug-camp.jpg',
        },
        {
          title: 'อบรมอาสาสมัครจราจร หลักสูตรการฝึกอบรมเยาวชนต้านยาเสพติด',
          issuer: 'อบต.ขอนหาด ร่วมกับ สถานีตำรวจภูธรขอนหาด',
          date: '12 - 13 กันยายน 2017',
          image: './src/assets/cert-traffic-volunteer.jpg',
        },
      ],
      facts: [
        { label: 'ชื่อ', value: 'จิรวุฒิ เรืองพรหม' },
        { label: 'ชื่อเล่น', value: 'จอม' },
        { label: 'วันเกิด', value: '12 มีนาคม 2543' },
        { label: 'อายุ', value: '26 ปี' },
        { label: 'ที่อยู่', value: 'บ้านเลขที่ 102 ม.8 ต.ขอนหาด อ.ชะอวด จ.นครศรีธรรมราช 80180' },
      ],
      experiences: [
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
      ],
      workSamples: [
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
      ],
      skillGroups: [
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
      ],
      languages: [
        { name: 'ไทย', value: 'ใช้งานได้ดี', level: 100 },
        { name: 'อังกฤษ', value: 'พื้นฐาน', level: 40 },
      ],
      educations: [
        {
          degree: 'วิทยาศาสตรบัณฑิต',
          major: 'เทคโนโลยีสารสนเทศและการสื่อสาร',
          university: 'มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตหาดใหญ่',
          logo: './src/assets/psu-emblem.png',
        },
        {
          degree: 'มัธยมศึกษาตอนปลาย',
          major: 'แผนการเรียน วิทย์ - คณิต',
          university: 'โรงเรียนขอนหาดประชาสรรค์',
          logo: './src/assets/khonhad-emblem.png',
        },
        {
          degree: 'มัธยมศึกษาตอนต้น',
          major: '',
          university: 'โรงเรียนขอนหาดประชาสรรค์',
          logo: './src/assets/khonhad-emblem.png',
        },
      ],
      address: [
        'บ้านเลขที่ 102 ม.8',
        'ต.ขอนหาด อ.ชะอวด',
        'จ.นครศรีธรรมราช 80180',
      ],
      contacts: [
        { label: 'Email', value: 'Jirawut.ru@gmail.com', href: 'mailto:Jirawut.ru@gmail.com' },
        { label: 'Phone', value: '093-024-7378', href: 'tel:0930247378' },
        { label: 'Line', value: 'jirawut1203', href: 'https://line.me/ti/p/~jirawut1203' },
        {
          label: 'Facebook',
          value: 'Jirawut Rueangprom',
          href: 'https://www.facebook.com/search/top?q=Jirawut%20Rueangprom',
        },
      ],
    }
  },
}).mount('#app')
