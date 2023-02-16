import hashnode from "../assets/hashnode.svg"
import GitHub from "../assets/github.svg"
import twitter from "../assets/twitter.svg"
import youtube from "../assets/youtube.svg"
import resume from "../assets/resume.png"

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.github.com/Devkant21"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src={GitHub} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://dev21.hashnode.dev/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="hashnode-link" src={hashnode} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.youtube.com/@devoss42"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="youtube-link" src={youtube} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com/Devkant21"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src={twitter} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://drive.google.com/file/d/1WH4D6C4bm0ky7qznjYnyZI-uBJQPWSqr/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="resume-link" src={resume} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
