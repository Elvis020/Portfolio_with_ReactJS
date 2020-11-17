import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import TextField from '@material-ui/core/TextField'
import resumeData from "../../Utils/ResumeData";
import CustomTimeline, { CustomTimelineSeparator } from "../../components/Timeline/Timeline";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import Icon from "@material-ui/core/Icon";
import CustomButton from '../../components/Button/Button';

import "./Resume.css";
import { TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@material-ui/lab";

function Resume() {
  return (
    <>
      {/* About me */}
      <Grid container className="section pb_45 pt_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <Typography className="secction_title_text" variant="h6">
            About Me
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">
            {" "}
            {resumeData.about}{" "}
          </Typography>
        </Grid>
      </Grid>
      {/* Educations and Experience */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <Typography className="section_title_text" variant="h6">
            Resume
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container className="resume_timeline">
            {/*  Experiences */}
            <Grid style={{ paddingRight: "1px" }} item sm={12} md={6}>
              <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
                {resumeData.experiences.map((experience) => (
                  <TimelineItem>
                    <CustomTimelineSeparator className="separator-padding">
                      <TimelineDot variant="outlined" className="timeline_dot" />
                    </CustomTimelineSeparator>
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">{experience.title} </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {experience.date}{" "}
                      </Typography>
                      <Typography variant="body2" className="timeline_description">
                        {experience.description}{" "}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            {/* Working History and Experiences */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education" icon={<SchoolIcon />}>
                {resumeData.educations.map((education) => (
                  <TimelineItem>
                    <CustomTimelineSeparator className="separator-padding">
                      <TimelineDot variant="outlined" className="timeline_dot" />
                    </CustomTimelineSeparator>
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">{education.title} </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {education.date}{" "}
                      </Typography>
                      <Typography variant="body2" className="timeline_description">
                        {education.description}{" "}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Resume;
