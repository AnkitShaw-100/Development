import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

function App() {
  const product = [
    {
      price: 10000,
      title: "Mobile Phone",
      qty: 1,
    },
    {
      price: 2500,
      title: "Watch",
      qty: 1,
    },
    {
      price: 300,
      title: "Laptop",
      qty: 1,
    },
  ];
  return (
    <>
      <Navbar />
      <ProductList product = {product}/>
      <Footer />
    </>
  );
}

export default App;
