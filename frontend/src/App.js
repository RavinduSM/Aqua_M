import { BrowserRouter,Link,Route } from "react-router-dom";
//import "./App.css";
//import Sidebar from './sidebar';
import Loading from "./components/Loading";
// import Navbar from "./components/Navbar";
import HomeScreen from "./Screens/HomeScreen";
import ProductDetailScreen from "./Screens/ProductDetailScreen";
import SignIn from "./Screens/Signin";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductScreen from "./Screens/ProductScreen";
import Contact from "./Screens/Contact";
import Profile from "./Screens/Profile";
import Calculator from "./Screens/Calculator";
import RegisterScreen from "./Screens/RegisterScreen";
import ProductDisplayScreen from "./Screens/ProductDisplayScreen";
import InsertProductScreen from "./Screens/InsertProductScreen";
import FarmerList from "./Screens/FarmerList";
import Dashboard from "./Dashboard";
import OrderScreen from "./Screens/OrderListScreen";
import MyProfileScreen from "./Screens/MyProfileScreen";
import UserRoute from "./components/UserRoute";
import FarmerRoute from "./components/FarmerRoute";
import ProductEditScreen from "./Screens/ProductEditScreen";
import SearchScreen from "./Screens/SearchScreen";
import SearchBox from "./components/SearchBox";
import chartScreen from "./Screens/ChartScreen";
import Navbar from "./components/Navbar";

function App() {

  return (
    <BrowserRouter> 
    <div className="grid-container">
     <header>
     {/* <Navbar/>  */}
     </header>
     <main>    
     
     {/* <div>
            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
          </div> */}
     
    
      <Route path="/orderScreen" component={OrderScreen}/>
      <UserRoute path="/profile" component={MyProfileScreen}/>
      <FarmerRoute path="/productlist/farmer" component={ProductDisplayScreen}></FarmerRoute>
      <Route path="/search/name/:search?" component={SearchScreen} exact></Route>
      <Route path='/dashboard' component={Dashboard}/>
      <Route path="/product/:id/edit" component={ProductEditScreen} exact ></Route>
      <Route path='/calculator' component={Calculator} />
      <Route path="/profile" component={Profile} />
      <Route path='/contact' component={Contact} />
      <Route path="/product/:id" component={ProductDetailScreen} />
      <Route path="/farmers/:id" component={Profile}/>
      <Route path="/register" component={RegisterScreen} />
      <Route path="/signin" component={SignIn} />
      <Route path="/load" component={Loading} />      
      <Route path="/insertProduct" component={InsertProductScreen} />
      <Route path="/product" component={ProductScreen} />
      <Route path="/farmers" component={FarmerList}/>
      <Route path="/chart" component={chartScreen}/>
      <Route path="/" component={HomeScreen} exact />  

     </main>
     <footer className="row center">
    
     </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
