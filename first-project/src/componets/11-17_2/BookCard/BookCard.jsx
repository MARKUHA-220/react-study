import './BookCard.css';

function BookCard(props) {
    return (
        <article className="book-card">
            <img src={props.image} alt={props.title} />
            <div className="book-info">
                <span className="category">{props.category}</span>
                <h3>{props.title}</h3>
                <p className="author">{props.author}</p>
                <p>{props.description}</p>
                <div className="book-bottom">
                    <strong>{props.price.toFixed(2)} €</strong>
                    <button>Peržiūrėti</button>
                </div>
            </div>
        </article>
    );
}

export default BookCard;
