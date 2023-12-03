export default function Card(props) {
    // Check if props.item is defined
    if (!props.item) {
        console.error('Item is undefined or null');
        return null; // or some default rendering or message
    }

    // Check if coverImg is defined
    if (!props.item.coverImg) {
        console.error('coverImg is undefined or null');
        // Provide a default image or handle it as needed
        return (
            <div className="card">
                <img src="../images/defaultImage.jpg" className="card--image" alt="Default Image" />
                <p>{props.item.title}</p>
                <p>{props.item.description}</p>
            </div>
        );
    }

    return (
        <div className="card">
            <img src={`../images/${props.item.coverImg}`} className="card--image" alt={props.item.title} />
            <p>{props.item.title}</p>
            <p>{props.item.description}</p>
        </div>
    );
}
