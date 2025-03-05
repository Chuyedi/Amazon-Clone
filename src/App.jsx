import { Route, Routes } from "react-router";
import "./App.css";

import Header from "./Components/Header/Header";
import CategoryProducts from "./Components/CategoryProducts/CategoryProducts";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/category/:categoryName" element={<CategoryProducts/>}/>
      </Routes>
    </>
  );
}

export default App;
