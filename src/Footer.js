import './CSS/nav-top.css';
import './CSS/nav-middle.css';
import './CSS/nav-bottom.css';
import './CSS/bottom-bar.css';

const Footer = ({reset,showCartItems}) => {
    return (
        <>
            <div id="bottom-bar">
        <div id="bottom-links">
            <ul>
                <li className="bottom-links-header"><span>USEFUL</span></li>
                <li className="bottom-links-row"><span >Home</span></li>
                <li className="bottom-links-row"><span >Shop</span></li>
                <li className="bottom-links-row"><span>Our story</span></li>
                <li className="bottom-links-row"><span>Blog</span></li>
                <li className="bottom-links-row"><span>Login</span></li>
            </ul>
            <ul>
                <li className="bottom-links-header"><span>HELP</span></li>
                <li className="bottom-links-row"><span>Customer service</span></li>
                <li className="bottom-links-row"><span>Find our beer</span></li>
                <li className="bottom-links-row"><span>Recent orders</span></li>
                <li className="bottom-links-row"><span>Contact</span></li>
                <li className="bottom-links-row"><span>Terms & privacy</span></li>
            </ul>
            <ul>
                <li className="bottom-links-header"><span>SHOP</span></li>
                <li className="bottom-links-row"><span>Pale ale</span></li>
                <li className="bottom-links-row"><span>Golden ale</span></li>
                <li className="bottom-links-row"><span>Dark story</span></li>
                <li className="bottom-links-row"><span>IPA</span></li>
            </ul>
            <ul>
                <li className="bottom-links-header"><span>OUR INFORMATION</span></li>
                <li className="bottom-links-info"><span><i className="fa fa-map-marker"></i>94 River Road, London, United Kingdom</span></li>
                <li className="bottom-links-info"><span><i className="fa fa-envelope"></i>sales@craftbeer-nation.com</span></li>
                <li className="bottom-links-info"><span><i className="fa fa-phone"></i>(0)203 123 4567</span></li>
            </ul>
            <ul>
                <li className="bottom-links-header-social"><span></span></li>
                <li className="bottom-links-info"><span><i className='fa fa-instagram'></i></span></li>
                <li className="bottom-links-info"><span><i className="fa fa-facebook-square"></i></span></li>
                <li className="bottom-links-info"><span><i className="fa fa-twitter-square"></i></span></li>
            </ul>

        </div>
        <hr></hr>
        <p><span id="established-year">2022 @Craft Beer Nation /</span><span id="developer-name"> Web design by Klever media</span> </p>
            </div>
        </>
    )
}
export default Footer;
