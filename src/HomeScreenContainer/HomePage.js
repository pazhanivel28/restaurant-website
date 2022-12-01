import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {setData,updateBookMark,deleteRestaurant} from '../redux/Actions/actions'
import EmptyBookmark from '../Images/EmptyBookmark.png'
import './Styles/HomePageStyles.css'
    function HomePage()
    {  
        const [listItems, setListItems] = useState([]);
        const [text, setText] = useState(' ');
        const [suggestion, setSuggestion] = useState([]);
        const [rest, setRest] = useState({});
        // const [listRestaruants, setListRestaruants] = useState([]);
        const dispatch = useDispatch();
        const userData = useSelector((state) => state.addData.data);
      
        const fetchData = async () => {
          const response = await fetch(
            "https://api.airtable.com/v0/appjWdL7YgpxIxCKA/restaurants?view=Grid%20view", {
              headers: { Authorization:  'Bearer keyfXgn8PL6pB3x32' }
          }
          );
          return response.json();
        };

        useEffect(() => {
            fetchData().then((json) => setListItems(json));
        }, []);

        const onChangeHandler = (text) => {
            let matches = [];
            if (text.length > 0)
            {
                matches = listItems.records.filter(rest => {
                    const regex = new RegExp(`${text}`, 'gi');
                    return rest.fields.Name.match(regex);
                })
            }
            setSuggestion(matches);
            setText(text)
        }

        const handleSuggestion = (sugg) => {
            setText(sugg.fields.Name);
            setRest(sugg);
            setSuggestion([]);
         
        }
        const HandleAddRest = () => {
            dispatch(setData(rest));
            setRest({});
            setText('');  

        }
        
        const HandleBookMark = (rest) => {
            dispatch(updateBookMark(rest));
            
        }

        const RemoveRest = (rest) => {
            dispatch(deleteRestaurant(rest))
        }
        return <div>
            <label>
            Search
                <input type='text' value={text} onChange={(e) => { onChangeHandler(e.target.value) }}></input>
              
            </label>  <button onClick={HandleAddRest}>ADD</button>
            <div className='suggestion_Container'>
            {suggestion && suggestion.map((sug,i) => {
                return  <div key={i} className='suggestion' onClick={()=>{handleSuggestion(sug)}}>{ sug.fields.Name}</div>
        })}
            </div>
            <div className='rest_card_container'>
            {!!userData.length &&
                
                userData.map((rest) => {
                   return   <div key={rest.id} className='rest_card'>
                       <div className='bookmark_button' onClick={() => { HandleBookMark(rest) }}>  <button>
             <img src={EmptyBookmark} alt='empty' ></img> Bookmark
                   </button></div>
                   <div className='rest_name_remove_container'>
                           <div className='rest_name'><h4> { rest.fields.Name}</h4></div>
                       <button className='remove_button' onClick={()=>{RemoveRest(rest)}}>Remove</button>
                   </div>
   
               </div>
               })
          }
            </div>
              </div>
}
export default HomePage;