// Redux
import { useSelector, useDispatch } from 'react-redux'
import { filter } from './filterSlice'

// Styles
import './style.scss'

// Assets
import searchIcon from 'assets/search-icon.svg'

function Filter() {
    // Global State
    const filteredValue = useSelector((state) => state.filter.filteredValue)

    const dispatch = useDispatch()

    const handleFilterValueOnChange = event => {
        dispatch(filter(event.target.value))
    }

    return (
        <div className='filter-input-wrapper'>
            <img
                src={searchIcon}
                alt='search-icon'
                className='search-icon'
            />
            <input
                id='filter-input-field'
                className='filter-input-field'
                type="text"
                value={filteredValue}
                placeholder='25 milyon’dan fazla ürün içerisinde ara'
                onChange={e => handleFilterValueOnChange(e)}
            />
        </div>
    )
}

export default Filter