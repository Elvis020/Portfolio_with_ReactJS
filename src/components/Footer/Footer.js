import React from 'react';
import './Footer.css';
import {Typography} from '@material-ui/core';
import resumeData from '../../Utils/ResumeData';

function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <Typography className="footer_name"> {resumeData.name}  </Typography>
            </div>
            <div className="footer_right">
                <Typography className="footer_copyright">Developed by <a href="/" target='_blank'>Elvis O. Amoako</a> <br/>

                </Typography>
            </div>
        </div>
    )
}

export default Footer
