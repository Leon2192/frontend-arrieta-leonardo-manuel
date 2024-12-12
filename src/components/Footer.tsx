import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Leon2192" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/leonardo-manuel-arrieta/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:leo.arrieta93@hotmail.com"><EmailIcon/></a>
        <a href="https://wa.me/1127682286" target="_blank" rel="noreferrer"><WhatsAppIcon/></a> 
      </div>
      <p>Copyright @ <a href="https://github.com/Leon2192" target="_blank" rel="noreferrer">Leonardo Manuel Arrieta</a></p>
    </footer>
  );
}

export default Footer;