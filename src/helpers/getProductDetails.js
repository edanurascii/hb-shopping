// returns count of duplicate values in an array
const findRepeatingCounts = (array) => {
    const counts = {}

    array.forEach((arr) => {
        counts[arr] = (counts[arr] || 0) + 1
    })

    return counts
}

// returns all color options
const colorFilterOptions = (products) => {
    let colorArray = []

    products.map(product => colorArray.push(product.color))

    const countOfRepeating = findRepeatingCounts(colorArray)

    // generate unique array items with colorArray
    colorArray = [...new Set(colorArray)]

    return [colorArray, countOfRepeating]
}

// returns all order options
const orderFilterOptions = () => {
    let orderArray = [
        'En Düşük Fiyat',
        'En Yüksek Fiyat',
        'En Yeniler (A>Z)',
        'En Yeniler (Z>A)'
    ]

    return orderArray
}

// returns all brand options
const brandFilterOptions = (products) => {
    let brandArray = []

    products.map(product => brandArray.push(product.brand))

    const countOfRepeating = findRepeatingCounts(brandArray)

    // generate unique array items with brandArray
    brandArray = [...new Set(brandArray)]

    return [brandArray, countOfRepeating]
}

export const getProductDetails = {
    colorFilterOptions,
    orderFilterOptions,
    brandFilterOptions
}