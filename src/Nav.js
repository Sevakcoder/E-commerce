import './CSS/nav-top.css';
import './CSS/nav-middle.css';
import './CSS/nav-bottom.css';
import './CSS/bottom-bar.css';
import { Link, useNavigate } from "react-router-dom";
import cleanGoBackStorage from './OTHER/cleanGoBackStorage';
import beerType from './OBJECTS/beerType';
import getHomePage from './GETTERS/getHomePage';

const Nav = ({filterUpdate,filterButtonStyle,hideFilter,displayFilter,displayFilterStyle,hideFilterStyle}) => {
    
    const goHome = useNavigate();
    const pagePath = useNavigate();
    const reset = () => {
        cleanGoBackStorage();
        localStorage.removeItem('homeBeerType');
        pagePath('/')
    }
    const selectHome = () => {
        cleanGoBackStorage();
        goHome(getHomePage());
        filterUpdate();

    }

    return (
        <>
        <div id="nav-bar">
            <dir className="nav-middle">
                <div className="nav-middle-menu">
                    <div className="nav-logo" title='Reset' onClick={reset}><span>Beer<span>Shop</span></span></div>
            
                    <div className="nav-menu">
                        <ul>
                            <li onClick={() => {
                                selectHome();
                            }}>HOME</li>
                            <li id="li-shop"><a href="#">SHOP</a>
                                <div className="dropdown-menu">
                                    <ul>
                                        <li><Link to={`${beerType[0].path}/page=${beerType[0].currantPage}`}>Filtered Beer</Link></li>
                                        <li><Link to={`${beerType[1].path}/page=${beerType[1].currantPage}`}>Non Filtered Beer</Link></li>
                                        <li><Link to={`${beerType[2].path}/page=${beerType[2].currantPage}`}>Alcohol Beer</Link></li>
                                        <li><Link to={`${beerType[3].path}/page=${beerType[3].currantPage}`}>Non Alcohol Beer</Link></li>
                                      </ul>
                                </div>
                            </li>    
                            <li><a href="#">OUR BEER</a></li>
                            <li><a href="#">OUR STORY</a></li>
                            <li ><a href="#">CONTACT</a></li>
                        </ul>
        
                    </div>
                </div>
                <div id="nav-welcome">
                    <p id="welcome-dir">A very warm welcome to our</p>
                    <p id="location-dir">BEER SHOP</p>
                </div>

            </dir>
        </div>
        <div className="nav-bottom">
            <div id="item-bar">
                <ul>
                    <li><a href="">ALL</a></li>
                    <li><a href="">LATEST</a></li>
                    <li><a href="">FEATURED</a></li>
                    <li><a href="">SALE</a></li>
                </ul>
            </div>
            <div id="filter-bar" style={{display: filterButtonStyle}}>
                <p id="show-filter" style={{display:displayFilterStyle}}><span onClick={() => {
                    displayFilter();
                }}>FILTER OPTIONS<i className="fa fa-filter"></i></span></p>
                <p id="hide-filter" style={{display:hideFilterStyle}}><span onClick={() => {
                    hideFilter();
                }}>HIDE FILTER<i className="fa fa-close"></i></span></p>
            </div>
        </div>
        </>
    )
}
export default Nav;