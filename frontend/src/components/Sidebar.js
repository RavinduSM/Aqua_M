import React from "react";
import {Link} from "react-router-dom";
import './sidebar.css'


export default function Sidebar(){

return(
    <>
    <div className="sidebar">
       <div className="sidebarWrapper">
           <div className="sidebarMenu">
               <h3 className="sidebarTitle">Dashboard</h3>
               <ul className="sidebarList">
                    <Link to="/profile" className="link">
                        <li className="sidebarListItem active">
                    
                        Profile
                        </li>
                    </Link>
                    <Link to="/productlist/farmer" className="link">
                        <li className="sidebarListItem active">
                    
                        Stocks
                        </li>
                    </Link>
                    <Link to="/orders" className="link">
                        <li className="sidebarListItem active">
                    
                        Orders
                        </li>
                    </Link>
                    <Link to="/reports" className="link">
                        <li className="sidebarListItem active">
                    
                        Reports
                        </li>
                    </Link>
                    <Link to="/farmerList" className="link">
                        <li className="sidebarListItem active">
                    
                        Farmers
                        </li>
                    </Link>
                    <Link to="/tanks" className="link">
                        <li className="sidebarListItem active">
                    
                        Bioload Calculator
                        </li>
                    </Link>
               </ul>
           </div>
       </div>
    </div>
    </>
 );
}

