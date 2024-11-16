import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import CreateUser from '';
import RemoveUser from '';
import UpdateUser from ''; //Lo dejo asi para poner las rutas
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/remove-user" element={<RemoveUser />} />
        <Route path="/update-user" element={<UpdateUser />} />
      </Routes>
    </Router>
  );
}

export default App;