import { useState } from 'react'

// Styles
import './style.scss'

function LeftFilterField() {
    const [selectedIndex, setSelectedIndex] = useState(1)

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index)
    }

    return (
        <div className='left-filter-field-container'>
            <div className='color-filter'>
                <span className='filter-title'>Renk</span>
                <div
                    className='list-items'
                    onClick={event => handleListItemClick(event, 1)}
                >
                    Kırmızı
                </div>
            </div>
            <div className='order-filter'>
                <span className='filter-title'>Sıralama</span>
                <div
                    className='list-items'
                    onClick={event => handleListItemClick(event, 1)}
                >
                    En Düşük Fiyat
                </div>
            </div>
            <div className='brand-filter'>
                <span className='filter-title'>Marka</span>
                <div
                    className='list-items'
                    onClick={event => handleListItemClick(event, 1)}
                >
                    Apple
                </div>
            </div>
        </div>
    )
}

export default LeftFilterField