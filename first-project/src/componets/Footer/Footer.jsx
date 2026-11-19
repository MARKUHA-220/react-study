import "./Footer.css";

function Footer({ year, title, siteTitle }) {
    return (
        <footer className="footer">
            <p>{siteTitle}</p>
            <p>© {year} {title} Mano knygų lentyna</p>
        </footer>
    );
}

export default Footer;
