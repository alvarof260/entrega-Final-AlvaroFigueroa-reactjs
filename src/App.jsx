import { NavBar } from "./components/Layouts/NavBar/NavBar"
import { Notification } from "./components/Notification/Notification"
import { ItemListContainer } from "./components/Layouts/ItemListContainer/ItemListContainer"

export function App() {
  return (
    <>
      <Notification/>          
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos!👋"} />
    </>
  );
}
