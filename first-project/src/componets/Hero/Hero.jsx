import "./Hero.css";

function Hero({ title, subtitle }) {
    return (
        <section className="hero" id="home">
            <p>SKAITYK. ATRASK. TOBULEK</p>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </section>
    );
}

export default Hero;
