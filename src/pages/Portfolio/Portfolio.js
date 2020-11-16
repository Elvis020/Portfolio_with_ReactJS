import React, { useState } from "react";
import "./Portfolio.css";
import { Tabs, Grid, Typography, Tab, Card, CardContent, CardMedia, CardActionArea, Grow, Dialog, DialogTitle, DialogContent, DialogActions } from "@material-ui/core";
import resumeData from "../../Utils/ResumeData";

function Portfolio() {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);

  return (
    <Grid container spacing={1} className="section pb_45 pt_45">
      {/* Title */}
      <Grid item  className="section_title mb_20">
        <span></span>
        <Typography className="secction_title_text" variant="h6">
          Portfolio
        </Typography>
      </Grid>

      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs indicatorColor="white" className="customTabs" onChange={(event, newValue) => setTabValue(newValue)} value={tabValue}>
          <Tab label="All" value="All" className={tabValue == "All" ? "customTabs_item active" : "customTabs_item"} />
          {[...new Set(resumeData.projects.map((item) => item.tag))].map((tag) => (
            <Tab label={tag} value={tag} className={tabValue == tag ? "customTabs_item active" : "customTabs_item"} />
          ))}
        </Tabs>
      </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {resumeData.projects.map((project) => (
            <>
              {tabValue == project.tag || tabValue == "All" ? (
                <Grid item xs={12} sm={6} md={4}>
                  <Grow in timeout={1000}>
                    <Card className="customCard" onClick={() => setProjectDialog(project)}>
                      <CardActionArea>
                        <CardMedia className="customCard_image" image={project.image} title={project.title} />
                        <CardContent>
                          <Typography variant={"body2"} className="customCard_title"> {project.title} </Typography>
                          <Typography variant={"caption"} className="customCard_caption">
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>


      <Dialog open={projectDialog} className='projectDialog' onClose={() => setProjectDialog(false)}>
        <DialogTitle onClose={() => setProjectDialog(false)}> {projectDialog.title} </DialogTitle>
        <img src={projectDialog.image} alt="" className='projectDialog_image' />
        <DialogContent>
            <Typography className='projectDialog_description'> {projectDialog.description} </Typography>
        </DialogContent>
        <DialogActions className='projectDialog_actions'>
          {projectDialog?.links?.map((linksInfo) => {
          const {link,icon} = linksInfo
            return (
              <a href={link} className='projectDialog_icon' target="_blank">
              {icon}
            </a>
            )
          })}
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default Portfolio;
