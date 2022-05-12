// Redux
import { useDispatch } from 'react-redux'
import {
    removeProduct,
    productCountInBasket
} from 'components/Product/productSlice'

// Styles
import './style.scss'

function BasketProduct({ product }) {
    const {
        title,
        img
    } = product

    const dispatch = useDispatch()

    const handleRemoveProduct = (event, product) => {
        dispatch(removeProduct(product))
        dispatch(productCountInBasket())
    }

    return (
        <div className='product-in-basket'>
            <div className='image-border'>
                <img
                    src={img}
                    className='product-image'
                    alt='product'
                />
            </div>
            <div className='title-button-wrapper'>
                <div className='product-title'>
                    {title}
                </div>
                <div
                    className='remove-item-button'
                    onClick={event => handleRemoveProduct(event, product)}
                >
                    <span className='remove-button-label'>Kaldır</span>
                </div>
            </div>
        </div>
    )
}

export default BasketProduct