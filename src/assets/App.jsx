
import Hero from "../components/Hero";
import Demo from "../components/Demo";
import Menu from "../components/Menu";

const App = () => {
  return (
    <main style={styles.main}>
       <Menu/>
      <div className='main' style={styles.mainContent}>
        <div className='gradient' style={styles.gradient} />
      </div>

      <div className='app' style={styles.app}>
      
      <Hero />
      <Demo />
       
      </div>
    </main>
  );
};

const styles = {
  main: {
    // Apply a mobile-first approach
    backgroundColor: "#f0f0f0",
    padding: "20px",
  },
  mainContent: {
    maxWidth: "100%",
  },
  gradient: {
    background: "linear-gradient(180deg, #ff5733, #ff8c33)",
    height: "200px",
  },
  app: {
    backgroundColor: "#fff",
    margin: "20px",
    padding: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "100%",
  },
};

// Media queries for responsive design
if (window.innerWidth >= 768) {
  styles.main.padding = "40px";
  styles.gradient.height = "300px";
  styles.app.margin = "40px auto";
  styles.app.maxWidth = "800px";
}

export default App;
