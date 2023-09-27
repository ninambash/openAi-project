import { useState } from "react";

const Hero = () => {
  const [image, setImage] = useState(null); // State to store uploaded image

  const heroStyles = {
    backgroundColor: "blue",
    padding: "2rem",
    textAlign: "center",
    position: "relative",
  };

  const buttonStyles = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "50px",
    cursor: "pointer",
    position: "absolute",
    top: "20px",
    right: "20px",
    zIndex: 1,
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

  const imageUploadStyles = {
    display: "block",
    maxWidth: "100%",
    margin: "1rem auto",
  };

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <header style={heroStyles}>
      <nav className="flex justify-between items-center mb-10 pt-3">
        <button
          type="button"
          onClick={() => window.open("https://github.com/ninambash", "_blank")}
          style={buttonStyles}
        >
          GitHub
        </button>
      </nav>
      <input
        type="file"
        accept="image/*" // Allow only image files
        onChange={handleImageUpload}
        style={{ display: "none" }} // Hide the input element
        id="image-upload-input"
      />
      <label htmlFor="image-upload-input">
        Upload Image
      </label>
      {image && <img src={image} alt="Uploaded" style={imageUploadStyles} />}
      <h1 style={headerTextStyles}>
        Summarize Articles with <br className="max-md:hidden" />
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
