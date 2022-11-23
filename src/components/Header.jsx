import Banner from "./Banner"
import Navbar from "./Navbar"
const Header = ({ setNavMobile }) => {
    return (
        <div className="relative">

            <Navbar setNavMobile={setNavMobile} />
            <Banner />
        </div>
    )
}

export default Header