import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import javascript from "../assets/skills/javascript.svg"
import bash from "../assets/skills/bash.svg"
import kvm from "../assets/skills/kvm.svg"
import wordpress from "../assets/skills/wordpress.svg"
import python from "../assets/skills/python.svg"
import reactIcon from "../assets/skills/react.svg"
import tailwind from "../assets/skills/tailwind.svg"
import nextjs from "../assets/skills/nextjs.svg"
import kubernetes from "../assets/skills/kubernetes.svg"
import ansible from "../assets/skills/ansible.svg"
import windows from "../assets/skills/windows.svg"
import react from "../assets/skills/react.svg"
import nestjs from "../assets/skills/nestjs.svg"
import docker from "../assets/skills/docker.svg"
import git from "../assets/skills/git.svg"
import express from "../assets/skills/express.svg"
import gitlab from "../assets/skills/gitlab.svg"
import materialui from '../assets/skills/material-ui.svg'

import hr from "../assets/curve-hr.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <div className="mt-4">
                <Slider {...settings}>
                    <SkillCard name="react" experience="3 years" img={react} />
                    <SkillCard name="javascript" experience="3 years" img={javascript} />
                    <SkillCard name="react native" experience="2 years" img={react} />
                    <SkillCard name="git" experience="3 years" img={git} />
                    <SkillCard name="tailwind" experience="2 years" img={tailwind} />
                    <SkillCard name="material ui" experience="2 years" img={materialui} />
                    <SkillCard name="next JS" experience="1 years" img={nextjs} />
                    <SkillCard name="nest JS" experience="1 years" img={nestjs} />
                    <SkillCard name="Wordpress" experience="3 years" img={wordpress} />
                    <SkillCard name="python" experience="1 years" img={python} />
                    <SkillCard name="docker" experience="1 years" img={docker} />
                    <SkillCard name="gitlab" experience="1 years" img={gitlab} />
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}