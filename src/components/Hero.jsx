
import { logo } from "../assets";

const Hero = () => {
  const heroStyles = {
    backgroundColor: "#F8F8F8", // Background color for the hero section
    padding: "2rem",
    textAlign: "center",
    position: "relative", // Add relative positioning to the hero container
  };

  const logoStyles = {
    width: "180px", // Adjust the logo size as needed
  };

  const buttonStyles = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "50px",
    cursor: "pointer",
    position: "absolute", // Add absolute positioning
    top: "20px", // Adjust the top position as needed
    right: "20px", // Adjust the right position as needed
    zIndex: 1, // Set a higher z-index to bring it to the top
  };

  const headerTextStyles = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  const orangeTextStyles = {
    color: "#FF5733",
  };

  const descStyles = {
    fontSize: "1.2rem",
    maxWidth: "600px",
    margin: "0 auto",
  };

  return (
    <header style={heroStyles}>
      <nav className='flex justify-between items-center mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' style={logoStyles} />
        <button
          type='button'
          onClick={() => window.open("https://github.com/ninambash", "_blank")}
          style={buttonStyles}
        >
          GitHub
        </button>
      </nav>
      <h1 style={headerTextStyles}>
        Summarize Articles with <br className='max-md:hidden' />
        <span style={orangeTextStyles}>OpenAI GPT-4</span>
      </h1>
      <h2 style={descStyles}>
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
