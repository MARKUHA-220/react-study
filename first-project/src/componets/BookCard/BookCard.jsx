import "./BookCard.css";

function BookCard({ title, author, category, description, price, image }) {
    return (
        <article className="book-card">
            <img src={image} alt={`Knygos „${title}“ viršelis`} />
            <div className="book-info">
                <span className="category">{category}</span>
                <h3>{title}</h3>
                <p className="author">{author}</p>
                <p>{description}</p>
                <div className="book-bottom">
                    <strong>{price.toFixed(2)} €</strong>
                    <button>Peržiūrėti</button>
                </div>
            </div>
        </article>
    );
}

export default BookCard;
