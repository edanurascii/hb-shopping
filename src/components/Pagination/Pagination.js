// Redux
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentPage } from 'components/Pagination/paginationSlice'

// Styles
import './style.scss'

function Pagination({ data, RenderComponent, pageLimit, dataLimit }) {
    // Global States
    const currentPage = useSelector(state => state.pagination.currentPage)

    const dispatch = useDispatch()

    const goToNextPage = () => {
        dispatch(setCurrentPage(currentPage + 1))
    }

    const goToPreviousPage = () => {
        if (currentPage <= 1) {
            dispatch(setCurrentPage(currentPage))
        } else {
            dispatch(setCurrentPage(currentPage - 1))
        }
    }

    const changePage = event => {
        const pageNumber = Number(event.target.textContent)
        dispatch(setCurrentPage(pageNumber))
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit
        const endIndex = startIndex + dataLimit
        let dataArray = []

        Object.entries(data).map(([key, value]) => dataArray.push(value))

        return dataArray.slice(startIndex, endIndex)
    }

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit

        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1)
    }

    return (
        <div className='products-and-pagination-container'>
            <div className='products-wrapper'>
                {
                    getPaginatedData().map((product, index) => {
                        return (
                            <RenderComponent
                                key={index}
                                data={product}
                            />
                        )
                    })
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
                        currentPage !== item ?
                            <a key={index} id='scroll-to-top' href='#root'>
                                <button
                                    onClick={changePage}
                                    className='pagination-item'
                                >
                                    <span>{item}</span>
                                </button>
                            </a>
                            :
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
                    className={`next ${currentPage === pageLimit ? 'disabled' : ''}`}
                >
                    {'>'}
                </button>
            </div>
        </div>
    )
}

export default Pagination