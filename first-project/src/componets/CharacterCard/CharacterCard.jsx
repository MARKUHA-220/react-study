import './CharacterCard.css'

const CharacterCard = (props) => {
    return (
        <div className="CharacterCard">
            <img src={props.image} alt={props.name} />
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Job: {props.job}</p>
        </div>
    )
}

export default CharacterCard;