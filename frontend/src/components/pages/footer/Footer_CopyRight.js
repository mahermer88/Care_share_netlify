import React from "react";
import {
  AiFillMail,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

const FooterCopyRight = () => {
  return (
    <>
      <div>
        <p>Copyright Maher &copy; 2021</p>
      </div>
      <div className="links">
        <a href="Ma.meer@hotmail.com" target="_blank" rel="noopener noreferrer">
          <AiFillMail fill="var(--clr-silver)" />
        </a>
        <a
          href="https://github.com/mahermer88"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub fill="var(--clr-silver)" />
        </a>
        <a
          href="https://www.linkedin.com/in/maher-mir-ali-01858588/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin fill="var(--clr-silver)" />
        </a>
        <a
          href="https://twitter.com/MaherMA03960763"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTwitterCircle fill="var(--clr-silver)" />
        </a>
      </div>
    </>
  );
};

export default FooterCopyRight;
