import React from "react";
import ReactDOM from "react-dom/client";
/** 
        Header 
          - logo
          - Nav Items 
          - cart 
        Body 
                 - search bar 
                 - restauratList 
                         - image 
                         - name 
                         - rating 
                         - cusines 
                         
        Footer 
        - links 
        -copyrights */
            


const Title = () => (
    <a href="/">
     <img 
     className ="logo"
     alt="logo"
      src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fyt3.googleusercontent.com%2Fwaatq8ET0AwyT8RUEShakGFmBfjoqk5ru_VgzkYpsoP3feKUM6ct1TTtM9oELls59hZsYicyoQ%3Ds900-c-k-c0x00ffffff-no-rj&tbnid=h5aTJtOzeQC_AM&vet=12ahUKEwj2uIzJwdH-AhWR-XMBHZrqDQwQMygBegUIARDjAQ..i&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCL_j2oMqjoHq0FH6kV_QlfA&docid=5jM_lFH_qVYgDM&w=900&h=900&q=food%20house&ved=2ahUKEwj2uIzJwdH-AhWR-XMBHZrqDQwQMygBegUIARDjAQ"/>
     </a>    

);


const Header = () => {
    return ( 
        <div>
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>


                </ul>
            </div>
           
            
        </div>
    );
};




const restauratList =[
    {
        id: "1",
        name: " Grand Hotel",
        image: "g1arzw6qd7g9affkmgzk",
        cuisines: ["Chinese", "Biriyani", "Haleem"],
        rating: "4.0"
      },
      {
        id: "2",
        name: "Santosh Family Dabha",
        image: "kxvudr9703tklnjsolsv",
        cuisines: ["North India", "Chinese", "Tandoor"],
        rating: "4.0"
      },
      {
        id: "3",
        name: "Lucky restaurant ",
        image: "qems028i3da5rxf81rbp",
        cuisines: ["Biriyani", "North India", "Tandoor"],
        rating: "3.8"
      }

] 
const RestaurantCard = () => {
    return (
        <div className="card">
            <img src={burgerKing.image}/>
            <h2>{burgerKing.name} </h2>
            <h3>{burgerKing.cusines.join(" , ")}</h3>
            <h4>{burgerKing.rating} stars </h4>
        </div>
    );
};

const Body = () => {
    return(
        <div>

            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
        </div>
    )
}
const Footer = () => {
    return 
        <h4>Footer</h4>
    };

const AppLayout = () => {
    return (
        <>
         <Header/>
          <Body/>
          <Footer/>
        </>  
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);