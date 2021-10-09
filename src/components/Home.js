import "../styles/Home.css";
import Nav from "./Nav";

function Home() {
  return (
    <main className="Home">
      <Nav />
      <header className="home-header">
        <h1 className="home-h1 blue-shadow">Thomas Drzewiecki</h1>
        <p className="home-p blue-shadow">Front-End Web Developer from Baltimore, MD.</p>
      </header>
    </main>
  );
}

export default Home;
