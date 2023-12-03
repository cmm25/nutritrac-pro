export default function Card(props) {
    return (
        <div className="card">
            <img src={`../images/${props.item.coverImg}`} className="card--image" />
            <p>{props.item.title}</p>
            <p>{props.item.description}</p>
        </div>
    )
}