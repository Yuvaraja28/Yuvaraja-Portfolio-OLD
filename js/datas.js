const button_links = [
  {name: 'Github', icon: 'fa-github', link: "https://github.com/yuvaraja28"},
  {name: 'Linkedin', icon: 'fa-linkedin', link: "https://www.linkedin.com/in/yuvaraja-murali-4814bb242/"},
  {name: 'Discord', icon: 'fa-discord', link: "https://discord.com/users/759050921413312532"},
  {name: 'Paypal', icon: 'fa-paypal', link: "https://www.paypal.com/paypalme/YuvarajaMurali"},
  {name: 'Instagram', icon: 'fa-instagram', link: "https://www.instagram.com/yuvaraja_28/"},
  {name: 'Twitter', icon: 'fa-x-twitter', link: "https://twitter.com/yuvaraja_28"},
  {name: 'Email', icon: 'fa-google', link: "mailto:yuv.the.dev@gmail.com"}
]
const projects = [
  { 
    name: 'Devactyl Bot', icon: '/projects/devactyl.png',
    links: [{name: 'BuiltbyBit', url: 'https://builtbybit.com/resources/devactyl-bot.29488/'}, {name: 'SourceXchange', url: 'https://www.sourcexchange.net/products/devactyl-bot'}],
    description: "This is my commercial Project, Devactyl Bot lets you control all your Pterodactyl Panel Servers right from Discord in a Beautiful UI, Pterodactyl is a Cloud Server Management Software",
    technologies: ['Python', 'Cryptography', 'HTTP API\'s', 'Websockets', 'Discord'],
    banner: ['main.png', 'main2.png'].map(str => `/project_banner/devactyl/${str}`)
  },
  {
    name: 'MineCore Bot', icon: '/projects/minecore.png',
    links: [{name: 'BuiltbyBit', 'url': 'https://builtbybit.com/resources/minecore-bot.29877'}],
    description: "This is my commercial Project, MineCore Bot lets users to setup Minecraft Servers and ping it and get server and player details to Discord.",
    technologies: ['Python', 'Cryptography', 'HTTP API\'s', 'Image Processing', 'Discord'],
    banner: ['main.png', 'main2.png', 'main3.png', 'main4.png'].map(str => `/project_banner/minecore/${str}`)
  },
  { 
    name: 'Frix Cloud', icon: '/projects/frix_cloud.png',
    links: [{name: 'Github', url: 'https://github.com/Yuvaraja28/FrixCloud_Hack-SRM-4.0'}],
    description: "This Project is Based on Cloud Computing which enables users to control their Local PC or server from Mobiles or other PC through a clean Dashboard",
    technologies: ['Python', 'Node JS', 'Next JS', 'HTML & CSS', 'Cryptography', 'HTTP API\'s', 'Websockets', 'Cloud Computing', 'Networking'],
    banner: ['main.png', 'main2.png'].map(str => `/project_banner/frix_cloud/${str}`)
  },
  { 
    name: 'Block Chat', icon: '/projects/block_chat.png',
    links: [{name: 'Github', url: 'https://github.com/Yuvaraja28/BlockChat_Tech_Triumph_1.0'}],
    description: "This is Chat WebApp Project based on blockchain Technology which creates Hash value and validates it with each and every block of message before sending it to other clients",
    technologies: ['Python', 'Node JS', 'Next JS', 'HTML & CSS', 'Cryptography', 'HTTP API\'s', 'Websockets'],
    banner: ['main.png'].map(str => `/project_banner/block_chat/${str}`)
  },
  { 
    name: 'TD Problem Solver', icon: '/projects/td.png',
    links: [{name: 'Website', url: 'https://td.yuvaraja.tech'}],
    description: "This Project is based on Thermodynamics. So in this Project you can calculate all kinds of Problem related to Otto, Diesel, Brayton, Dual Cycles by inputing valid datas",
    technologies: ['Node JS', 'Next JS', 'HTML & CSS', 'Thermodynamics Formulae'],
    banner: ['main.png', 'main2.png'].map(str => `/project_banner/td_problem_solver/${str}`)
  },
  {
    name: 'Private Chat Server',
    icon: null,
    links: [{name: 'Github', url: 'https://github.com/Yuvaraja28/Private-Chat-Server'}],
    description: "This is a Group Web-Chat Application Project based on Python Websockets for seamless Message Transfer and Flask to serve as Web Server",
    technologies: ['Python', 'HTML & CSS', 'Websockets'],
    banner: ['main.png'].map(str => `/project_banner/private_chat_server/${str}`)
  },
  {
    name: 'Diso Player Website',
    icon: null,
    links: [{name: 'Github', url: 'https://github.com/Yuvaraja28/Disco_Player_Website'}],
    description: "A Spotify Inspired Project to Listen to local Songs from web dashboard in which we can play and control songs in the browser",
    technologies: ['Javascript', 'HTML & CSS'],
    banner: ['main.png'].map(str => `/project_banner/disco_player/${str}`)
  },
  {
    name: 'Student Connect',
    icon: null,
    links: [{name: 'Github', url: 'https://github.com/Yuvaraja28/MVIT_Student_Connect_NextJS'}],
    description: "This Project is aimed to connect College Management and Students, Where students can login and get their College related tasks that has been assigned to them from each staffs.",
    technologies: ['Python', 'Node JS', 'Next JS', 'HTML & CSS'],
    banner: ['main.png', 'main2.png', 'main3.png', 'main4.png'].map(str => `/project_banner/students_connect/${str}`)
  },
  {
    name: 'AI ChatBot GPT3',
    icon: null,
    links: [{name: 'Github', url: 'https://github.com/Yuvaraja28/AI_Chat_Bot_GPT3'}],
    description: "This Project is based on OpenAI's API and Python Flask, Get ChatGPT prompts in Colorful Website via their API",
    technologies: ['Python', 'Javascript', 'HTTP API\'s', 'HTML & CSS'],
    banner: ['main.png'].map(str => `/project_banner/ai_gpt_chat_web/${str}`)
  },
]
const education = [
  {
    name: 'Manakula Vinayagar Institute of Technology',
    duration: '2022 - Present',
    course: 'Undergraduate (B.Tech in CSE)',
    mark: 'CGPA - 7.71',
    location: 'Pondicherry',
  },
  {
    name: 'Petit Seminair Higher Seconday School',
    duration: '2020 - 2022',
    course: 'Higher Secondary School (TN State Board)',
    mark: 'Percentage - 84%',
    location: 'Pondicherry',
  },
  {
    name: 'Petit Seminair Higher Seconday School',
    duration: '2008 - 2020',
    course: 'Secondary School (TN State Board)',
    mark: 'Percentage - 74.4%',
    location: 'Pondicherry',
  },
]
const all_events = [
  {
    name: 'SCIMIT`23',
    place: 'MVIT Pondicherry',
    date: 'February 2023',
    image: 'events/certificate_1',
    description: 'Participated in National Science Project EXPO held in Manakula Vinayagar Institute of Technology College'
  },
  {
    name: 'Réjour`23',
    place: 'Puducherry Technological University',
    date: 'March 2023',
    image: 'events/certificate_2',
    description: 'Participated and won 🥈 II Place in Clash of Code'
  },
  {
    name: 'MITILENCE',
    place: 'MVIT Pondicherry',
    date: 'March 2023',
    image: 'events/certificate_4',
    description: 'Participated and won 🥈 II Place in Website Hacking'
  },
  {
    name: 'MITILENCE',
    place: 'MVIT Pondicherry',
    date: 'March 2023',
    image: 'events/certificate_5',
    description: 'Participated and won 🥉 III Place in AI CHAT BOT'
  },
  {
    name: 'App Development',
    place: 'MVIT Pondicherry',
    date: 'April 2023',
    image: 'events/certificate_6',
    description: 'Participated in Design and Innovation Competition held in Manakula Vinayagar Institute of Technology College'
  },
  {
    name: 'TEXUS',
    place: 'SRM Ramapuram',
    date: 'April 2023',
    image: 'events/certificate_7',
    description: 'Participated in Coder\'s Call Technical Event'
  },
  {
    name: 'TEXUS',
    place: 'SRM Ramapuram',
    date: 'April 2023',
    image: 'events/certificate_8',
    description: 'Participated in Tech-It-Out Challenge'
  },
  {
    name: 'TECHNOVISTA',
    place: 'Sri Eshwar College of Engineering Coimbatore',
    date: 'September 2023',
    image: 'events/certificate_9',
    description: 'Participated and won 🥉 III Place in Code Clash Technical Event'
  },
  {
    name: 'GENESIS`23',
    place: 'Puducherry Technological University',
    date: 'October 2023',
    image: 'events/certificate_10',
    description: 'Participated and won 🥇 I Place in Programming Dating Technical Event'
  },
  {
    name: 'ICON 2K23',
    place: 'Puducherry Technological University',
    date: 'October 2023',
    image: 'events/certificate_12',
    description: 'Participated and won 🥈 II Place in Debugging Technical Event'
  },
  {
    name: 'TECHNOVATION 2K23',
    place: 'MEC Mailam',
    date: 'October 2023',
    image: 'events/certificate_14',
    description: 'Participated and won 🥉 III Place in CODEATHON Technical Event'
  },
  {
    name: 'TECHNOVATION 2K23',
    place: 'MEC Mailam',
    date: 'October 2023',
    image: 'events/certificate_15',
    description: 'Participated and won 🥇 First Place in National Level Innovative Technical Fest (Project Competition) held in Mailam Engineering College'
  },
  {
    name: 'AATRAL 2K24',
    place: 'Vellore',
    date: 'February 2024',
    image: 'events/certificate_16',
    description: 'Participated and won 🥇 First Place in National Level Technical Symposium (Project Expo) held in Thanthai Periyar Government Institute of Technology'
  },
  {
    name: 'SCIMIT`24',
    place: 'MVIT Pondicherry',
    date: 'February 2024',
    image: 'events/certificate_17',
    description: 'Participated and won 🏆 Consolation Prize in National Science Project EXPO held in Manakula Vinayagar Institute of Technology College'
  },
  {
    name: 'Réjour`24',
    place: 'Puducherry Technological University',
    date: 'March 2024',
    image: 'events/certificate_18',
    description: 'Participated and won 🥇 I Place in Clash of Codes Technical Event'
  },
]
const tech_stack = [
  {
    title: 'React',
    src: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png"
  },
  {
    title: 'Next.js',
    src: "https://github.com/marwin1991/profile-technology-icons/assets/136815194/5f8c622c-c217-4649-b0a9-7e0ee24bd704"
  },
  {
    title: 'Django',
    src: "https://github.com/marwin1991/profile-technology-icons/assets/62091613/9bf5650b-e534-4eae-8a26-8379d076f3b4"
  },
  {
    title: 'Flask',
    src: "https://user-images.githubusercontent.com/25181517/183423775-2276e25d-d43d-4e58-890b-edbc88e915f7.png"
  },
  {
    title: 'Websocket',
    src: "https://user-images.githubusercontent.com/25181517/187070862-03888f18-2e63-4332-95fb-3ba4f2708e59.png"
  },
  {
    title: 'MongoDB',
    src: "https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png"
  },
  {
    title: 'Redis',
    src: "https://user-images.githubusercontent.com/25181517/182884894-d3fa6ee0-f2b4-4960-9961-64740f533f2a.png"
  },
  {
    title: 'MySQL',
    src: "https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png"
  },
  {
    title: 'Python',
    src: "https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png"
  },
  {
    title: 'Node.js',
    src: "https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png"
  },
  {
    title: 'HTML',
    src: "https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"
  },
  {
    title: 'CSS',
    src: "https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"
  },
  {
    title: 'C',
    src: "https://user-images.githubusercontent.com/25181517/192106070-46255bcf-65e6-4c6b-a296-bf8d0d8fb2a7.png"
  },
  {
    title: 'Dart',
    src: "https://user-images.githubusercontent.com/25181517/186150304-1568ffdf-4c62-4bdc-9cf1-8d8efcea7c5b.png"
  },
  {
    title: 'Selenium',
    src: "https://user-images.githubusercontent.com/25181517/184103699-d1b83c07-2d83-4d99-9a1e-83bd89e08117.png"
  },
  {
    title: 'Go',
    src: "https://user-images.githubusercontent.com/25181517/192149581-88194d20-1a37-4be8-8801-5dc0017ffbbe.png"
  },
  {
    title: 'Git',
    src: "https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png"
  },
  {
    title: 'Postman',
    src: "https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png"
  },
  {
    title: 'Visual Studio Code',
    src: "https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png"
  },
  {
    title: 'Figma',
    src: "https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png"
  },
]