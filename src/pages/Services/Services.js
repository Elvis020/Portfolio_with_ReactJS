import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import resumeData from "../../Utils/ResumeData";
import Icon from "@material-ui/core/Icon";

import "./Services.css";
import { TimelineDot } from "@material-ui/lab";

const Services = () => {
  return (
    <>
      {/* Services */}
      <Grid container className="section  pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <Typography className="section_title_text" variant="h6">
            Services
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-around">
            {resumeData.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className="service">
                  <Icon className="service_icon"> {service.icon} </Icon>
                  <Typography variant="h6" className="service_title">
                    {" "}
                    {service.title}{" "}
                  </Typography>
                  <Typography variant="body2" className="service_description">
                    {" "}
                    {service.description}{" "}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* Skills */}
      <Grid container justify="space-between" className="section graybg pb_45 p_50">
        <Grid item xs={12}>
          <Typography className="section_title_text" variant="h6">
            Skills
          </Typography>
          <Grid container justify="space-between" spacing={3}>
            {resumeData.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className="skill">
                  <Typography variant="h6" className="skill_title">
                    {skill.title}
                  </Typography>
                  {skill.description.map((element) => (
                    <Typography variant="body2" className="skill_description">
                      <TimelineDot variant={"outlined"} className="timeline_dot" />
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Services;

{
  /* Services */
}

{
  /* Skills */
}
