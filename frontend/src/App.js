import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouterRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

const App = () => {
  return (
    <Router>
      <>
        <Header></Header>
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} exact></Route>
              <Route path="/product/:id" element={<ProductScreen />}></Route>
              <Route path="/cart/" element={<CartScreen />}></Route>
              <Route path="/cart/:id/*" element={<CartScreen />}></Route>
            </Routes>
          </Container>
        </main>
        <Footer></Footer>
      </>
    </Router>
  );
};

export default App;
