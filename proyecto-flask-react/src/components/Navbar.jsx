import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="bg-gray-950 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <ul className="flex space-x-6 text-white">
                    <li><NavLink to="/create-user" className={({ isActive }) => isActive ? "text-gray-200 font-semibold" : "hover:text-gray-200"}>Crear Usuario</NavLink></li>
                    <li><NavLink to="/update-user" className={({ isActive }) => isActive ? "text-gray-200 font-semibold" : "hover:text-gray-200"}>Actualizar Usuario</NavLink></li>
                    <li><NavLink to="/remove-user" className={({ isActive }) => isActive ? "text-gray-200 font-semibold" : "hover:text-gray-200"}>Eliminar Usuario</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;
