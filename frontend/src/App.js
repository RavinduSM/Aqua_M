import { BrowserRouter, Link, Route } from "react-router-dom";
import "./App.css";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";

function App() {

  return (
    <BrowserRouter> 
    <div className="grid-container">
     <header>
       <Navbar/>
     </header>
     <main>
      <Route path="/" component={HomeScreen} exact></Route>
      <Route path="/product/:id" component={ProductScreen} exact></Route>
      <Route path="/load" component={Loading}></Route>      
     </main>
     <footer className="row center">
       Alright reserved
     </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
