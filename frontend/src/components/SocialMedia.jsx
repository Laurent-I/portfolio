import React from "react";
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsTwitter />
      </div>
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsInstagram />
      </div>
      <div>
        <BsGithub />
      </div>
    </div>
  );
};

export default SocialMedia;
