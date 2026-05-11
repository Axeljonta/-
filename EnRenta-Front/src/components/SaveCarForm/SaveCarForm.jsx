import { useState } from "react";
import { createCar } from "../../services/productService";

export const SaveCarForm = () => {
  
// Estado para el formulario

const [form, setForm] = useState({
    carName: "",
    carDescription: "",
    carImages: [
        {
            imageUrl: "",
            mainImage: true,
        },
    ],
  });

// Manejo de cambios en los campos de imagen

const handleImgChange = (index,value) => {

    const newImages = [...form.carImages];

    newImages[index].imageUrl = value;
    
    setForm({
        ...form,
        carImages: newImages,
    });

};

const addImageField = () => {

  setForm({
    ...form,
    carImages: [
      ...form.carImages,
      {
        imageUrl: "",
        mainImage: false,
      },
    ],
  });
};


// Estado para errores
const [error, setError] = useState("");

// Manejo de cambios en los inputs
const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
    //Evitamos refresh de la página
    e.preventDefault();

    try {
        await createCar(form);
        alert("Auto creado");
        setForm({ carName: "", carDescription: "", carImages: [{ imageUrl: "", mainImage: true }] });
    } 
    catch (err) {
      setError(err.message);
    }
};

return (
    <form onSubmit={handleSubmit}>
        <input
            name="carName"
            placeholder="Nombre"
            value={form.carName}
            onChange={handleChange}
        />

        <input
            name="carDescription"
            placeholder="Descripción"
            value={form.carDescription}
            onChange={handleChange}
        />

        {form.carImages.map((image, index) => (

            <input
                key={index}
                type="text"
                placeholder="URL Imagen"
                value={image.imageUrl}
                onChange={(e) =>
                    handleImageChange(index, e.target.value)
                    }
            />

        ))}

        <button type="button" onClick={addImageField}> Agregar imagen </button>

        <button type="submit">Agregar producto</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
};