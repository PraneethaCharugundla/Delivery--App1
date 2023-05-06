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
        <div className="header">
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
export default Header;
