'use client';
import Link from 'next/link';
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useRef, useState } from 'react'
import { OrbitLoader } from '@/components/loader/loader'
import { Josefin_Sans, Lexend, Righteous, Outfit } from 'next/font/google'
import { BiLink } from 'react-icons/bi'
import { TbBrandCashapp } from "react-icons/tb";
import { MdMail } from 'react-icons/md'
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaPaypal, FaDiscord, FaInstagram } from 'react-icons/fa'

const lexend = Lexend({ weight: ['300', '400', '500', '600'], subsets: ['latin'] });
const josefin_sans = Josefin_Sans({ weight: ['700'], subsets: ['latin'] });
const righteous = Righteous({ weight: ['400'], subsets: ['latin'] });
const outfit = Outfit({ weight: ['500', '600', '700'], subsets: ['latin'] });

export default function Home() {
  const button_links = [
    {name: 'Github', icon: <FaGithub />, link: "https://github.com/yuvaraja28", nav: true},
    {name: 'Linkedin', icon: <FaLinkedin />, link: "https://www.linkedin.com/in/yuvaraja-murali-4814bb242/", nav: true},
    {name: 'Discord', icon: <FaDiscord />, link: "https://discord.com/users/759050921413312532", nav: true},
    {name: 'Paypal', icon: <FaPaypal />, link: "https://www.paypal.com/paypalme/YuvarajaMurali", nav: false},
    {name: 'Instagram', icon: <FaInstagram />, link: "https://www.instagram.com/yuvaraja_28/", nav: false},
    {name: 'Twitter', icon: <FaXTwitter />, link: "https://twitter.com/yuvaraja_28", nav: false},
    {name: 'Email', icon: <MdMail />, link: "mailto:yuv.the.dev@gmail.com", nav: false}
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
  const event_images = [
    {
      name: 'SCIMIT`23',
      place: 'MVIT Pondicherry',
      date: 'February 2023',
      image: 'events/certificate_1.png',
      description: 'Participated in National Science Project EXPO held in Manakula Vinayagar Institute of Technology College'
    },
    {
      name: 'Réjour`23',
      place: 'Puducherry Technological University',
      date: 'March 2023',
      image: 'events/certificate_2.png',
      description: 'Participated and won 🥈 II Place in Clash of Code'
    },
    {
      name: 'MITILENCE',
      place: 'MVIT Pondicherry',
      date: 'March 2023',
      image: 'events/certificate_4.png',
      description: 'Participated and won 🥈 II Place in Website Hacking'
    },
    {
      name: 'MITILENCE',
      place: 'MVIT Pondicherry',
      date: 'March 2023',
      image: 'events/certificate_5.png',
      description: 'Participated and won 🥉 III Place in AI CHAT BOT'
    },
    {
      name: 'App Development',
      place: 'MVIT Pondicherry',
      date: 'April 2023',
      image: 'events/certificate_6.png',
      description: 'Participated in Design and Innovation Competition held in Manakula Vinayagar Institute of Technology College'
    },
    {
      name: 'TEXUS',
      place: 'SRM Ramapuram',
      date: 'April 2023',
      image: 'events/certificate_7.png',
      description: 'Participated in Coder\'s Call Technical Event'
    },
    {
      name: 'TEXUS',
      place: 'SRM Ramapuram',
      date: 'April 2023',
      image: 'events/certificate_8.png',
      description: 'Participated in Tech-It-Out Challenge'
    },
    {
      name: 'TECHNOVISTA',
      place: 'Sri Eshwar College of Engineering Coimbatore',
      date: 'September 2023',
      image: 'events/certificate_9.png',
      description: 'Participated and won 🥉 III Place in Code Clash Technical Event'
    },
    {
      name: 'GENESIS`23',
      place: 'Puducherry Technological University',
      date: 'October 2023',
      image: 'events/certificate_10.png',
      description: 'Participated and won 🥇 I Place in Programming Dating Technical Event'
    },
    {
      name: 'ICON 2K23',
      place: 'Puducherry Technological University',
      date: 'October 2023',
      image: 'events/certificate_12.png',
      description: 'Participated and won 🥈 II Place in Debugging Technical Event'
    },
    {
      name: 'TECHNOVATION 2K23',
      place: 'MEC Mailam',
      date: 'October 2023',
      image: 'events/certificate_14.png',
      description: 'Participated and won 🥉 III Place in CODEATHON Technical Event'
    },
    {
      name: 'TECHNOVATION 2K23',
      place: 'MEC Mailam',
      date: 'October 2023',
      image: 'events/certificate_15.png',
      description: 'Participated and won 🥇 First Place in National Level Innovative Technical Fest (Project Competition) held in Mailam Engineering College'
    },
    {
      name: 'AATRAL 2K24',
      place: 'Vellore',
      date: 'February 2024',
      image: 'events/certificate_16.png',
      description: 'Participated and won 🥇 First Place in National Level Technical Symposium (Project Expo) held in Thanthai Periyar Government Institute of Technology'
    },
    {
      name: 'SCIMIT`24',
      place: 'MVIT Pondicherry',
      date: 'February 2024',
      image: 'events/certificate_17.png',
      description: 'Participated and won 🏆 Consolation Prize in National Science Project EXPO held in Manakula Vinayagar Institute of Technology College'
    },
    {
      name: 'Réjour`24',
      place: 'Puducherry Technological University',
      date: 'March 2024',
      image: 'events/certificate_18.png',
      description: 'Participated and won 🥇 I Place in Clash of Codes Technical Event'
    },
  ]

  const divRef = useRef(null)
  const audioRef = useRef(null)
  const [foreLoading, setForeLoading] = useState(true);
  const [backLoading, setBackLoading] = useState(true);

  useEffect(() => {
    if (foreLoading && backLoading) {
      divRef.current.style.display = 'flex'
    }
  }, [foreLoading, backLoading])

  return (
    <main onScrollCapture={() => {if (audioRef.current != null) audioRef.current.play().catch(() => {})}}>
      <div style={{ display: (foreLoading || backLoading) ? 'flex' : 'none' }} className={styles.centre_div}>
        <OrbitLoader />
      </div>
      <div ref={divRef} className={styles.profile_div}>
        <div className={styles.articles_div}>
          <article style={{ overflowY: (foreLoading || backLoading) ? 'hidden' : 'scroll' }} className={styles.profile_bg}>
            <nav className={styles.navbar}>
              <div className={styles.navbar_text_div}>
                <Image alt='Yuvaraja' className={styles.navbar_icon} src={'/images/yuvaraja.png'} width={40} height={40} />
                <div className={styles.navbar_text}>
                  <span className={[styles.navbar_text_name, righteous.className].join(' ')}>
                    Yuvaraja
                  </span>
                  <span className={[styles.navbar_text_role, lexend.className].join(' ')}>
                    FullStack Developer
                  </span>
                </div>
              </div>
              <div className={styles.profile_social_div}>
                {button_links.map(button => button.nav ? <Link key={button.name} className={styles.profile_social_button} target='_blank' href={button.link}>{button.icon}</Link> : null)}
              </div>
            </nav>
            <div className={styles.profile_paralax}>
              <Image alt='Background Image' onLoad={() => setForeLoading(false)} className={styles.paralax_img_fore} src={`/images/par-fg.png`} width={1920} height={1080} />
              <Image alt='Background Image' onLoad={() => setBackLoading(false)} className={styles.paralax_img_back} src={`/images/par-bg.png`} width={1920} height={1080} />
              <div className={styles.profile_container}>
                <span className={[styles.profile_name, styles.green_glow, josefin_sans.className].join(' ')}>
                  Yuvaraja
                </span>
                <span className={[styles.profile_bottom_details, styles.green_glow, lexend.className].join(' ')}>
                  FullStack Developer • Cloud Computing Specialist • Open-Source Enthusiast • Security analyst 
                </span>
              </div>
            </div>
            <div className={styles.parallax_contents}>
              <article className={styles.aboutme_container}>
                <div className={styles.aboutme_inner}>
                  <Image className={styles.aboutme_banner} width={400} height={285} src={"/images/banner.gif"} alt='About Me' style={{ height: 'inherit' }} />
                  <div className={styles.aboutme_inner_column}>
                    <span className={[styles.aboutme_heading, styles.green_glow, righteous.className].join(' ')}>
                      About me
                    </span>
                    <div className={styles.aboutme_text_div}>
                      <span className={[styles.aboutme_text, lexend.className].join(' ')}>
                        Hey there! I'm <b>Yuvaraja</b>, a developer who enjoys coding in Python, Node.js, and C/C++. I also work in web development with HTML, CSS, and Next.js. When it comes to databases, I'm familiar with MongoDB, Redis, and MySQL.
                      </span>
                      <span className={[styles.aboutme_text, lexend.className].join(' ')}>
                        Aside from coding, I have a keen interest in computer networks and Linux. I like to make systems secure and efficient, and I'm always up for a good problem-solving challenge. Additionally, I have experience in cloud computing, which adds flexibility and scalability to my projects.
                      </span>
                      <span className={[styles.aboutme_text, lexend.className].join(' ')}>
                        In my free time, I'm learning about machine learning to broaden my skill set and keep up with the latest tech trends. Looking forward to connecting and sharing knowledge with fellow enthusiasts!
                      </span>
                    </div>
                    <div className={[styles.aboutme_social_div].join(' ')}>
                      {button_links.map(button => 
                        <Link key={button.name} className={[styles.aboutme_social_button, lexend.className].join(' ')} target='_blank' href={button.link}>
                          <span className={[styles.button, styles.button_icon].join(' ')}>{button.icon}</span>
                          <span className={styles.button}>{button.name}</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </article>
              <article className={styles.achivementsDiv}>
                <div className={[styles.education_container].join(' ')}>
                  <span className={[styles.divider_heading, styles.green_glow, righteous.className].join(' ')}>
                    Education
                  </span>
                  <div className={styles.education_list_div_timeline}>
                    <div className={styles.education_list_div}>
                      {education.map(innerEducation =>
                        <div key={innerEducation.duration} className={[styles.education_div_main, outfit.className].join(' ')}>
                          <span className={styles.education_timeline}>
                            {innerEducation.duration}
                          </span>
                          <div key={innerEducation.name} className={[styles.education_div].join(' ')}>
                            <span className={[styles.education_name, outfit.className].join(' ')}>
                              {innerEducation.course} 
                            </span>
                            <div className={styles.education_description_div}>
                              <span style={{ opacity: 0.8 }} className={[styles.education_description, lexend.className].join(' ')}>
                                {innerEducation.name} - {innerEducation.location}
                              </span>
                              <span className={[styles.education_description, lexend.className].join(' ')}>
                                {innerEducation.mark}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className={styles.projects_container}>
                  <span className={[styles.divider_heading, styles.green_glow, righteous.className].join(' ')}>
                    Competitons & Events
                  </span>
                  <div className={[styles.events_gallery, styles.events_inner].join(' ')}>
                    <div className={styles.events_gallery} style={{ transform: 'translateX(15px)', gap: '10px' }}>
                      {event_images.map(events =>
                        <div className={styles.events_image_box} key={events.image}>
                          <img src={`/${events.image}`} loading='lazy' className={styles.events_image} />
                          <div class={[styles.events_transparent_box, outfit.className].join(' ')}>
                            <div class={styles.events_caption}>
                              <span style={{ fontSize: 17, fontWeight: 600 }}>{events.name}</span>
                              <span style={{ fontSize: 14 }}>{events.place}, {events.date}</span>
                              <span class={styles.events_opacity_low} style={{ fontSize: 15, fontWeight: 500 }}>
                                {events.description}
                              </span>
                            </div>
                          </div>
                        </div>                      
                      )}
                    </div>
                  </div>
                </div>
              </article>
              <article className={styles.aboutme_container}>
                <div className={styles.projects_container}>
                  <span className={[styles.divider_heading, styles.green_glow, righteous.className].join(' ')}>
                    Projects
                  </span>
                  <div className={styles.projects_list_div}>
                    {projects.map((innerProject, projectIndex) =>
                      <div key={projectIndex} className={styles.project_div}>
                        {(innerProject?.banner == undefined) ? "" :
                          <Image className={styles.project_image} alt='project' src={innerProject.banner[0]} width={512} height={198} />
                        }
                        <div className={styles.project_details_div}>
                          <div className={styles.project_name_icon_div}>
                            {innerProject.icon == null ? "" : <Image className={styles.project_icon} alt='project' src={innerProject.icon} width={38} height={38} />}
                            <span className={[styles.project_name, outfit.className].join(' ')}>{innerProject.name}</span>
                          </div>
                          <span className={[styles.project_description, lexend.className].join(' ')}>
                            {innerProject.description}
                          </span>
                          <span className={[styles.project_technologies, outfit.className].join(' ')}>
                            {innerProject.technologies.join(', ')}
                          </span>
                          <div className={styles.project_link_div}>
                            {innerProject.links.map(link =>
                              <Link key={link.url} className={styles.project_link_icon} target='_blank' href={link.url}>
                                {link.url.startsWith("https://github.com") ? <FaGithub /> : (link.url.includes("sourcexchange") || link.url.includes("pterodactylmarket") || link.url.includes("builtbybit")) ? <TbBrandCashapp />  : <BiLink />}
                                <span className={['project_link_name', outfit.className].join(' ')}>
                                  {link.name}
                                </span>
                              </Link>
                            )}
                          </div>
                        </div>                      
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </div>
            <audio style={{ display: 'none' }} autoPlay loop ref={audioRef} src="/sounds/backsound.mp3" />
            <footer className={outfit.className}>
              © {new Date().getFullYear()} • Made with 💗 by Yuvaraja
            </footer>
          </article>
        </div>
      </div>
    </main>
  )
}
