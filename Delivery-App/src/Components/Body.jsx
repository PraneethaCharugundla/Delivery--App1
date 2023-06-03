import { restauratList } from "../Constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return(
     <>  <div className="search-container">
<input type="text"
 className="search-input" 
 placeholder="Search"
value={" "}
onChange={() => onChangeInput}
/>
<button className="search-btn">Search</button>
        </div>


        <div className="restaurant-list">

            {

                restauratList.map((restaurant) => {
                    return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                })
             }
        </div>
        </> 
    )
}

export default Body;