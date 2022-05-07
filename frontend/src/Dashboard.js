import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Calculator from "./Screens/Calculator";
import Profile from "./Screens/Profile";
import "../src/Dashboard.css";
import OrderScreen from "./Screens/OrderListScreen";
import reportScreen from "./Screens/reportScreen";
import UserRoute from "./components/UserRoute";
import FarmerRoute from "./components/FarmerRoute";
import ProductDisplayScreen from "./Screens/ProductDisplayScreen";
import ProductEditScreen from "./Screens/ProductEditScreen";
import FarmerList from "./Screens/FarmerList";
import Navbar from "./components/Navbar";
import HomeScreen from "./Screens/HomeScreen";
import Contact from "./Screens/Contact";
import ProductDetailScreen from "./Screens/ProductDetailScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import SignIn from "./Screens/Signin";
import Loading from "./components/Loading";
import InsertProductScreen from "./Screens/InsertProductScreen";
import ProductScreen from "./Screens/ProductScreen";

import 'bootstrap/dist/css/bootstrap.min.css';



import SearchScreen from "./Screens/SearchScreen";
import SearchBox from "./components/SearchBox";
import chartScreen from "./Screens/ChartScreen";
import ExporterList from "./Screens/ExporterList";
import ChartScreen from "./Screens/ChartScreen";
import MyProfileScreen from "./Screens/MyProfileScreen";


export default function Dashboard(){
    return(
        <BrowserRouter>
            {/* <Topbar/> */}
            <div className="grid-container">
            <header>
            <Navbar/>
            </header>
            <main>   
            <div className="dashcontainer">
                <Sidebar/>
                <Switch>                    
                    <Route path="/orders" component={OrderScreen} />
                    <UserRoute path="/myProfile" component={MyProfileScreen}/>
                    <Route path="/reports" component={reportScreen} />
                    <Route path="/tanks" component={Calculator}/>
                    <Route path="/product/:id/edit" component={ProductEditScreen} ></Route>
                    <Route path="/farmerList" component={FarmerList} />
                    <Route path="/ExporterList" component={ExporterList} />
                    <Route path="/farmers/:id" component={Profile}/>
                    <Route path="/profile" component={Profile} />
                    <FarmerRoute path="/productlist/farmer" component={ProductDisplayScreen}></FarmerRoute>
                    <Route path='/calculator' component={Calculator} />
                    <Route path='/contact' component={Contact} />
                    <Route path="/load" component={Loading} />    
                    <Route path="/product/:id" component={ProductDetailScreen} />
                    <Route path="/register" component={RegisterScreen} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/load" component={Loading} />      
                    <Route path="/insertProduct" component={InsertProductScreen} />
                    <Route path="/product" component={ProductScreen} />
                    <Route path="/chart" component={ChartScreen}/>
                     {/* <Route path="/" component={Profile} />  */}
                    <Route path="/" component={HomeScreen} exact />  
                </Switch>
                </div>
                </main>
        <footer className="row center">
        
        </footer>
        </div>
        </BrowserRouter>
    )
}