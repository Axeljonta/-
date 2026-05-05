import { useState } from "react";
import { createCar } from "../../services/productService";

export const SaveCarForm = () => {
  
// Estado para el formulario
const [form, setForm] = useState({
    carName: "",
    carDescription: "",
    carImgUrl: "",
  });


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
        setForm({ carName: "", carDescription: "", carImgUrl: "" });
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

        <input
            name="carImgUrl"
            placeholder="URL Imagen"
            value={form.carImgUrl}
            onChange={handleChange}
        />

        <button type="submit">Agregar producto</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
};