import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/C4D03AQFqCTfxBp5LeQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1641773329389?e=1739404800&v=beta&t=sT387xo2cJlhO2BJwbh1q5Rrie2qBvsi27CLp5pROXQ" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Leon2192" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/leonardo-manuel-arrieta/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Leonardo Manuel Arrieta</h1>
          <p>Front-End Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Leon2192" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/leonardo-manuel-arrieta/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;