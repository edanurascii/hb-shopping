import React from 'react'

// Styles
import './style.scss'

// Assets
import downIcon from 'assets/down-icon.svg'

function ContentHeader() {
    const filteredWord = 'iPhone 11'

    const handleOrderButton = (event) => {
        console.log('Show order options')
    }

    return (
        <div className='content-header'>
            <div className='filtered-content-wrapper'>
                <span className='content-title'>
                    iPhone iOS cep telefonu
                </span>
                <span className='filtered-product'>
                    <span className='searched-item-label'>
                        Aranan Kelime:
                    </span>
                    <span className='filtered-product-text'>
                        {`${filteredWord}`}
                    </span>
                </span>
            </div>
            <div
                className='order-button'
                onClick={event => handleOrderButton(event)}
            >
                <span className='order-button-label'>
                    Sıralama
                    <img
                        src={downIcon}
                        className='button-down-icon'
                        alt='button-down-icon'
                    />
                </span>
            </div>
        </div>
    )
}

export default ContentHeader