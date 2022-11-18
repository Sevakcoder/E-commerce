import './CSS/nav-top.css';
import './CSS/nav-middle.css';
import './CSS/nav-bottom.css';
import './CSS/bottom-bar.css';
import { Link } from 'react-router-dom';
// import { Link } from "react-router-dom";

const Header = ({cartSummary}) => {
    return (
        <>
        <div id="nav-bar">
            <div className="nav-top">
                <div className="nav-top-social">
                        <i className='fa fa-instagram'></i>
                        <i className="fa fa-facebook-square"></i>
                        <i className="fa fa-twitter-square"></i>
                </div>
                <div className="nav-top-empty"></div>
        
                <div className="nav-top-search">
                    <label >
                        <i className="fa fa-map-marker"></i>
                        <span>Find our beer</span> 
                    </label>
                </div>
                <div className="nav-top-cart">
                        <Link to={'/cart'} >                                
                        <label 
                        // onClick={() => {
                        //     goToCart()
                        // }}
                        > 
                            <i className="fa fa-shopping-cart"></i>
                            <span id="cart-icon-label" ><span id="cart-icon-count">{cartSummary}</span> item</span>
                        </label>
                        </Link>
                </div>
            </div>
        </div>
        </>

    )
}

export default Header;
