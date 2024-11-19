import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateUser from "./pages/CreateUser";
import DeletedUsers from "./pages/DeletedUsers";
import EditUser from "./pages/EditUser";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<DeletedUsers />} />
        <Route path="/create-user" element={<CreateUser/>} />
        <Route path="/update-user/:id" element={<EditUser />} />
      </Routes>
    </>
  );
}

export default App;
