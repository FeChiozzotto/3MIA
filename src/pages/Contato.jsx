import NavProjeto from "../components/NavProjeto";
import Carrossel from "../components/Carrossel";
import Cards from "../components/Cards";
//import "../App.css";

function Contato() {
  return (
    <div>
      <div>
      <NavProjeto />
        <div className="sobre">
        <h1>Entre em contato com a gente</h1>
        </div>
        <h2>Nosso email de suporte</h2>
        <h3>lojamoveis@gmail.com</h3>
        <h2>Telefone</h2>
        <h3>(99)9 9999-9999</h3>
    </div>
    </div>
  );
}
export default Contato;
