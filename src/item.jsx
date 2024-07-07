const Item=({title,price,category,description})=>{
    return (
        <div className="item">
            <h2 role="heading">{title}</h2>
            <p>{price}</p>
            <p>Category : {category}</p>
            <p>{description}</p>
        </div>
    )
}

export default Item