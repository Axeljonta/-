const CarDetail = () => {

    const { car } = useCarById();
    const navigate = useNavigate();

    if (!car) {
        return <p>Cargando...</p>;
    }

    return ( 
    
        <section className="product-detail">

            <header className="product-header">

                <h1>{car.carName}</h1>

                <button onClick={() => navigate(-1)}>
                ←
                </button>

            </header>

            <div className="product-body">

                <div className="product-gallery">

                {car.images.map((image) => (

                    <img
                    key={image.id}
                    src={image.imageUrl}
                    alt={car.carName}
                    />

                ))}

                </div>

                <p>{car.carDescription}</p>

            </div>

        </section>
  );

}