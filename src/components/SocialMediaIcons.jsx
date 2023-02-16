const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.github.com/Devkant21"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/github.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.hashnode.com/Devkant21"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="hashnode-link" src="../assets/github.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.youtube.com/Devoss-42"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="youtube-link" src="../assets/youtube.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com/Devkant21"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="../assets/twitter.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
