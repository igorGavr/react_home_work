import { Link } from 'react-router-dom';

const Car = ({ car, car: { id, model } }) => {
    return (
        <div>
            {id} -- {model}
            <Link to={id.toString()} state={car}>
                <button>Info</button>
            </Link>
        </div>
    );
};

export { Car };