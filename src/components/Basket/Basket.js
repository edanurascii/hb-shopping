import React from 'react'

// Styles
import './style.scss'

function Basket() {
    const itemsInBasket = 5

    const handleShowBasket = event => {
        console.log('Show products in basket')
    }

    return (
        <div className='button-and-badge-wrapper'>
            <div
                className='basket-button'
                onClick={event => handleShowBasket(event)}
            >
                <span className='basket-label'>Sepetim</span>
            </div>
            {
                itemsInBasket > 0 &&
                <div className='basket-badge'>
                    <span className='basket-badge-number'>
                        {itemsInBasket}
                    </span>
                </div>
            }
        </div>
    )
}

export default Basket