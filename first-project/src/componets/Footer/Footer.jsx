import "./Footer.css";

function Footer({ year, title }) {
    return (
        <footer className="footer">
            <p>© {year} {title} Mano knygų lentyna</p>
        </footer>
    );
}

export default Footer;
