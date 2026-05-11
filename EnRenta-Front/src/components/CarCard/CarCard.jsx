import "./CarCard.css";

export const CarCard = ({ car }) => {

    const mainImage = car.carImages.find(
        (img) => img.mainImages
    );

    return (
        <article className="car-card">

            <img src={mainImage?.imageUrl} alt={car.carName}/>

            <div className="car-card-content">

                <h3>{car.carName}</h3>

                <p>{car.carDescription}</p>

            </div>

        </article>
  );
};