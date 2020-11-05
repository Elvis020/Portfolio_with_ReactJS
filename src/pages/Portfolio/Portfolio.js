import React,{useState} from "react";
import "./Portfolio.css";
import {Tabs} from '@material-ui/core';

function Portfolio() {
    const [tabValue, setTabValue] = useState('All')
  return (
    <Grid container className="section pb_45 pt_45">


        {/* Title */}
      <Grid item className="section_title mb_30">
        <span></span>
        <Typography className="secction_title_text" variant="h6">
          Portfolio
        </Typography>
      </Grid>


      {/* Tabs */}
      <Grid item>
          <Tabs value={tabValue}></Tabs>
      </Grid>
    </Grid>
  );
}

export default Portfolio;
