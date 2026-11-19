import "./BookCard.css";

function BookCard({ title, author, category, description, price, image }) {
    return (
        <article className="book-card">
            <img src={image} alt={`Knygos „${title}“ viršelis`} />
            <div className="book-info">
                <h3>{title}</h3>
                <p className="author">{author}</p>
                <span className="category">{category}</span>
                <p>{description}</p>
                <strong>{price.toFixed(2)} €</strong>
                <button>Placiau</button>
            </div>
        </article>
    );
}

export default BookCard;