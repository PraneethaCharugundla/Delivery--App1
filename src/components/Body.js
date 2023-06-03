import { restauratList } from "../../constants";
import RestaurantCard from "./RestraurantCard";

const Body = () => {
    return(
     <>  <div className="search-container">
<input type="text"
 className="search-input" 
 placeholder="Search"
value={searchText}
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