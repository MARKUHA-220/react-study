import './ArticleCard.css'

const ArticleCard = (props) => {
    return (
        <div className="ArticleCard">
            <img src={props.image} alt="image" />
            <h1>{props.name} rules!</h1>
            <p>{props.description}</p>
        </div>
    );
}

export default ArticleCard;