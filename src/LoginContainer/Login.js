import React,{useState} from 'react'
import './Styles/loginPageStyles.css'
function LoginPage() {
    const init = {
        userName:'',password:''
    }
    const [userData, setUserData] = useState(init);

   
        const [listItems, setListItems] = useState([]);
      
        const fetchData = async () => {
          const response = await fetch(
              "https://api.airtable.com/v0/appjWdL7YgpxIxCKA/credenitals?maxRecords=3&view=Grid%20view", {
              headers: { Authorization:  'Bearer keyfXgn8PL6pB3x32' }
          }
          );
          return response.json();
        };

    const handleInput = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    
    }
    const handleLogin = () => {
        fetchData().then((json) => setListItems(json));
    }
    
    return (
    <div className='login_container' > Login
        <div className="login_page">
                <label className='label_text'>
                    Username :
                <input type='text'  name='userName' value={userData.userName} onChange={handleInput}/>
   
                </label>

                <label className='label_text'>
                    Password :
                    <input type='password' name='password' value={userData.password } onChange={handleInput}/>
         
                </label>
                <div className='button_container'>
                <button className='login_button' onClick={handleLogin}>Login</button>
       </div>
        </div>
    </div>)
}
export default LoginPage;