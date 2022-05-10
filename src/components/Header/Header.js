import React from 'react'

// Styles
import './style.scss'

// Assets
import headerLogo from 'assets/headerLogo.svg'

// Components
import Filter from 'components/Filter/Filter'
import Basket from 'components/Basket/Basket'

function Header() {
    return (
        <div className='header-container'>
            <div className='shadow'>
                <div className='header-content-wrapper'>
                    <img
                        src={headerLogo}
                        className='header-logo'
                        alt='header-logo'
                    />
                    <Filter />
                    <Basket />
                </div>
            </div>
        </div>
    )
}

export default Header