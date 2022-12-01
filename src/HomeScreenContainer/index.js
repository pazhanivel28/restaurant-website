import React,{useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import {useHistory} from 'react-router-dom'
import HomePage from './HomePage'
import BookmarkPage from './BookmarkPage';
import { useDispatch,useSelector } from "react-redux";
import './Styles/HomeScreenContainer.css';
import { setLogout } from "../redux/Actions/actions";
 

function HomeScreenContainer() {
   const history = useHistory();
   const login = useSelector((state) => state.addData.loginState);
   const dispatch = useDispatch();
   const HandleLogout = () => {
      dispatch(setLogout());
   }
   useEffect(() => {
      if (login) {
          history.push('/HomeScreenContainer')
      } else {
          history.push('/')
      }
  }, [history, login]);

    return (<div>
           <div >
        <div className="rest_name">Restaruants</div>
       </div>
       <div className="logout_container">
       <button onClick={HandleLogout}>Logout</button>
       </div>
   
        <div className="sidebar_and_content">
        <Router > 
   
   <div className="sidebarContainer">
<ul className="sideBarMenu">
       Menu
<li  className="sideBarList">
 <NavLink to="/HomeScreenContainer">Home Page</NavLink>
</li>
<li  className="sideBarList">
 <NavLink to="/Bookmarks">Bookmarked Restaruants</NavLink>
</li>
</ul>
   </div>

   <div className="rest_content">
<Switch>
<Route exact path="/HomeScreenContainer" component={HomePage} />
<Route path="/Bookmarks" component={BookmarkPage} />
       </Switch>
   </div>

</Router>
        </div>
   </div>) 
}
export default HomeScreenContainer;