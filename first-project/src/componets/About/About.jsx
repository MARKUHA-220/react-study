import './About.css';

function About(props) {
    return (
        <section className="about" id="about">
            <h2>Apie mus</h2>
            <p>{props.text}</p>
        </section>
    );
}

export default About;
