import "./Header.css";


function Header({ siteTitle }) {
    return (
        <header className="header">
            <h2>{siteTitle}</h2>
            <nav>
                <a href="#home">Pradžia</a>
                <a href="#books">Knygos</a>
                <a href="#about">Apie mus</a>
            </nav>
        </header>
    );
}

export default Header;
