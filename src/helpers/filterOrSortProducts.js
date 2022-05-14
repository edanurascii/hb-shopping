// gets filterCriteria, filterBy and products
// and returns products that applied required filter
export const filterOrSortProducts = (filterCriteria, filterBy, products) => {
    let filterResult = []
    let _products = Object.assign([], products)

    if (filterBy === 'color') {
        filterResult = products.filter(product => {
            return product.color.includes(filterCriteria)
        })
    } else if (filterBy === 'brand') {
        filterResult = products.filter(product => {
            return product.brand.includes(filterCriteria)
        })
    } else if (filterBy === 'order' && filterCriteria === 'En Düşük Fiyat') {
        filterResult = _products.sort((productA, productB) => {
            let firstProductPrice = Number(productA.afterDiscountPrice)
            let secondProductPrice = Number(productB.afterDiscountPrice)

            if (firstProductPrice < secondProductPrice) {
                return -1
            }
            if (firstProductPrice > secondProductPrice) {
                return 1
            }
            return 0
        })
    } else if (filterBy === 'order' && filterCriteria === 'En Yüksek Fiyat') {
        filterResult = _products.sort((productA, productB) => {
            let firstProductPrice = Number(productA.afterDiscountPrice)
            let secondProductPrice = Number(productB.afterDiscountPrice)

            if (firstProductPrice < secondProductPrice) {
                return 1
            }
            if (firstProductPrice > secondProductPrice) {
                return -1
            }
            return 0
        })
    } else if (filterBy === 'order' && filterCriteria === 'En Yeniler (A>Z)') {
        filterResult = _products.sort((productA, productB) => {
            if (productA.createdDate < productB.createdDate) {
                return -1
            }
            if (productA.createdDate > productB.createdDate) {
                return 1
            }
            return 0
        })
    }
    else if (filterBy === 'order' && filterCriteria === 'En Yeniler (Z>A)') {
        filterResult = _products.sort((productA, productB) => {
            if (productA.createdDate < productB.createdDate) {
                return 1
            }
            if (productA.createdDate > productB.createdDate) {
                return -1
            }
            return 0
        })
    }

    return filterResult
}