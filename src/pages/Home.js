import Header from "../components/Header"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import ProductList from "../components/ProductList";

function Home() {
  return (
    <div className="bg-color">
        <div className="container-fluid grid-container">
            <Header />
            <NavBar />
            <ProductList />
            <Footer />
        </div>
    </div>
  );
}

export default Home;

