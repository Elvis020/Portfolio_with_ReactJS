// import React from 'react';
import React from 'react'
import ReactDOM from 'react-dom'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GithubIcon from '@material-ui/icons/GitHub';
import WebOutlined from "@material-ui/icons/WebOutlined";
import AssignmentOutlined from "@material-ui/icons/AssignmentOutlined";


export default {
    name: 'Elvis O. Amoako',
    title: 'Frontend Developer',
    birthday: '22nd October, 1996',
    email: 'elvisopoku29@gmail.com',
    address: 'UCC Amamoma',
    phone: '0 544 181 919',
    socials:{
        Facebook: {
            link: 'https://www.fb.com',
            text: 'My Facebook',
            icon: <FacebookIcon />,
        },
        Twitter: {
            link: 'https://www.twitter.com',
            text: 'My Twitter',
            icon: <TwitterIcon />,
        },
        Linkedin: {
            link: 'https://www.linkedin.com',
            text: 'My Linkedin',
            icon: <LinkedInIcon />,
        },
        Github: {
            link: 'https://www.github.com',
            text: 'Elvis020',
            icon: <GithubIcon />,
        },
    },
    about: 
        "Amet do quis in aliquip occaecat eiusmod occaecat. Elit quis dolor pariatur voluptate quis velit cupidatat aliqua occaecat nisi esse minim Lorem. Ex ea aliqua laboris minim esse exercitation consequat tempor non elit mollit sint cupidatat. Ullamco consectetur et nisi culpa duis qui dolor ut. Fugiat ex commodo aliquip aute deserunt est esse fugiat incididunt sit ea non labore veniam.\n\nAdipisicing mollit incididunt labore consequat ullamco mollit. Occaecat id mollit deserunt laborum laboris mollit excepteur quis et officia ullamco laboris. Nisi elit sunt labore proident LoreExercitation aliquip ut amet incididunt labore. ",
    experiences: [
        {
            title: 'Work 1',
            date: '2020-Present',
            description: "Commodo nulla mollit ullamco commodo officia dolore amet.Commodo nulla mollit ullamco commodo officia dolore amet."
        },
        {
            title: 'Work 2',
            date: '2014-2015',
            description: "Commodo nulla mollit ullamco commodo officia dolore amet.Commodo nulla mollit ullamco commodo officia dolore amet."
        },
        {
            title: 'Work 3',
            date: 'Aug 2016-Sept 2018',
            description: "Commodo nulla mollit ullamco commodo officia dolore amet.Commodo nulla mollit ullamco commodo officia dolore amet."
        },
    ],
    educations: [
        {
            title: 'Education 1',
            date: '2020-Present',
            description: "Commodo nulla mollit ullamco commodo officia dolore amet.Commodo nulla mollit ullamco commodo officia dolore amet."
        },
        {
            title: 'Education 2',
            date: '2014-2015',
            description: "Commodo nulla mollit ullamco commodo officia dolore amet.Commodo nulla mollit ullamco commodo officia dolore amet."
        },
        {
            title: 'Education 3',
            date: 'Aug 2016-Sept 2018',
            description: "Commodo nulla mollit ullamco commodo officia dolore amet.Commodo nulla mollit ullamco commodo officia dolore amet."
        },
    ],
    services: [
        {
            title: 'Web Dev',
            description: 'I have been a badass web developer for 10 years',
            icon: <WebOutlined />
        },
        {
            title: 'Branding Identity',
            description: 'I have been a badass web developer for 10 years',
            icon: <AssignmentOutlined />
        },
        {
            title: 'Web Designer',
            description: 'I have been a badass web developer for 10 years',
            icon: <WebOutlined />
        }
    ],
    skills: [
        {
            title: 'FRONT-END',
            description: ['React JS', 'Javascript','Typescript', 'Bootstrap','Material UI' ]
        },
        {
            title: 'BACK-END',
            description: ['Node JS', 'Python']
        },
        {
            title: 'DATABASES',
            description: ['Firebase', 'MongoDB']
        },
        {
            title: 'SOURCE CONTROL',
            description: ['Git', 'Github', 'Bitbucket']
        },
    ]
}