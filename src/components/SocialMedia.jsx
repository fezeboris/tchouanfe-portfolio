import React from "react";
import { BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs";
import { FaTiktok, FaFacebookF } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/tchouanfe-boris-327824218"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://twitter.com/BTchouanfe?s=09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        <a
          href="https://www.facebook.com/profile.php?id=100008943550010&mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a
          href="https://www.youtube.com/channel/UCb7GIDR1w7VgFAKW5t9Owaw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsYoutube />
        </a>
      </div>
      <div>
        <a href="http://tiktok.com/@borisfeze">
          <FaTiktok />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
