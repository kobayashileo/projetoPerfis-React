import React from "react";
import { Header } from "./components/header/header";
import "./global.css"
import { Footer } from "./components/footer/Footer";
import { Profile } from "./components/profile/Profile";

export function App(){
  return (
    <>
    <Header/>
    <div className="app">
      <Profile
        avatar="https://randomuser.me/api/portraits/women/44.jpg"
        name="Anna Carolina"
        bio="Designer"
        phone="(11) 99988-7766"
        email="annacarolina@gmail.com"
        githubUrl="https://github.com/kobayashileo"
        linkedinUrl="https://www.linkedin.com/in/leonardokobayashi/"
        instagramUrl="https://www.instagram.com/k_obayashileo"
      />

      <Profile
        avatar="https://randomuser.me/api/portraits/men/32.jpg"
        name="Joao Paulo Souza"
        bio="Dev. Fullstack"
        phone="(11) 99988-7766"
        email="joaopaulo@gmail.com"
        githubUrl="https://github.com/kobayashileo"
        linkedinUrl="https://www.linkedin.com/in/leonardokobayashi/"
        instagramUrl="https://www.instagram.com/k_obayashileo"
        theme="male"
      />

      <Profile
        avatar="https://randomuser.me/api/portraits/women/55.jpg"
        name="Mariana de Souza"
        bio="Engenheira de Software"
        phone="(11) 99988-7766"
        email="marianasouza@gmail.com"
        githubUrl="https://github.com/kobayashileo"
        linkedinUrl="https://www.linkedin.com/in/leonardokobayashi/"
        instagramUrl="https://www.instagram.com/k_obayashileo"
      />

      <Profile
        avatar="https://randomuser.me/api/portraits/men/65.jpg"
        name="Diego de Souza"
        bio="Dev. Frontend"
        phone="(11) 99988-7766"
        email="diegosouza@gmail.com"
        githubUrl="https://github.com/kobayashileo"
        linkedinUrl="https://www.linkedin.com/in/leonardokobayashi/"
        instagramUrl="https://www.instagram.com/k_obayashileo"
        theme="male"
      />

    </div>
    <Footer/>
    </>
  );
}

