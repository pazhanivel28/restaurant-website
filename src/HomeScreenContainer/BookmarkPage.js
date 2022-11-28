import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { deleteRestaurant } from "../redux/Actions/actions";

function BookmarkPage()
{
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.addData.bookmarkData);
    const RemoveRest = (rest) => {
        dispatch(deleteRestaurant(rest))
    }
    return (
        <div>
            {!!userData.length &&
                userData.map((rest) => {
                    return <div key={rest.id} className='rest_card'>
                        <div className='rest_name_remove_container'>
                            <div className='rest_name'><h4> {rest.fields.Name}</h4></div>
                            <button className='remove_button' onClick={()=>{RemoveRest(rest)}}>Remove</button>
                        </div>
   
                    </div>
                })
            }
        </div>);
}
export default BookmarkPage;