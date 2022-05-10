import React from 'react'

// Styles
import './style.scss'

// Assets
import downIcon from 'assets/down-icon.svg'

// Components
import { Button } from '@mui/material'

function ContentHeader() {
    const filteredWord = 'iPhone 11'

    return (
        <div className='content-header'>
            <div className='filtered-content-wrapper'>
                <span className='content-title'>
                    iPhone iOS cep telefonu
                </span>
                <span className='filtered-product'>
                    Aranan Kelime:
                    <span className='filtered-product-text'>
                        {`${filteredWord}`}
                    </span>
                </span>
            </div>
            <Button
                className='order-button'
                variant="outlined"
                disableFocusRipple={true}
                disableRipple={true}
                size='large'
                endIcon={
                    <img
                        src={downIcon}
                        className='button-down-icon'
                        alt='button-down-icon'
                    />
                }
            >
                <span className='order-button-label'>Sıralama</span>
            </Button>
        </div>
    )
}

export default ContentHeader