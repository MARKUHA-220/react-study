import './Hero.css';

function Hero(props) {
    return (
        <section className="hero" id="home">
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
        </section>
    );
}

export default Hero;