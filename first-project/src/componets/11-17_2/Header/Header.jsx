import './Header.css';

function Header(props) {
    return (
        <header className="header">
            <h1>{props.siteTitle}</h1>
            <nav>
                <a href="#home">Pradžia</a>
                <a href="#books">Knygos</a>
                <a href="#about">Apie mus</a>
            </nav>
        </header>
    );
}

export default Header;
