import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Hero from "./pages/Hero";

export default function App() {
  return (
    <main>
      <NavBar />
      <section>
        <Hero />
      </section>
      <Footer />
    </main>
  );
}
