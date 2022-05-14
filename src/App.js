import { useEffect } from 'react'

// Styles
import './App.scss'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import {
    setProducts,
    setModalVisible,
    removeProduct,
    productCountInBasket
} from './components/Product/productSlice'

// Components
import Header from './components/Header/Header'

// Mock data
import products from 'products/products'

// Components
import ContentHeader from 'components/ContentHeader/ContentHeader'
import Content from 'components/Content/Content'
import Modal from 'components/Modal/Modal'

function App() {
    // Global State
    const isModalVisible = useSelector(state => state.product.isModalVisible)
    const productToBeRemoved = useSelector(state => state.product.productToBeRemoved)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setProducts(products.data))
        // eslint-disable-next-line
    }, [])

    const handleNoClicked = (event) => {
        dispatch(setModalVisible(false))
    }

    const handleYesClicked = (event) => {
        dispatch(removeProduct(productToBeRemoved))
        dispatch(productCountInBasket())
        dispatch(setModalVisible(false))
    }

    return (
        <div className="App" data-testid='hepsiburada-app'>
            <Header />
            <div className='content-container'>
                <ContentHeader />
                <Content />
            </div>
            {
                isModalVisible && (
                    <Modal
                        title={'Ürünü silmek istediğinize emin misiniz?'}
                        children={
                            'Lorem Ipsum is simply dummy text of the printing and typesetting ' +
                            'industry. Lorem Ipsum has been the industrys ' +
                            'standard dummy text ever since the 1500s, when an unknown printer took a galley ' +
                            'of type and scrambled it to make a type specimen book. ' +
                            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiall....'
                        }
                        handleYesClicked={handleYesClicked}
                        handleNoClicked={handleNoClicked}
                    />
                )
            }
        </div>
    )
}

export default App
