'use client';
import './styles.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { OrbitLoader } from '@/components/loader/loader'
import { Josefin_Sans, Lexend, Righteous, Outfit } from 'next/font/google'
import { BiLink } from 'react-icons/bi'
import { TbBrandCashapp } from "react-icons/tb";
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
    {name: 'Instagram', icon: <FaInstagram />, link: "https://www.instagram.com/yuvaraja_28/", nav: false}
  ]
  const projects = [
    { 
      name: 'Devactyl Bot', icon: '/projects/devactyl.png', links: [{name: 'Ptero Market', url: 'https://pterodactylmarket.com/resource/619'}, {name: 'BuiltbyBit', url: 'https://builtbybit.com/resources/devactyl-bot.29488/'}],
      description: "This is my commercial Project, Devactyl Bot lets you control all your Pterodactyl Panel Servers right from Discord in a Beautiful UI, Pterodactyl is a Cloud Server Management Software",
      technologies: ['Python', 'Cryptography', 'HTTP API\'s', 'Websockets', 'Discord']
    },
    {
      name: 'MineCore Bot', icon: '/projects/minecore.png', links: [{name: 'BuiltbyBit', 'url': 'https://builtbybit.com/resources/minecore-bot.29877'}],
      description: "This is my commercial Project, MineCore Bot lets users to setup Minecraft Servers and ping it and get server and player details to Discord.",
      technologies: ['Python', 'Cryptography', 'HTTP API\'s', 'Image Processing', 'Discord']
    },
    { 
      name: 'Frix Cloud', icon: '/projects/frix_cloud.png', links: [{name: 'Github', url: 'https://github.com/Yuvaraja28/FrixCloud_Hack-SRM-4.0'}],
      description: "This Project is Based on Cloud Computing which enables users to control their Local PC or server from Mobiles or other PC through a clean Dashboard",
      technologies: ['Python', 'Node JS', 'Next JS', 'HTML & CSS', 'Cryptography', 'HTTP API\'s', 'Websockets', 'Cloud Computing', 'Networking']
    },
    { 
      name: 'Block Chat', icon: '/projects/block_chat.png', links: [{name: 'Github', url: 'https://github.com/Yuvaraja28/BlockChat_Tech_Triumph_1.0'}],
      description: "This is Chat WebApp Project based on blockchain Technology which creates Hash value and validates it with each and every block of message before sending it to other clients",
      technologies: ['Python', 'Node JS', 'Next JS', 'HTML & CSS', 'Cryptography', 'HTTP API\'s', 'Websockets']
    },
    { 
      name: 'TD Problem Solver', icon: '/projects/td.png', links: [{name: 'Website', url: 'https://td.yuvaraja28.me'}],
      description: "This Project is based on Thermodynamics. So in this Project you can calculate all kinds of Problem related to Otto, Diesel, Brayton, Dual Cycles by inputing valid datas",
      technologies: ['Node JS', 'Next JS', 'HTML & CSS', 'Thermodynamics Formulas']
    },
    {
      name: 'Private Chat Server', icon: null, links: [{name: 'Github', url: 'https://github.com/Yuvaraja28/Private-Chat-Server'}],
      description: "This is a Group Web-Chat Application Project based on Python Websockets for seamless Message Transfer and Flask to serve as Web Server",
      technologies: ['Python', 'HTML & CSS', 'Websockets']
    },
    {
      name: 'Music Player Website', icon: null, links: [{name: 'Github', url: 'https://github.com/Yuvaraja28/Music_Player_Website'}],
      description: "A Spotify Inspired Project to Listen to local Songs from web dashboard in which we can play and control songs in the browser",
      technologies: ['Javascript', 'HTML & CSS']
    },
    {
      name: 'Student Connect', icon: null, links: [{name: 'Github', url: 'https://github.com/Yuvaraja28/MVIT_Student_Connect_NextJS'}],
      description: "This Project is aimed to connect College Management and Students, Where students can login and get their College related tasks that has been assigned to them from each staffs.",
      technologies: ['Python', 'Node JS', 'Next JS', 'HTML & CSS']
    },
    {
      name: 'AI ChatBot GPT3', icon: null, links: [{name: 'Github', url: 'https://github.com/Yuvaraja28/AI_Chat_Bot_GPT3'}],
      description: "This Project is based on OpenAI's API and Python Flask, Get ChatGPT prompts in Colorful Website via their API",
      technologies: ['Python', 'Javascript', 'HTTP API\'s', 'HTML & CSS']
    },
  ]
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const loading_timer = setTimeout(() => {setLoading(false)}, 3000);
    return() => clearTimeout(loading_timer);
  }, [])
  return (
    <main>
      {isLoading ?
        <div className={["centre_div"].join(' ')}>
          <OrbitLoader />
        </div>
      :
        <>
          <div className={"navbar"}>
            <div className={["navbar_text_div"].join(' ')}>
              <Image alt='Yuvaraja' className={["navbar_icon"].join(' ')} src={'/images/yuvaraja.png'} width={40} height={40} />
              <div className={"navbar_text"}>
                <span className={["navbar_text_name", righteous.className].join(' ')}>Yuvaraja</span>
                <span className={["navbar_text_role", lexend.className].join(' ')}>FullStack Developer</span>
              </div>
            </div>
            <div className={["profile_social_div"].join(' ')}>
              {button_links.map(button => button.nav ? <a key={button.name} className={"profile_social_button"} target='_blank' href={button.link}>{button.icon}</a> : null)}
            </div>
          </div>
          <div className={"profile_div"}>
            <div className={"articles_div"}>
              <article className={["profile_bg"].join(' ')}>
                <div className={["profile_container"].join(' ')}>
                  <span className={["profile_name", "green_glow", josefin_sans.className].join(' ')}>Yuvaraja</span>
                </div>
              </article>
              <article className={["aboutme_container"].join(' ')}>
                <div className={["aboutme_inner"].join(' ')}>
                  <Image className={'aboutme_banner'} width={520} height={285} src={"/images/banner.gif"} />
                  <div className={"aboutme_inner_column"}>
                    <span className={["aboutme_heading", "green_glow", righteous.className].join(' ')}>
                      About me
                    </span>
                    <div className={'aboutme_text_div'}>
                      <span className={["aboutme_text", lexend.className].join(' ')}>
                        Hey there! I'm <b>Yuvaraja</b>, a developer who enjoys coding in Python, Node.js, and C/C++. I also work in web development with HTML, CSS, and Next.js. When it comes to databases, I'm familiar with MongoDB, Redis, and MySQL.
                      </span>
                      <span className={["aboutme_text", lexend.className].join(' ')}>
                        Aside from coding, I have a keen interest in computer networks and Linux. I like to make systems secure and efficient, and I'm always up for a good problem-solving challenge. Additionally, I have experience in cloud computing, which adds flexibility and scalability to my projects.
                      </span>
                      <span className={["aboutme_text", lexend.className].join(' ')}>
                        In my free time, I'm learning about machine learning to broaden my skill set and keep up with the latest tech trends. Looking forward to connecting and sharing knowledge with fellow enthusiasts!
                      </span>
                    </div>
                    <div className={["aboutme_social_div"].join(' ')}>
                      {button_links.map(button => 
                        <a key={button.name} className={["aboutme_social_button", lexend.className].join(' ')} target='_blank' href={button.link}>
                          <span className={"button button_icon"}>{button.icon}</span>
                          <span className={"button"}>{button.name}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
              <article className={["projects_container"].join(' ')}>
                <div className={'projects_inner'}>
                  <span class={["projects_heading", "green_glow", righteous.className].join(' ')}>
                    Projects
                  </span>
                  <div className={"projects_list_div"}>
                    {projects.map(innerProject =>
                      <div key={innerProject.name} className={["project_div"].join(' ')}>
                        {innerProject.icon == null ? "" : <Image className={["project_icon", 'show_pc'].join(' ')} alt='project' src={innerProject.icon} width={68} height={68} />}
                        <div className={"project_details_div"}>
                          <div className={'project_name_icon_div'}>
                            {innerProject.icon == null ? "" : <Image className={["project_icon", 'show_mobile'].join(' ')} alt='project' src={innerProject.icon} width={38} height={38} />}
                            <span className={["project_name", outfit.className].join(' ')}>{innerProject.name}</span>
                          </div>
                          <span className={["project_description", lexend.className].join(' ')}>
                            {innerProject.description}
                          </span>
                          <span className={["project_technologies", outfit.className].join(' ')}>
                            {innerProject.technologies.join(', ')}
                          </span>
                          <div className={"project_link_div"}>
                            {innerProject.links.map(link =>
                              <a className={"project_link_icon"} target='_blank' href={link.url}>
                                {link.url.startsWith("https://github.com") ? <FaGithub /> : (link.url.startsWith("https://pterodactylmarket") || link.url.startsWith("https://builtbybit")) ? <TbBrandCashapp />  : <BiLink />}
                                <span className={['project_link_name', outfit.className].join(' ')}>
                                  {link.name}
                                </span>
                              </a>
                            )}
                          </div>
                        </div>                      
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </>
      }
    </main>
  )
}
