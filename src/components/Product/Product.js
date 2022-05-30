import { useState, useEffect } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import {
    addToBasket,
    productCountInBasket,
    getProductsInBasket
} from './productSlice'

// Style
import './style.scss'

function Product({ data }) {
    // Global State
    const basketItems = useSelector(state => state.product.basketItems)

    // Props
    const {
        id,
        title,
        brand,
        color,
        price,
        afterDiscountPrice,
        discount,
        img
    } = data

    // Local States
    const [isHover, setIsHover] = useState(false)
    const [isInBasket, setIsInBasket] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsInBasket())
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (basketItems && basketItems.length > 0) {
            basketItems?.filter(value => value.id !== id && setIsInBasket(false))
            basketItems?.map(product => product.id === id && setIsInBasket(true))
        } else {
            setIsInBasket(false)
        }

        dispatch(productCountInBasket())
        // eslint-disable-next-line
    }, [basketItems])

    const handleAddToBasket = (event, data) => {
        setIsInBasket(true)
        dispatch(addToBasket(data))
        dispatch(productCountInBasket())
    }

    return (
        <div className='product-with-container'>
            <div
                className='product-image-border'
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <img
                    src={img}
                    className='product'
                    alt='product'
                />
                {
                    isHover &&
                    <div
                        className={isInBasket ? 'add-to-basket-button-disabled' : 'add-to-basket-button'}
                        onClick={event => !isInBasket && handleAddToBasket(event, data)}
                    >
                        <span className='add-to-basket-button-label'>
                            {isInBasket ? 'Bu ürünü sepete ekleyemezsiniz.' : 'Sepete Ekle'}
                        </span>
                    </div>
                }
            </div>
            {
                !isHover &&
                <div className='product-description-wrapper'>
                    <span className='product-description'>
                        {title}
                    </span>
                    <span className='brand-and-color-description'>
                        <div className='description-wrapper'>
                            <span className='bold-description'>Marka: </span>
                            <span className='name'>{brand}</span>
                        </div>
                        <div className='description-wrapper'>
                            <span className='bold-description'>Renk: </span>
                            <span className='name'>{color}</span>
                        </div>
                    </span>
                    <div className='price-and-discount-wrapper'>
                        <span className='price-after-discount'>{afterDiscountPrice}</span>
                        <div className='price-with-discount'>
                            <span className='price'>{price}</span>
                            <span className='discount-rate'>{discount}</span>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Product