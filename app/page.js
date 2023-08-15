'use client';
import './styles.scss'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { OrbitLoader } from '@/components/loader/loader'
import { Josefin_Sans, Lexend, Righteous, Secular_One } from 'next/font/google'
import { BiLink } from 'react-icons/bi'
import { AiOutlineShopping } from 'react-icons/ai'
import { FaGithub, FaLinkedin, FaDiscord, FaInstagram } from 'react-icons/fa'

const secular_one = Secular_One({ weight: ['400'], subsets: ['latin'] });
const lexend = Lexend({ weight: ['300', '400', '500', '600'], subsets: ['latin'] });
const josefin_sans = Josefin_Sans({ weight: ['700'], subsets: ['latin'] });
const righteous = Righteous({ weight: ['400'], subsets: ['latin'] });

export default function Home() {
  const button_links = [
    {name: 'Github', icon: <FaGithub />, link: "https://github.com/yuvaraja28", nav: true},
    {name: 'Linkedin', icon: <FaLinkedin />, link: "https://www.linkedin.com/in/yuvaraja-murali-4814bb242/", nav: true},
    {name: 'Discord', icon: <FaDiscord />, link: "https://discord.com/users/759050921413312532", nav: true},
    {name: 'Instagram', icon: <FaInstagram />, link: "https://www.instagram.com/yuvaraja_28/", nav: false}
  ]
  const commercial_projects = [
    { 
      name: 'Devactyl Bot', icon: '/projects/devactyl.png', links: ['https://pterodactylmarket.com/resource/619', 'https://builtbybit.com/resources/devactyl-bot.29488/'],
      description: "This is my commercial Project, Devactyl Bot lets you control all your Pterodactyl Panel Servers right from Discord in a Beautiful UI, Pterodactyl is a Cloud Server Management Software"
    },
    {
      name: 'MineCore Bot', icon: '/projects/minecore.png', links: ['https://builtbybit.com/resources/minecore-bot.29877'],
      description: "This is my commercial Project, MineCore Bot lets users to setup Minecraft Servers and ping it and get server and player details to Discord."
    },
  ]
  const personal_projects = [
    { 
      name: 'Frix Cloud', icon: '/projects/frix_cloud.png', links: ['https://github.com/Yuvaraja28/FrixCloud_Hack-SRM-4.0'],
      description: "This Project is Based on Cloud Computing which enables users to control their Local PC or server from Mobiles or other PC through a clean Dashboard"
    },
    { 
      name: 'Block Chat', icon: '/projects/block_chat.png', links: ['https://github.com/Yuvaraja28/BlockChat_Tech_Triumph_1.0'],
      description: "This is Chat WebApp Project based on blockchain Technology which creates Hash value and validates it with each and every block of message before sending it to other clients"
    },
    { 
      name: 'Thermodynamics Problem Solver', icon: '/projects/td.png', links: ['https://td.yuvaraja28.me'],
      description: "This Project is based on Thermodynamics. So in this Project you can calculate all kinds of Problem related to Otto, Diesel, Brayton, Dual Cycles by inputing valid datas"
    },
    {
      name: 'Student Connect', icon: null, links: ['https://github.com/Yuvaraja28/MVIT_Student_Connect_NextJS'],
      description: "This Project is aimed to connect College Management and Students, Where students can login and get their College related tasks that has been assigned to them from each staffs."
    },
    {
      name: 'Private Chat Server', icon: null, links: ['https://github.com/Yuvaraja28/Private-Chat-Server'],
      description: "This is a Group Web-Chat Application Project based on Python Websockets for seamless Message Transfer and Flask to serve as Web Server"
    },
    {
      name: 'AI ChatBot GPT3', icon: null, links: ['https://github.com/Yuvaraja28/AI_Chat_Bot_GPT3'],
      description: "This Project is based on OpenAI's API and Python Flask, Get ChatGPT prompts in Colorful Website via their API"
    },
  ]
  const projects = [
    {name: 'Commercial Projects', obj: commercial_projects},
    {name: 'Personal Projects', obj: personal_projects}
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
      <div className={"profile_div"}>
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
        <div className={"articles_div"}>
          <article className={["profile_bg"].join(' ')}>
            <div className={["profile_container"].join(' ')}>
              <span className={["profile_name", "green_glow", josefin_sans.className].join(' ')}>Yuvaraja</span>
            </div>
          </article>
          <article className={["aboutme_container"].join(' ')}>
            <div className={["aboutme_inner"].join(' ')}>
              <span className={["aboutme_heading"].join(' ')}>
                <span className={["green_glow", righteous.className].join(' ')}>FullStack Developer<br />from </span>
                <span style={{ textDecoration: 'underline' }} className={["india", secular_one.className].join(' ')}>India</span>
              </span>
              <span className={["aboutme_text", lexend.className].join(' ')}>
                I'm a <b>Passionate Developer</b> with over <b>3+ years</b> of experience in <b>Programming</b> and other fields of <b>Computer Science</b>.
              </span>
              <span className={["aboutme_text", lexend.className].join(' ')}>
                Currently obsessed with <b>Cloud Computing</b> and <b>Quantum Computing</b>.
              </span>
              <span className={["aboutme_text", lexend.className].join(' ')}>
                Currently pursuing a major in <b>B.Tech CSE</b> from <b>MVIT</b>.
              </span>
            </div>
            <div className={["aboutme_social_div"].join(' ')}>
              {button_links.map(button => 
                <a key={button.name} className={["aboutme_social_button", lexend.className].join(' ')} target='_blank' href={button.link}>
                  <span style={{ flex: 1 }} className={"button button_icon"}>{button.icon}</span>
                  <span style={{ flex: 2 }} className={"button"}>{button.name}</span>
                </a>
              )}
            </div>
          </article>
          <article className={["projects_container"].join(' ')}>
            <div className={["projects_inner"].join(' ')}>
              {projects.map(project =>
                <>
                  <span className={["projects_heading", "green_glow", josefin_sans.className].join(' ')}>{project.name}</span>
                  <div className={"projects_list_div"}>
                    {project.obj.map(innerProject =>
                      <div key={innerProject.name} className={["project_div"].join(' ')}>
                        <div className={"project_topic"}>
                          {innerProject.icon == null ? "" : <Image className={"project_icon"} alt='project' src={innerProject.icon} width={80} height={80} />}
                          <div className={"project_details_div"}>
                            <span className={["project_name", secular_one.className].join(' ')}>{innerProject.name}</span>
                            <span className={["project_description", lexend.className].join(' ')}>{innerProject.description}</span>
                          </div>
                        </div>
                        <div className={"project_link_div"}>
                          {innerProject.links.map(link =>
                            <a className={"project_link_icon"} target='_blank' href={link}>
                              {link.startsWith("https://github.com") ? <FaGithub /> : (link.startsWith("https://pterodactylmarket") || link.startsWith("https://builtbybit")) ? <AiOutlineShopping />  : <BiLink />}
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </article>
        </div>
      </div>
      }
    </main>
  )
}
