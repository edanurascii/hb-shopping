import { useState } from 'react'

// Styles
import './style.scss'

// Helpers
import { getProductDetails } from 'helpers/getProductDetails'

function LeftFilterField() {
    // Local State
    const [selectedIndex, setSelectedIndex] = useState(1)

    const productData = JSON.parse(localStorage.getItem('products'))
    const products = Object.assign([], productData?.data)

    const colors = getProductDetails.colorFilterOptions(products)
    const orders = getProductDetails.orderFilterOptions(products)
    const brands = getProductDetails.brandFilterOptions(products)

    const colorOptions = colors[0]
    const brandOptions = brands[0]

    const colorRepeated = colors[1]
    const brandRepeated = brands[1]

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index)
    }

    return (
        <div className='left-filter-field-container'>
            <div className='color-filter'>
                <span className='filter-title'>Renk</span>
                <div className='list-items-wrapper'>
                    {
                        colorOptions.length > 0 &&
                        colorOptions.map((color, idx) => (
                            <div
                                key={idx}
                                className='list-items'
                                onClick={event => handleListItemClick(event, 1)}
                            >
                                {`${color} (${colorRepeated[color]})`}
                            </div>

                        ))
                    }
                </div>
            </div>
            <div className='order-filter'>
                <span className='filter-title'>Sıralama</span>
                <div className='list-items-wrapper'>
                    {
                        orders && orders.length > 0 &&
                        orders.map((order, idx) => (
                            <div
                                key={idx}
                                className='list-items'
                                onClick={event => handleListItemClick(event, 1)}
                            >
                                {order}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='brand-filter'>
                <span className='filter-title'>Marka</span>
                <div className='list-items-wrapper'>
                    {
                        brandOptions.length > 0 &&
                        brands[0].map((brand, idx) => (
                            <div
                                key={idx}
                                className='list-items'
                                onClick={event => handleListItemClick(event, 1)}
                            >
                                {`${brand} (${brandRepeated[brand]})`}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default LeftFilterField