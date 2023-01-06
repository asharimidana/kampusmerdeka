import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage/index";
import EditMhs from "./Pages/HomePage/EditMhs";
import AddMhs from "./Pages/HomePage/AddMhs";
import Login from "./Pages/LoginPage/Login";
import DetailMhs from "./Pages/DetailMhs/index";
import DetailEditMhs from "./Pages/DetailMhs/EditMhs";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/mhs/:id" element={<EditMhs/>}/>
        <Route path="/mhs/" element={<AddMhs/>}/>
        <Route path="/login/" element={<Login/>}/>

        <Route path="/detail/:id" element={<DetailMhs/>}/>
        <Route path="/detail_edit/:id" element={<DetailEditMhs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

	export default App;
