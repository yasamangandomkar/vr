import logo from '../assets/image/logo.svg'
import { HiMenu } from 'react-icons/hi';
import Nav from './Nav';
const Navbar = ({ setNavMobile }) => {
    return (
        <div data-aos='fade-down' data-aos-duration="2000" data-aos-delay="900" className='flex items-center justify-between h-20 '>
            <div>
                <img src={logo} alt="" />
            </div>
            <HiMenu
                onClick={() => setNavMobile(true)}
                className='lg:hidden text-3xl text-white cursor-pointer'
            />
            <Nav />
        </div>
    )
}

export default Navbar