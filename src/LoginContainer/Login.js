import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLogin } from '../redux/Actions/actions';
import {
    useHistory,
  } from "react-router-dom";
import './Styles/loginPageStyles.css';


function LoginPage() {
    const init = {
        userName:'',password:''
    }
    const [userData, setUserData] = useState(init);
    const login = useSelector((state) => state.addData.loginState);
    const dispatch = useDispatch();
    const history = useHistory();
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
      
        fetchData().then((json) =>
        {
            if(json.records.some((user) => {
                return user.fields.username === userData.userName && user.fields.password === userData.password;
            })) {
                dispatch(setLogin());
            }
        }        
        );
      
    }
    useEffect(() => {
        if (login) {
            history.push('/HomeScreenContainer')
        } else {
            history.push('/')
        }
    }, [history, login]);

    return (
        <div className='login_container' >
            <div className='login_box'>
     <div>  Login</div>
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
        </div>
       
    </div>)
}
export default LoginPage;