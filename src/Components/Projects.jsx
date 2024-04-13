import React from "react";
import Crypto from "../assets/Crypto.png";
import ProjectItem from "./ProjectItem";
import DisneyImg from "../assets/Disney.jpg";
import ECommerceImg from "../assets/ECommerce.png";
import SimonSaysGameImg from "../assets/SimonSaysGame.png";
import SpotifyImg from "../assets/Spotify.png";
import WeatherImg from "../assets/Weather.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Each project showcases my proficiency in frontend development, utilizing
        modern technologies and frameworks to create engaging and interactive
        user experiences. From real-time data tracking to faithful recreations
        of popular platforms, these projects demonstrate my ability to bring
        creative ideas to life through code.
      </p>
      <div className=" grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={Crypto}
          title="Crypto-Tracker"
          link={"https://crypto-tracker-two-alpha.vercel.app/"}
        />

        <ProjectItem
          img={DisneyImg}
          title="Disney-Clone"
          link={"https://disney-clone-harsh-kumar.vercel.app/"}
        />
        {/* <ProjectItem img={ECommerceImg} title='E-Commerce' link={}/> */}
        <ProjectItem
          img={SimonSaysGameImg}
          title="SimonSaysGame"
          link={
            " https://simon-says-game-harsh-kumars-projects-714179f3.vercel.app/"
          }
        />

        <ProjectItem
          img={SpotifyImg}
          title="Spotify"
          link={"https://spotify-design-clone-ten.vercel.app/"}
        />

        <ProjectItem
          img={WeatherImg}
          title="Check-Weather-of-India"
          link={" https://weather-of-india.vercel.app/"}
        />
      </div>
    </div>
  );
};

export default Projects;
