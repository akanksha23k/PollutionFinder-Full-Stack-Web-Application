import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Header />

      <section style={styles.section}>
        <h1>About PollutionFinder</h1>

        <p>
          PollutionFinder is a web-based project designed to help users
          understand air pollution levels in different cities around the world.
          Air pollution is one of the biggest environmental threats to human
          health, contributing to respiratory diseases, heart conditions, and
          reduced life expectancy.
        </p>

        <p>
          This project allows users to search for a city and view historical air
          pollution data, helping people become more aware of environmental
          conditions and take informed actions to protect their health.
        </p>

        <p>
          The goal of PollutionFinder is awareness — because understanding the
          problem is the first step toward solving it.
        </p>
      </section>

      <Footer />
    </>
  );
}

const styles = {
  section: {
    padding: "80px 60px",
    maxWidth: "900px",
    margin: "0 auto",
    lineHeight: "1.7",
    color: "#1f2d3d",
  },
};

export default About;
