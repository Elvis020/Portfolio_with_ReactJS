import React from 'react'
import { Grid, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import resumeData from "../../Utils/ResumeData";
import CustomButton from "../../components/Button/Button";
import "./Contact.css";



const Contact = () => {
    return (
      <>
        {/* Contact */}
        <Grid container spacing={5} className="section_special pt_45 pb_45">
          {/* Contact Form */}
          <Grid item xs={12} lg={7}>
            <Grid container>
              <Grid item className="section_title mb_30">
                <span></span>
                <Typography className="section_title_text" variant="h6">
                  Contact Form
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth name="name" label="Name" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth name="email" label="Email" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth name="message" label="Message" multiline rows={4} />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomButton text="Submit" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* COntact Information */}
          <Grid item xs={12} lg={5}>
            <Grid container>
              <Grid item className="section_title mb_30">
                <span></span>
                <Typography className="section_title_text" variant="h6">
                  Contact Information
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography className="contactInfo_item">
                      <span>Address: </span> {resumeData.address}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className="contactInfo_item">
                      <span>Phone: </span> {resumeData.phone}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className="contactInfo_item">
                      <span>Email: </span> {resumeData.email}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Grid container className="contactInfo_socialsContainer">
                  {Object.keys(resumeData.socials).map(key => (
                  <Grid item className='contactInfo_social'>
                    <a href={resumeData.socials[key].link}> {resumeData.socials[key].icon} </a>
                  </Grid>
                ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
}

export default Contact
