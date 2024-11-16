import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import CreateUser from '';
import RemoveUser from '';
import UpdateUser from '';
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/craete-user" element={<CreateUser />} />
                <Route path="/remove-user" element={<RemoveUser />} />
                <Route path="/update-user" element={<UpdateUser />} />
            </Routes>
        </Router>
    );
}

export default App;