import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    basketItems: [],
    productsInBasket: null,
    isModalVisible: false,
    productToBeRemoved: null
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        getProductsInBasket: (state, action) => {
            let basketItemsInLocalStorage = Object.assign([], JSON.parse(localStorage.getItem('basketItem')))

            state.basketItems = basketItemsInLocalStorage
        },
        addToBasket: (state, action) => {
            let currentProduct = action.payload
            let _currentProduct = Object.assign({}, currentProduct)

            _currentProduct.addedDate = new Date().getTime()

            let prevBasketItems = Object.assign([], state.basketItems)
            let basketItemsInLocalStorage = Object.assign([], JSON.parse(localStorage.getItem('basketItem')))

            basketItemsInLocalStorage.push(_currentProduct)

            localStorage.setItem('basketItem', JSON.stringify(basketItemsInLocalStorage))

            state.basketItems = [...prevBasketItems, _currentProduct]
        },
        productCountInBasket: (state, action) => {
            let basketItemsInLocalStorage = Object.assign([], JSON.parse(localStorage.getItem('basketItem')))

            state.productsInBasket = basketItemsInLocalStorage.length
        },
        removeProduct: (state, action) => {
            let currentProduct = action.payload
            let basketItemsInLocalStorage = Object.assign([], JSON.parse(localStorage.getItem('basketItem')))

            const newArr = basketItemsInLocalStorage.filter(value => {
                return value.id !== currentProduct.id
            })

            localStorage.setItem('basketItem', JSON.stringify(newArr))

            state.basketItems = Object.assign([], JSON.parse(localStorage.getItem('basketItem')))
        },
        setModalVisible: (state, action) => {
            state.isModalVisible = action.payload
        },
        setProductToBeRemoved: (state, action) => {
            state.productToBeRemoved = action.payload
        }
    },
})

export const {
    setProducts,
    getProductsInBasket,
    addToBasket,
    productCountInBasket,
    removeProduct,
    setModalVisible,
    setProductToBeRemoved
} = productSlice.actions

export default productSlice.reducer