import "./CarCard.css";

export const CarCard = ({ car }) => {

  return (
    <article className="car-card">

      <img src={car.carImgUrl} alt={car.carName}/>

      <div className="car-card-content">

        <h3>{car.carName}</h3>

        <p>{car.carDescription}</p>

      </div>

    </article>
  );
};