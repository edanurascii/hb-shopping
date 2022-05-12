import { useState, useEffect, useRef } from 'react'

// Redux
import { useSelector } from 'react-redux'

// Styles
import './style.scss'

// Components
import BasketProduct from 'components/BasketProduct/BasketProduct'

function Basket() {
    // Global State
    const productsInBasket = useSelector(state => state.product.productsInBasket)
    const basketItems = useSelector(state => state.product.basketItems)

    // Local State
    const [isBasketVisible, setIsBasketVisible] = useState(false)

    const wrapperRef = useRef(null)

    // listen to outside click for closing the dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsBasketVisible(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        };
    }, [wrapperRef])

    const handleShowBasket = event => {
        setIsBasketVisible(!isBasketVisible)
    }

    return (
        <div className='button-and-badge-wrapper' ref={wrapperRef}>
            <div
                className={productsInBasket > 0 && isBasketVisible ? 'basket-button-active' : 'basket-button'}
                onClick={event => handleShowBasket(event)}
            >
                <span className='basket-label'>Sepetim</span>
            </div>
            {
                productsInBasket > 0 &&
                <div className='basket-badge'>
                    <span className='basket-badge-number'>
                        {productsInBasket}
                    </span>
                </div>
            }
            {
                productsInBasket > 0 && isBasketVisible &&
                <div className='basket-content'>
                    {
                        basketItems.map((product, idx) => (
                            <BasketProduct
                                key={idx}
                                product={product}
                            />
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default Basket