import Navigation from "../../molecules/Navbar";
import Pasantes from "../../Pasantes";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <h1>Acerda de</h1>

      <div id="contenedor">
        <Pasantes
          nombre="Leonardo"
          apellido="Rodriguez Molina"
          IconName="Leonardo"
          personaImg="../img/LeonardoRM.jpeg"
          number="+1 (829) 927-4971"
        />
        <Pasantes
          nombre="Daniel J. Felipe"
          apellido="Féliz Santana"
          IconName="Daniel"
          personaImg="../img/DanielFS.jpeg"
          number="+1 (849) 446-9260"
        />
        <Pasantes
          nombre="Francis Enmanuel"
          apellido="Ramirez Perez"
          IconName="Francis"
          personaImg="../img/FrancisRP.jpeg"
          number="+1 (829) 768-1205"
        />
      </div>
    </>
  );
}
