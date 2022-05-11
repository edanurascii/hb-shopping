import { useEffect } from 'react'

// Styles
import './App.scss'

// Components
import Header from './components/Header/Header'

// Mock Data
import products from 'products/products'

// Components
import ContentHeader from 'components/ContentHeader/ContentHeader'
import LeftFilterField from 'components/LeftFilterField/LeftFilterField'
import Product from 'components/Product/Product'
import Pagination from 'components/Pagination/Pagination'

function App() {
    const productsInLocalStorage = JSON.parse(localStorage.getItem('products'))

    useEffect(() => {
        if (productsInLocalStorage?.data && productsInLocalStorage.data.length > 0) {
            return
        } else {
            // sets all products to local storage
            localStorage.setItem('products', JSON.stringify(products))
        }
    }, [productsInLocalStorage])


    return (
        <div className="App">
            <Header />
            <div className='content-container'>
                <ContentHeader />
                <div className='filter-field-and-displayed-products-container'>
                    <LeftFilterField />
                    <Pagination
                        data={productsInLocalStorage?.data}
                        RenderComponent={Product}
                        pageLimit={3}
                        dataLimit={12}
                    />
                </div>
            </div>
        </div>
    )
}

export default App
