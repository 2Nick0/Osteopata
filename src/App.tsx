import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Newsletter/Newsletter";

function App() {
  return (
    <div>
      <div className="App">
        <div>
          <NavBar refresh={false} />
        </div>
        <div>
          <Newsletter />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
