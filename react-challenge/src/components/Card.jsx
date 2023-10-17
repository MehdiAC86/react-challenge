
function Card ({props}) {
    return (
        <div>
        <h1>{props.title}</h1>
        <img src={props.image} alt={props.title} />
        <p>Prix: {props.price}€</p>
        <p>Description: {props.description}</p>
        </div>
        
        
        );
    
    
    
}


export default Card