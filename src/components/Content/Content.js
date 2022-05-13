import { useEffect, useState } from 'react'

// Redux
import { useSelector } from 'react-redux'

// Styles
import './style.scss'

// Components
import LeftFilterField from 'components/LeftFilterField/LeftFilterField'
import Product from 'components/Product/Product'
import Pagination from 'components/Pagination/Pagination'

function Content() {
    // Global State
    const filteredValue = useSelector(state => state.filter.filteredValue)

    // Local State
    const [filteredProducts, setFilteredProducts] = useState([])

    const products = JSON.parse(localStorage.getItem('products'))

    useEffect(() => {
        let filterResult = []

        if (filteredValue?.length > 2) {
            filterResult = products.data.filter(product => {
                let productTitle = product.title.toLowerCase()
                return productTitle.includes(filteredValue.toLowerCase())
            })

            setFilteredProducts(filterResult)
        } else {
            setFilteredProducts([])
        }
        // eslint-disable-next-line
    }, [filteredValue])

    return (
        <div className='filter-field-and-displayed-products-container'>
            <LeftFilterField />
            {
                filteredProducts.length > 0 ?
                    <Pagination
                        data={filteredProducts}
                        RenderComponent={Product}
                        pageLimit={3}
                        dataLimit={12}
                    />
                    :
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