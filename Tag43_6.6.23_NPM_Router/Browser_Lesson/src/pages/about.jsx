import Nav from "../components/Nav";

const About = (props) => {
    return (
      <section>
        <Nav />
        <h1>About</h1>
        <p>{props.pizza}</p>
      </section>
    );
  };
  
  export default About;