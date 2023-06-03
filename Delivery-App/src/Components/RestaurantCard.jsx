import { IMG_CDN_URL , restauratList} from "../Constants";

const RestaurantCard = ({
    name, cuisines , cloudinaryImageId , lastMileTravel}) => {

    return (
        <div className="card">
            <img src={ IMG_CDN_URL + cloudinaryImageId 
        } 
        />
            <h2>{name} </h2>
            <h3>{cuisines.join(" , ")}</h3>
            <h4>{lastMileTravel} minutes  </h4>
        </div>
    );
};

export default RestaurantCard;