import { HomeRecommendations } from "../../components/HomeRecommendations/HomeRecommendations.jsx"

function Home() {
  return (
    <div className="home">
      <section className="homeBuscador">
          <h1>Encuentra el auto que buscas</h1>
      </section>
      <section className="homeCategorias">
          <h2>Explora nuestras categorias</h2>
      </section>
      <section className="homeRecomendaciones">
          <h2>Recomendaciones para ti</h2>
          <HomeRecommendations />
      </section>
    </div>
  );
}

export default Home;