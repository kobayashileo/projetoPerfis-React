import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import styles from "./profile.module.css";

export function Profile(props) {
  return (
    <div className={styles.container}>
        <img src={props.avatar} alt={props.name} className={styles.avatar}></img>
        <h2 className={styles.name}>{props.name}</h2>

        <div className={styles.info}>{props.bio}</div>
        <div className={styles.info}>{props.phone}</div>
        <div className={styles.info}>{props.email}</div>

        <div className={styles.links}>
            <a href={props.githubUrl} target='_blank' rel='noreferer' className={props.theme === "male" ? styles.linkButtonMale : styles.linkButton}>
                <FaGithub className={styles.icon}/>
                Github
            </a>
            <a href={props.linkedinUrl} target='_blank' rel='noreferer' className={props.theme === "male" ? styles.linkButtonMale : styles.linkButton}>
                <FaLinkedin className={styles.icon}/>
                LinkedIn
            </a>
            <a href={props.instagramUrl} target='_blank' rel='noreferer' className={props.theme === "male" ? styles.linkButtonMale : styles.linkButton}>
                <FaInstagram className={styles.icon}/>
                Instagram
            </a>
        </div>
    </div>
  )
}

//         avatar="https://randomuser.me/api/portraits/women/44.jpg"
//         name="John Kennedy"
//         bio="Presidente dos EUA"
//         phone="(11) 99988-7766"
//         email="johnkennedy@gmail.com"
//         githubUrl="https://github.com/kobayashileo"
//         linkedinUrl="https://www.linkedin.com/in/leonardokobayashi/"
//         instagramUrl="https://www.instagram.com/k_obayashileo"
