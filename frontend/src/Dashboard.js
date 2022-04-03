import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Calculator from "./Screens/Calculator";
import Profile from "./Screens/Profile";
import "../src/Dashboard.css";
import OrderScreen from "./Screens/OrderScreen";
import reportScreen from "./Screens/reportScreen";

export default function Dashboard(){
    return(
        <BrowserRouter>
            <Topbar/>
            <div className="dashcontainer">
                <Sidebar/>
                <Switch>                    
                    <Route path="/orders" component={OrderScreen} />
                    <Route path="/reports" component={reportScreen} />
                    <Route path="/tanks" component={Calculator}/>
                    <Route path="/" component={Profile} exact/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}