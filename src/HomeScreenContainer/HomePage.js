import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {setData} from '../redux/Actions/actions'
import EmptyBookmark from '../Images/EmptyBookmark.png'
import BookMarked from '../Images/BookMarked.png'
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
        console.log(userData);

      
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

        // console.log(listItems)

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
            console.log(matches)
            setText(text)
        }

        const handleSuggestion = (sugg) => {
            setText(sugg.fields.Name);
            let selectedRest = { ...sugg, bookMarked: false };
            setRest(selectedRest);
            setSuggestion([]);
            console.log(selectedRest)
        }
        const HandleAddRest = () => {
            dispatch(setData(rest));
            setRest({});
            setText('');

        }
        
        const HandleBookMark = (rest) => {
            console.log(rest)
        }
        return <div>
            <label>
            Search
                <input type='text' value={text} onChange={(e) => { onChangeHandler(e.target.value) }}></input>
              
            </label>  <button onClick={HandleAddRest}>ADD</button>
            {suggestion && suggestion.map((sug,i) => {
           return  <div key={i} className='suggestion' onClick={()=>{handleSuggestion(sug)}}>{ sug.fields.Name}</div>
        })}
        
            {!!userData.length &&
                
                userData.map((rest) => {
                   return   <div key={rest.id} className='rest_card'>
                       <div className='bookmark_button' onClick={() => { HandleBookMark(rest) }}>  <button>
                  {rest.bookMarked?  <img src={BookMarked} alt='bookmarked' ></img>:  <img src={EmptyBookmark} alt='empty' ></img>}
                   </button></div>
                   <div className='rest_name_remove_container'>
                           <div className='rest_name'> { rest.fields.Name}</div>
                       <button className='remove_button'>Remove</button>
                   </div>
   
               </div>
               })
          }
          
    </div>
}
export default HomePage;