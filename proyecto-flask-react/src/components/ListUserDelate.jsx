const ListUserDelate = () => {
  const styles = {
    cuerpo_pg:
      "flex flex-col items-center justify-center w-full h-screen items-start bg-gray-950",
    tabla: "rounded-xl w-4/5 bg-slate-900 text-slate-300",
    titulos_de_tabla: "bg-slate-800 text-slate-300 font-bold py-2 px-4 rounded text-left border border-4 border-slate-700",
    tabla_contenido: "py-2 px-4 border border-4 border-slate-700",
    boton_borrar_usuario:
      "bg-gray-100 hover:bg-gray-400 text-gray-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
  };
  const deleteCharacter = () => {
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
                <tr>
                  <td className={styles.tabla_contenido}>
                    1
                  </td>
                  <td className={styles.tabla_contenido}>
                    Juan
                  </td>
                  <td className={styles.tabla_contenido}>
                    hernandez
                  </td>
                  <td className={styles.tabla_contenido}>
                    <button onClick={() => deleteCharacter()} className={styles.boton_borrar_usuario}>
                      Eliminar
                    </button>
                  </td>
                </tr>
            </tbody>
          </table>
        </div>
    </>
  );
};

export default ListUserDelate;
