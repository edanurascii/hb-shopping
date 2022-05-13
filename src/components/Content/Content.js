import { useEffect, useState } from 'react'

// Redux
import { useSelector } from 'react-redux'

// Styles
import './style.scss'

// Helpers
import { filterOrSortProducts } from 'helpers/filterOrSortProducts'

// Components
import LeftFilterField from 'components/LeftFilterField/LeftFilterField'
import Product from 'components/Product/Product'
import Pagination from 'components/Pagination/Pagination'

function Content() {
    // Global State
    const filteredValue = useSelector(state => state.filter.filteredValue)
    const filterCriteria = useSelector(state => state.filter.filterCriteria)
    const filterBy = useSelector(state => state.filter.filterBy)

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

    useEffect(() => {
        if (filterCriteria && filterBy) {
            let filterResult = filterOrSortProducts(filterCriteria, filterBy, products.data)

            setFilteredProducts(filterResult)
        }
        // eslint-disable-next-line
    }, [filterCriteria, filterBy])

    return (
        <div className='filter-field-and-displayed-products-container'>
            <LeftFilterField />
            {
                filteredProducts.length > 0 ?
                    <Pagination
                        data={filteredProducts}
                        RenderComponent={Product}
                        pageLimit={
                            filteredProducts.length <= 12
                                ? 1
                                : (Math.ceil(filteredProducts.length / 12))
                        }
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