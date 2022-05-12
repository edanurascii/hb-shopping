import React from 'react'

// Styles
import './style.scss'

// Components
import LeftFilterField from 'components/LeftFilterField/LeftFilterField'
import Product from 'components/Product/Product'
import Pagination from 'components/Pagination/Pagination'

function Content() {
    const products = JSON.parse(localStorage.getItem('products'))

    return (
        <div className='filter-field-and-displayed-products-container'>
            <LeftFilterField />
            {
                products && products.data && products.data.length > 0 &&
                <Pagination
                    data={products.data}
                    RenderComponent={Product}
                    pageLimit={3}
                    dataLimit={12}
                />
            }
        </div>
    )
}

export default Content