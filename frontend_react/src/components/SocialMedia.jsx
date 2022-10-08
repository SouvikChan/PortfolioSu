import React from "react";
import { Icon } from "@iconify/react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/sukanya-barat-689544235/"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://www.facebook.com/sukanya.barat.7"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/SukanyaBarat"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <FaGithub/>
        </a>
      </div>
      <div>
        <a
          href="https://leetcode.com/SukanyaBarat/"
          target="_blank"
          rel="noreferrer"
          className="app__flex"
        >
          <Icon icon="simple-icons:leetcode" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
