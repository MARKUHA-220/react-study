import './ArticleCard.css'

const ArticleCard = (props) => {
    return (
        <div className="ArticleCard">
            <img src={props.image} alt={props.name} />
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Job: {props.job}</p>
        </div>
    )
}

export default ArticleCard;