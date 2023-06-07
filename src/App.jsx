import { NavBar } from "./components/Layouts/NavBar/NavBar"
import { Notification } from "./components/Notification/Notification"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Footer } from "./components/Layouts/Footer/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <Notification/>          
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting={"Bienvenidos!👋"} />}/>
        <Route exact path="/item/:productId" element={<ItemDetailContainer/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
