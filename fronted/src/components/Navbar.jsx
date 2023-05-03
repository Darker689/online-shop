import { Link } from 'react-router-dom'

// import images
import logo from '../assets/logo.png'
// imgport icons
import {HiOutlineBars3, HiOutlineHeart} from 'react-icons/hi2'
import {BsCart4} from 'react-icons/bs'
import {GoSearch} from 'react-icons/go'

const Navbar = () => {
    return (
        <>
            <nav>
                <header className='container'>
                    <div className="nav_left">
                        <Link to='' className="logo">
                            <img src={logo} alt="Next-store" />
                        </Link>
                        <div className="nav_catalog_btn">
                            <span><HiOutlineBars3/></span>
                            <b>Catalog</b>
                        </div>
                    </div>
                    <div className="nav_middle">
                        <input type="text" className='nav_search' placeholder='Maxsulotlarni izlash' />
                        <div className="nav_search_btn">
                            <GoSearch/>
                        </div>
                    </div>
                    <div className="nav_right">
                        <Link to='/' className="nav_btn">
                            <HiOutlineHeart/>
                        </Link>
                        <Link to='/' className="nav_btn">
                            <BsCart4/>
                        </Link>
                        <Link to='/' className="nav_login">
                            Kirish
                        </Link>
                    </div>
                </header>
            </nav>
            <div className="navbar_free"></div>
        </>
    )
}

export default Navbar