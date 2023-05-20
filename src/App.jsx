import {NavBar} from "./components/NavBar/NavBar"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
export function App() {
    return(
        <>
        <NavBar/>
        <ItemListContainer greeting={"Bienvenidos!👋"}/>
        </>
    )
}