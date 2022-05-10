import React from 'react'

// Styles
import './style.scss'

// Components
import Button from '@mui/material/Button'
import Badge from '@mui/material/Badge'

function Basket() {
    return (
        <Badge
            badgeContent={4}
            color='primary'
            className="basket-badge"
        >
            <Button
                className='basket-button'
                variant="outlined"
                disableFocusRipple={true}
                disableRipple={true}
                size='large'
            >
                <span className='basket-label'>Sepetim</span>
            </Button>
        </Badge>
    )
}

export default Basket