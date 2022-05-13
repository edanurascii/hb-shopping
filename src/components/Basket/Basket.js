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
    const [isHover, setIsHover] = useState(false)

    const contentRef = useRef(null)

    // listen to outside click for closing the dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (contentRef.current && !contentRef.current.contains(event.target)) {
                setIsHover(false)
            }
        }

        document.addEventListener('mouseleave', handleClickOutside)
        return () => {
            document.removeEventListener('mouseleave', handleClickOutside)
        };
    }, [contentRef])

    useEffect(() => {
        if (basketItems.length > 1) {
            let _basketItems = Object.assign([], basketItems)

            _basketItems.sort((a, b) => {
                if (a?.addedDate && b?.addedDate) {
                    if (a.addedDate < b.addedDate) {
                        return -1
                    }
                    if (a.addedDate > b.addedDate) {
                        return 1
                    }
                }
                return 0
            })
        }
    }, [basketItems])

    return (
        <div className='button-and-badge-wrapper'>
            <div
                className={productsInBasket > 0 && isHover ? 'basket-button-active' : 'basket-button'}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
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
                productsInBasket > 0 && isHover &&
                <div
                    ref={contentRef}
                    className='basket-content'
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
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