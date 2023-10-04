import cokevid from '../assets/cocacola vid.mp4'
import img1 from "../assets/logo.svg"
import Mvg from './Mvg'


export default function NavBar() {
    return (
        <div>
             <div className="mainnav">
                <img className='Logo' src={img1} />
                <ul>
                    <li><a href="">Brands</a></li>
                    <li><a href="">Discover</a></li>
                    <li><a href="">Impact</a></li>
                    <li><a href="">Shop</a></li>
                </ul>
                <Mvg />
            </div>
            <div className="navba">
                <div className="overlay"></div>
            <video src={cokevid} autoPlay loop muted />
            </div>
        </div>
    )
 
}