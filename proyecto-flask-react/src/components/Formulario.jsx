import { useState } from "react";
import axios from "axios";
const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [mensaje, setMensaje] = useState("");
  const API_URL = "http://127.0.0.1:7500/users";

  const handleSubmit = async (e) => {
    e.preventDefault();
    //setMensaje(`Registrado: ${nombre} ${apellido}`);
    try{
      const response = await axios.post(API_URL, {
        nombre, // "nombre":"valor"
        apellido
      })
      if(response.status === 200 || response.status === 201){
        setMensaje("Usuario creado con exito");
        setNombre("");
        setApellido("");
      }
    }catch(error){
      setMensaje("Error al crear el usuario");
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-300">Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="w-full p-2 mt-2 bg-gray-800 text-white rounded"
          />
        </div>

        <div>
          <label className="block text-gray-300">Apellido</label>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
            className="w-full p-2 mt-2 bg-gray-800 text-white rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-gray-100 text-gray-900 rounded"
        >
          Registrar
        </button>
      </form>

      {mensaje && (
        <div className="mt-4 text-center text-green-500">{mensaje}</div>
      )}
    </div>
  );
};

export default Formulario;
