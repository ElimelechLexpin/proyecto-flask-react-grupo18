import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function EditUser() {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:7500/users/${id}`);
        if (response.status === 200) {
          console.log(response.data)
          setUser(response.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await axios.patch(`http://127.0.0.1:7500/users2/${id}`,{
        nombre: user.nombre,
        apellido: user.apellido
      })
    }catch(error){
      console.log(error)
    }
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="bg-gray-950 p-4 h-screen px-[50%] flex justify-center items-center">
      {loading ? (
        <>Loading....</>
      ) : (
        <form onSubmit={handleSubmit} className="bg-gray-900 p-4 rounded-md">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="nombre" className="text-gray-300">
                First Name
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={user.nombre}
                onChange={handleInputChange}
                className={`bg-gray-100 p-2 rounded-md border-2 border-gray-700 ${
                  isEditing ? "border-blue-500" : ""
                }`}
                disabled={!isEditing}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="apellido" className="text-gray-300">
                Last Name
              </label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={user.apellido}
                onChange={handleInputChange}
                className={`bg-gray-100 p-2 rounded-md border-2 border-gray-700 ${
                  isEditing ? "border-blue-500" : ""
                }`}
                disabled={!isEditing}
              />
            </div>
            {isEditing && (
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Save
              </button>
            )}
            {!isEditing && (
              <button
                onClick={handleEditClick}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Edit
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}

export default EditUser;
