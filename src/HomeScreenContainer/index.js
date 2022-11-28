import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import HomePage from './HomePage'
import BookmarkPage from './BookmarkPage';
import './Styles/HomeScreenContainer.css'
 

function HomeScreenContainer() {
    return (<div>
           <div >
        <h1>Restaruants</h1>
        </div>
        <div className="sidebar_and_content">
        <Router > 
   
   <div className="sidebarContainer">
<ul className="sideBarMenu">
       Menu
<li  className="sideBarList">
 <NavLink to="/">Home Page</NavLink>
</li>
<li  className="sideBarList">
 <NavLink to="/Bookmarks">Bookmarked Restaruants</NavLink>
</li>
</ul>
   </div>

   <div>
<Switch>
<Route exact path="/" component={HomePage} />
<Route path="/Bookmarks" component={BookmarkPage} />
       </Switch>
   </div>

</Router>
        </div>
    
   </div>) 
}
export default HomeScreenContainer;