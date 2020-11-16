// import React from 'react';
import React from 'react';
import Facebook from '@material-ui/icons/Facebook'
import {FaFacebookF,FaTwitter,FaGithub,FaLinkedinIn} from 'react-icons/fa'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import LanguageIcon from '@material-ui/icons/Language';
import WebOutlined from "@material-ui/icons/WebOutlined";
import AssignmentOutlined from "@material-ui/icons/AssignmentOutlined";


export default {
  name: "Elvis O. Amoako",
  title: "Frontend Developer",
  birthday: "22nd October, 1996",
  // email: "elvisopoku29@gmail.com",
  address: "UCC Amamoma",
  phone: "0 544 181 919",
  socials: {
    Facebook: {
      link: "https://web.facebook.com/elvisso.amoako",
      text: "| Elvis Jnr Amoako",
      icon: <FaFacebookF />,
    },
    Twitter: {
      link: "https://twitter.com/spacewalker13",
      text: "| @spacewalker13",
      icon: <FaTwitter />,
    },
    Linkedin: {
      link: "https://www.linkedin.com/in/elvis-amoako-3b1896a9/",
      text: "| Elvis Amoako",
      icon: <FaLinkedinIn />,
    },
    Github: {
      link: "https://www.github./Elvis020",
      text: "| Elvis020",
      icon: <FaGithub />,
    },
  },
  about: "Experienced Frontend Web Developer adept in all stages of advanced web development.Knowledgeable in user interface(UI) and user experience(UX). I am a self-taught and assured individual with more than 3 years of experience as a Developer. Trained in various web technologies.Flexible and poised with well-developed skills in Angular,React,Svelte and Python, just to mention a few.Able to effectively self-manage during independent projects, as well as collaborate in a team setting and a product of CodeCoast Web Development Training",
  experiences: [
    {
      title: "Freelancer",
      date: "Nov 2020-Present",
      description: "Currently working on an E-Commerce store with Stripe integration for a Client.hsi project is being built with React, for the frontend and Firebase as the backend.",
    },
    {
      description: "As a freelancer, I have all worked on various projects, including Landing pages, blogs etc.",
    },
    {
      title: "Web Development Trainee",
      date: " May 2020-Nov 2020",
      description: "Partook in a web development training held at Code Coast, CapeCost-Ghana.In this training, I was trained to be web developer, where i learnt React,Node and Flask and built awesome projects like the Covid 19 tracker. Also created APIs and integrated with Frontend.",
    },
    {
      description: "During this training I took the step ahead to learn more Javascript libraries like Svelte,Angular and Advanced Javascript.I also worked on projects where Firebase was used as the backend.",
    },
    {
      title: "Physics Teaching Assistant",
      date: "Sept 2019-Aug 2020",
      description: "Assisted in evaluating students progress with lecturer through analysis of test-scores and assignments.Also, worked with individual students to provide personalized educational, behavioral and emotional support",
    },
    {
      description: "Tutored struggling students individually and in small groups to reinforce concepts and to increase performance of these students.",
    },
  ],
  educations: [
    {
      title: "Education 1",
      date: "2020-Present",
      description: "Commodo nulla mollit ullamco commodo officia dolore amet.Commodo nulla mollit ullamco commodo officia dolore amet.",
    },
    {
      title: "Education 2",
      date: "2014-2015",
      description: "Commodo nulla mollit ullamco commodo officia dolore amet.Commodo nulla mollit ullamco commodo officia dolore amet.",
    },
    {
      title: "Education 3",
      date: "Aug 2016-Sept 2018",
      description: "Commodo nulla mollit ullamco commodo officia dolore amet.Commodo nulla mollit ullamco commodo officia dolore amet.",
    },
  ],
  services: [
    {
      title: "Web Dev",
      description: "I have been a badass web developer for 10 years",
      icon: <WebOutlined />,
    },
    {
      title: "Branding Identity",
      description: "I have been a badass web developer for 10 years",
      icon: <AssignmentOutlined />,
    },
    {
      title: "Web Designer",
      description: "I have been a badass web developer for 10 years",
      icon: <WebOutlined />,
    },
  ],
  skills: [
    {
      title: "FRONT-END",
      description: ["React JS", "Javascript", "Typescript", "Bootstrap", "Material UI"],
    },
    {
      title: "BACK-END",
      description: ["Node JS", "Python"],
    },
    {
      title: "DATABASES",
      description: ["Firebase", "MongoDB"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Git", "Github", "Bitbucket"],
    },
  ],
  projects: [
    {
      tag: "React",
      image: "/assets/g1.jpg",
      caption: "A short description",
      title: "Project 1",
      description: "Qui proident eiusmod commodo deserunt commodo occaecat.",
      links: [
        { link: "https://www.google.com", icon: <YoutubeIcon /> },
        { link: "https://www.github.com", icon: <GithubIcon /> },
        { link: "https://www.lang.com", icon: <LanguageIcon /> },
      ],
    },
    {
      tag: "React",
      image: "assets/g2.jpg",
      caption: "A short description",
      title: "React Project 2",
      description: "Qui proident eiusmod commodo deserunt commodo occaecat.",
      links: [
        { link: "https://www.google.com", icon: <YoutubeIcon /> },
        { link: "https://www.github.com", icon: <GithubIcon /> },
        { link: "https://www.lang.com", icon: <LanguageIcon /> },
      ],
    },
    {
      tag: "Angular",
      image: "/assets/g3.jpg",
      caption: "A short description",
      title: "Angular Project 1",
      description: "Qui proident eiusmod commodo deserunt commodo occaecat.",
      links: [
        { link: "https://www.google.com", icon: <YoutubeIcon /> },
        { link: "https://www.github.com", icon: <GithubIcon /> },
        { link: "https://www.lang.com", icon: <LanguageIcon /> },
      ],
    },
    {
      tag: "Svelte",
      image: "/assets/g4.jpg",
      caption: "A short description",
      title: "Svelte Project 1",
      description: "Qui proident eiusmod commodo deserunt commodo occaecat.",
      links: [
        { link: "https://www.google.com", icon: <YoutubeIcon /> },
        { link: "https://www.github.com", icon: <GithubIcon /> },
        { link: "https://www.lang.com", icon: <LanguageIcon /> },
      ],
    },
  ],
};
