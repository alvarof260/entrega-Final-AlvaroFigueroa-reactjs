import { NavBar } from "./components/Layouts/NavBar/NavBar";
import { Notification } from "./components/Layouts/Notification/Notification";
import { ItemListContainer } from "./components/store/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/detail/ItemDetailContainer/ItemDetailContainer";
import { Footer } from "./components/Layouts/Footer/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <Notification />
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={<ItemListContainer/>}
        />
        <Route
          exact
          path="/category/:productCategory"
          element={<ItemListContainer/>}
        />
        <Route
          exact
          path="/item/:productId"
          element={<ItemDetailContainer />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
