import { useEffect } from 'react'

// Redux
import { useDispatch } from 'react-redux'
import { getProductsInBasket } from '../Product/productSlice'

// Styles
import './style.scss'

// Assets
import headerLogo from 'assets/headerLogo.svg'

// Components
import InputFilter from 'components/InputFilter/InputFilter'
import Basket from 'components/Basket/Basket'

function Header() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsInBasket())
        // eslint-disable-next-line
    }, [])

    return (
        <div className='header-container'>
            <div className='shadow'>
                <div className='header-content-wrapper'>
                    <img
                        src={headerLogo}
                        className='header-logo'
                        alt='header-logo'
                    />
                    <InputFilter />
                    <Basket />
                </div>
            </div>
        </div>
    )
}

export default Header