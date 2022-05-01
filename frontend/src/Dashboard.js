import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Calculator from "./Screens/Calculator";
import Profile from "./Screens/Profile";
import "../src/Dashboard.css";
import OrderScreen from "./Screens/OrderListScreen";
import reportScreen from "./Screens/reportScreen";
import FarmerRoute from "./components/FarmerRoute";
import ProductDisplayScreen from "./Screens/ProductDisplayScreen";
import ProductEditScreen from "./Screens/ProductEditScreen";
import FarmerList from "./Screens/FarmerList";
import MyProfileScreen from "./Screens/MyProfileScreen";
import UserRoute from "./components/UserRoute";

export default function Dashboard(){
    return(
        <BrowserRouter>
            {/* <Topbar/> */}
            <div className="dashcontainer">
                <Sidebar/>
                <Switch>                    
                    <Route path="/orders" component={OrderScreen} />
                    <UserRoute path="/profile" component={MyProfileScreen}/>
                    <Route path="/reports" component={reportScreen} />
                    <Route path="/tanks" component={Calculator}/>
                    <Route path="/product/:id/edit" component={ProductEditScreen} exact ></Route>
                    <Route path="/farmerList" component={FarmerList} />
                    <Route path="/farmers/:id" component={Profile}/>
                    <Route path="/profile" component={Profile} />
                    <FarmerRoute path="/productlist/farmer" component={ProductDisplayScreen}></FarmerRoute>
                    <Route path="/" component={Profile} exact/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}