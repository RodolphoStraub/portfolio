import Contato from "./components/Contato";
import Habilidades from "./components/Habilidades";
import Navbar from "./components/Navbar";
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Sobre/>
    <Projetos/>
    <Habilidades/>
    <Contato/>
    </>
  );
}
