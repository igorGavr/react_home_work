const Character = ({character: {name, status, species, image}}) => {
    return (
        <div>
            <h1>{name}</h1>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};