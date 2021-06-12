import './App.css';
import YaziListesi from './components/YaziListesi';
import { BrowserRouter as Router, Route } from "react-router-dom";
import YaziDetayi from "./components/YaziDetayi";
import YaziEkle from "./components/YaziEkle";


function App() {
  return (

    <Router>

      <div className="container">

        <Route path="/" exact component={YaziListesi} />
        <Route path="/posts/:id" component={YaziDetayi} />
        <Route path="/yazi_ekle" component={YaziEkle} />

      </div>

    </Router>


  );
}

export default App;
