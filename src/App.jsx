import { NavBar } from "./components/Layouts/NavBar/NavBar";
import { Notification } from "./components/Layouts/Notification/Notification";
import { ItemListContainer } from "./components/store/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/detail/ItemDetailContainer/ItemDetailContainer";
import { Footer } from "./components/Layouts/Footer/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import { Cart } from "./components/cart/Cart/Cart";
import { Checkout } from "./components/checkout/Checkout/Checkout";


export function App() {
  return (
    <BrowserRouter>
      <CartProvider>
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
          <Route
            exact
            path="/cart"
            element={<Cart/>}
          />
          <Route
            exact
            path="/*"
            element={<h1>404 NOT FOUND</h1>}
          >
          </Route>
          <Route
            exact
            path="/checkout"
            element={<Checkout/>}
          >
          </Route>
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}
