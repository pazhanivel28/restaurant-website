import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { deleteRestaurantBookmark } from "../redux/Actions/actions";

function BookmarkPage()
{
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.addData.bookmarkData);
    const RemoveRest = (rest) => {
        dispatch(deleteRestaurantBookmark(rest))

    }
    
    return (
        <div>
           Bookmarked Restaruants
        
            <div className="rest_card_container">
            {!!userData.length &&
                userData.map((rest) => {
                    return <div key={rest.id} className='rest_card'>
                        <div className='rest_name_remove_container'>
                        <div className='rest_name_delete'><div className='rest_name'><h4> {rest.fields.Name}</h4></div>   <button className='remove_button' onClick={()=>{RemoveRest(rest)}}>Remove</button></div>
                            <embed width="600" height="450" src={`https://datastudio.google.com/embed/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params={"ds2.name2":"${rest.fields.Name}"}`} ></embed>
                         
                        </div>
   
                    </div>
                })
            }
            </div>
            <div>
          
            </div>
        </div>);
}
export default BookmarkPage;