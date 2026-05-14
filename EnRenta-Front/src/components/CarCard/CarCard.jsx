import "./CarCard.css";
import {Link} from 'react-router-dom';

export const CarCard = ({ car }) => {

    console.log(car);
    
    const mainImage = car.carImages?.find(
        (img) => img.mainImage
    );

    return (
        <article className="car-card">

            <img src={car.mainImageUrl} alt={car.carName}/>

            <div className="car-card-content">

                <Link to={`/cars/${car.id}`}>
                    <h3>{car.carName}</h3>
                </Link>

                <p>{car.carDescription}</p>

            </div>

        </article>
  );
};