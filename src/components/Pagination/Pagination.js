import { useState } from 'react'

// Styles
import './style.scss'

function Pagination({ data, RenderComponent, pageLimit, dataLimit }) {
    // Local States
    const [pages] = useState(Math.round(data.length / dataLimit))
    const [currentPage, setCurrentPage] = useState(1)

    const goToNextPage = () => {
        setCurrentPage((page) => page + 1)
        console.log(currentPage)
    }

    const goToPreviousPage = () => {
        setCurrentPage((page) => page <= 1 ? page : page - 1)
        console.log(currentPage)
    }

    const changePage = event => {
        const pageNumber = Number(event.target.textContent)
        setCurrentPage(pageNumber)
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit
        const endIndex = startIndex + dataLimit

        return data.slice(startIndex, endIndex)
    }

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit

        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1)
    }

    return (
        <div className='products-and-pagination-container'>
            <div className='products-wrapper'>
                {
                    getPaginatedData().map((product, idx) => (
                        <RenderComponent key={idx} data={product} />
                    ))
                }
            </div>
            <div className='pagination'>
                <button
                    onClick={goToPreviousPage}
                    className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                >
                    {'<'}
                </button>

                {
                    getPaginationGroup().map((item, index) => (
                        <button
                            key={index}
                            onClick={changePage}
                            className={`pagination-item ${currentPage === item ? 'active' : null}`}
                        >
                            <span>{item}</span>
                        </button>
                    ))
                }

                <button
                    onClick={goToNextPage}
                    className={`next ${currentPage === pages ? 'disabled' : ''}`}
                >
                    {'>'}
                </button>
            </div>
        </div>
    )
}

export default Pagination