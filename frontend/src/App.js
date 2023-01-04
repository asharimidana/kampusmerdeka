import {BrowserRouter, Routes, Route} from "react-router-dom";
// import UserList from "./Pages/HomePage/UserList";
// import AddUser from "./Pages/HomePage/AddUser";
import HomePage from "./Pages/HomePage/index";
import EditMhs from "./Pages/HomePage/EditMhs";
import AddMhs from "./Pages/HomePage/AddMhs";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/mhs/:id" element={<EditMhs/>}/>
        // <Route path="/mhs/" element={<AddMhs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

	export default App;
