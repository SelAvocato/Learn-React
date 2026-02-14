import { NavLink, useNavigate } from 'react-router'
import { useState } from 'react'
import WhiteLogo from '../assets/images/logo-white.png'
import MobileLogo from '../assets/images/mobile-logo-white.png'
import CartIcon from '../assets/images/icons/cart-icon.png'
import SearchIcon from '../assets/images/icons/search-icon.png'
import './Header.css';

export function Header({cart, searchText}) {
    const navigate = useNavigate()

    let totalQuantity = 0;

    cart.forEach(cartItem => {
        totalQuantity += cartItem.quantity
    })

    const [search, setSearch] = useState(searchText)
    const productName = (event) => {
        setSearch(event.target.value)
    }

    const searchProduct = (event) => {
        if(event.key === "Enter") {    
            return navigate(`/?search=${search}`)
        } else if (event.key === "Escape"){
            return navigate(`/?search=${search}`)
        }
    }

    const resetSearch = () => {
        setSearch("")
    }
    
    const searchBtn = () => {
        navigate(`/?search=${search}`)
    }

    return (
        <>
            <div className="header">
                <div className="left-section">
                    <NavLink to="/" className="header-link" onClick={resetSearch}>
                        <img className="logo"
                            src={WhiteLogo} />
                        <img className="mobile-logo"
                            src={MobileLogo} />
                    </NavLink>
                </div>

                <div className="middle-section">
                    <input className="search-bar" type="text" placeholder="Search" onChange={productName} value={search} onKeyDown={searchProduct}/>

                    <button className="search-button" onClick={searchBtn} >
                        <img className="search-icon" src={SearchIcon} />
                    </button>
                </div>

                <div className="right-section">
                    <NavLink className="orders-link header-link" to="/orders">

                        <span className="orders-text">Orders</span>
                    </NavLink>

                    <NavLink className="cart-link header-link" to="/checkout">
                        <img className="cart-icon" src={CartIcon} />
                        <div className="cart-quantity">{totalQuantity}</div>
                        <div className="cart-text">Cart</div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}
