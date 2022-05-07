import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { signout } from "../actions/userActions";
import './sidebar.css'


export default function Sidebar(){
  const userSignin = useSelector((state) => state.userSignin);
  const {userData} = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () =>{
    dispatch(signout());
  }

return(
    <>
    <div className="sidebar">
       <div className="sidebarWrapper">
           <div className="sidebarMenu">
              <ul className="sidebarList">
              {userData? (
                  <div>
                    <h4>{userData.name}    </h4>             
                      <Link to="'#signout" onClick={signoutHandler}>
                        <button type="button" class="btn btn-danger"> Signout</button>
                      </Link>    
                                      
                      <Link to='/myProfile'>
                          <li className="sidebarListItem active">  Profile </li>
                      </Link>   

                      <Link to="/productlist/farmer" className="link">
                        <li className="sidebarListItem active">  StockS </li>
                     </Link>    

                       <Link to="/orders" className="link">
                        <li className="sidebarListItem active"> Orders </li>    
                    </Link>    
                  </div>                 
                ) : (
                  <Link  to ='/signin'  className='link'> 
                    <button type="button" class="btn btn-success"> Signin </button>     
                  </Link>
                )}              
                    <Link to="/farmerList" className="link">
                        <li className="sidebarListItem active"> Farmers  </li>
                    
                    </Link>

                    <Link to="/ExporterList" className="link">
                        <li className="sidebarListItem active">  Exporters  </li>     
                    </Link>
                    <Link to="/tanks" className="link">
                        <li className="sidebarListItem active"> Bioload Calculator </li>
                    </Link>
                    <Link to="/chart" className="link">
                        <li className="sidebarListItem active"> Future Predictions </li>
                    </Link>
               </ul>
           </div>
       </div>
    </div>
    </>
 );
}

