import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
const ListUserDeleted = () => {
  const [users, setUsers] = useState([]);
  const API_URL = "http://127.0.0.1:7500/users";
  const styles = {
    cuerpo_pg:
      "flex flex-col items-center justify-center w-full h-screen items-start bg-gray-950",
    tabla: "rounded-xl w-4/5 bg-slate-900 text-slate-300",
    titulos_de_tabla:
      "bg-slate-800 text-slate-300 font-bold py-2 px-4 rounded text-left border border-4 border-slate-700",
    tabla_contenido: "py-2 px-4 border border-4 border-slate-700",
    boton_borrar_usuario:
      "bg-gray-100 hover:bg-gray-400 text-gray-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(API_URL);
        if (response.status === 200) {
          setUsers(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  const deleteCharacter = (id) => {
    console.log(`Eliminado el usuario ${id}`)
  };

  return (
    <>
      <div className={styles.cuerpo_pg}>
        <table className={styles.tabla}>
          <thead>
            <tr>
              <th className={styles.titulos_de_tabla}>ID</th>
              <th className={styles.titulos_de_tabla}>Nombre</th>
              <th className={styles.titulos_de_tabla}>Apellido</th>
              <th className={styles.titulos_de_tabla}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user.id}>
                  <td className={styles.tabla_contenido}>{user.id}</td>
                  <td className={styles.tabla_contenido}>{user.nombre}</td>
                  <td className={styles.tabla_contenido}>{user.apellido}</td>
                  <td className={styles.tabla_contenido + " flex gap-5"}>
                    <button
                      className={styles.boton_borrar_usuario}
                    >
                      <Link to={`/update-user/${user.id}`}>Editar</Link>
                    </button>
                    <button
                      onClick={() => deleteCharacter(user.id)}
                      className={styles.boton_borrar_usuario}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListUserDeleted;
