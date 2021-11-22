import styles from "../styles/Footer.module.scss";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaDiscord } from '@react-icons/all-files/fa/FaDiscord';
import { FaReact } from '@react-icons/all-files/fa/FaReact';
// import { SiNextdotjs } from '@react-icons/all-files/si/SiNextdotjs';

export default function footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <b>NAME</b>
        <br />
        <br />
        <a href="https://nailordx.com/portfolio">PortFolio</a>
        <a href="#">Spacial Events</a>
        <a href="https://tipme.in.th/nxdonatetome">Donate</a>
        <a href="https://jaklaew.nailordx.com">JaklaewAudio</a>
        <br />
      </div>
      <div>
        <b>EXTERNAL LINKS</b>
        <br />
        <br />
        <a href="#">Holiday Season</a>
        <a href="#">Tone Generator</a>
        <a href="#">NEiX Blog</a>
        <a href="#">NxMerchStore</a>
        <br />
      </div>
      <div>
        <b>FOLLOW AND CONTACT US</b>
        <br />
        <br />
        <a href="https://www.facebook.com/officialneix"><FaFacebook />&nbsp;| Facebook</a>
        <a href="https://www.youtube.com/channel/UC4ADfFxYcIK2cRZ1yGrZ7vQ"><FaYoutube />&nbsp;| Youtube</a>
        <a href="https://www.instagram.com/officialneix"><FaInstagram />&nbsp;| Instagram</a>
        <a href="https://discord.gg/qJ7FP3pdJU"><FaDiscord />&nbsp;| Discord</a>
        <br />
      </div>
      <br />
      <div>
        <a><FaReact /> | React 17.0.2</a>
        <a>Next.js 12.0</a>
        <a>Web Developer by Nawapon Boonjua</a>
        <a>Director by NEiX</a>
      </div>
    </footer>

  );
}
