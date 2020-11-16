import { Typography } from "@material-ui/core";
import React from "react";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import "./Profile.css";
import TimelineItem from "@material-ui/lab/TimelineItem";
import resumeData from "../../Utils/ResumeData";
import PersonOutlinedOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import { TimelineContent } from "@material-ui/lab";
import CustomButton from "../Button/Button";
import GetAppIcon from "@material-ui/icons/GetApp";

const CustomTimeLineItem = ({ title, text, link }) => {
  return (
    <TimelineItem>
      <CustomTimelineSeparator />
      <TimelineContent>
        {link ? (
          <Typography className="timelineItem_text">
            <span> {title} </span>
            <a href={link} target="_blank">
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className="timelineItem_text">
            <span> {title}: </span> {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

function Profile() {
  return (
    <div className="elvis__container">
      <div className="profile container_shadow">
        <div className="profile_name">
          <Typography className="name">{resumeData.name}</Typography>
          <Typography className="title">{resumeData.title}</Typography>
        </div>

        <figure className="profile_image">
          <img width="50%" src="/assets/contact-bg.jpg" alt="" />
        </figure>

        <div className="profile_information">
          <CustomTimeline icon={<PersonOutlinedOutlinedIcon />}>
            {/* <CustomTimeLineItem title="Name" text={resumeData.name} /> */}
            {/* <CustomTimeLineItem title="Email" text={resumeData.email} /> */}
            {Object.keys(resumeData.socials).map((key) => (
              <CustomTimeLineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link} />
            ))}
          </CustomTimeline>
          <br />
          <div className="button_container">
            <CustomButton text={"Download CV"} icon={<GetAppIcon />} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
