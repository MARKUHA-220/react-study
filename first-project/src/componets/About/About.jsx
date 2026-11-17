import "./About.css";

function About({ text }) {
    return (
        <section className="about" id="about">
            <h2>Apie mus</h2>
            <p>{text}</p>
        </section>
    );
}

export default About;
