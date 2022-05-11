import { useState } from 'react'

// Style
import './style.scss'

// Assets
import iphoneYellow from 'assets/iphone-yellow.png'

// Components


function Product() {
    // Local State
    const [isHover, setIsHover] = useState(false)
    const [isInBasket, setIsInBasket] = useState(false)

    const handleAddToBasket = (event) => {
        console.log('Edanur')
        setIsInBasket(true)
    }

    return (
        <div className='product-with-container'>
            <div
                className='product-image-border'
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <img
                    src={iphoneYellow}
                    className='product'
                    alt='product'
                />
                {
                    isHover &&
                    <div
                        className={isInBasket ? 'add-to-basket-button-disabled' : 'add-to-basket-button'}
                        onClick={event => handleAddToBasket(event)}
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
                        Apple iPhone 11
                    </span>
                    <span className='brand-and-color-description'>
                        <div className='description-wrapper'>
                            <span className='bold-description'>Marka: </span>
                            <span className='name'>Apple</span>
                        </div>
                        <div className='description-wrapper'>
                            <span className='bold-description'>Renk: </span>
                            <span className='name'>Siyah</span>
                        </div>
                    </span>
                    <div className='price-and-discount-wrapper'>
                        <span className='price-after-discount'>90,85 TL</span>
                        <div className='price-with-discount'>
                            <span className='price'>124,00 TL</span>
                            <span className='discount-rate'>12%</span>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Product