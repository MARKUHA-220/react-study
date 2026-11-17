import "./Hero.css";

function Hero({ title, subtitle }) {
    return (
        <section className="hero" id="home">
            <p>SKAITYK. ATRASK. TOBULEK</p>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </section>
    );
}

export default Hero;
