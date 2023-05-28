import { NavBar } from "./components/Layouts/NavBar/NavBar"
import { Notification } from "./components/Notification/Notification"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { Footer } from "./components/Layouts/Footer/Footer";

export function App() {
  return (
    <>
      <Notification/>          
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos!👋"} />
      <Footer/>
    </>
  );
}
