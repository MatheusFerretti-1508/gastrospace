import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./containers/Profile";
import ProfilePage from "./Pages/ProfilePage";

const Rotas = () => {

    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurantes/:id" element={<ProfilePage/>} />
    </Routes>
    )
    
}

export default Rotas