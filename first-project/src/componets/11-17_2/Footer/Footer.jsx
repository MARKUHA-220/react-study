function Footer(props) {
    return (
        <footer className="footer">
            <p>
                © {props.year} {props.siteTitle}.
            </p>
        </footer>
    );
}

export default Footer;
