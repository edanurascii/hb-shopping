import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import rootReducer from './src/redux/reducer'
import products from './src/products/products'

function render(
    ui,
    {
        preloadedState,
        store = configureStore({
            reducer: rootReducer,
            preloadedState: {
                product: {
                    products: products,
                    basketItems: [{
                        id: "3",
                        title: "iPhone 11 Kırmızı Kılıf",
                        brand: "Apple",
                        color: "Kırmızı",
                        price: "127,85 TL",
                        afterDiscountPrice: "124.10",
                        discount: "12%",
                        createdDate: "2020-11-11T07:42:03.719Z",
                        img: "/static/media/iphone-case-red.62cb3b32bb04bbf14fd5.png",
                        addedDate: 1652519527661
                    }]
                },
                filter: {
                    filteredValue: '',
                    filterCriteria: 'Siyah',
                    filterBy: 'color'
                },
                pagination: {
                    currentPage: 1
                }
            }
        }),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }