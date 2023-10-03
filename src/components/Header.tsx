import cokevid from '../assets/cocacola vid.mp4'

export default function NavBar() {
    return (
        <div className="navba">
            <div className="overlay"></div>
            <video src={cokevid} autoPlay loop muted />
        </div>
    )
 
}