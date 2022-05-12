import { useEffect } from 'react'

// Styles
import './App.scss'

// Redux
import { useDispatch } from 'react-redux'
import { setProducts } from './components/Product/productSlice'

// Components
import Header from './components/Header/Header'

// Components
import ContentHeader from 'components/ContentHeader/ContentHeader'
import Content from 'components/Content/Content'

function App() {
    const dispatch = useDispatch()
    const productData = JSON.parse(localStorage.getItem('products'))

    useEffect(() => {
        dispatch(setProducts(productData.data))
        // eslint-disable-next-line
    }, [])


    return (
        <div className="App">
            <Header />
            <div className='content-container'>
                <ContentHeader />
                <Content />
            </div>
        </div>
    )
}

export default App
