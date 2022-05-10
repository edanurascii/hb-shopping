import React, { useState } from 'react'

// Styles
import './style.scss'

// Assets
import searchIcon from 'assets/search-icon.svg'

function Filter() {
    // Local States
    const [filterValue, setFilterValue] = useState('')

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
                value={filterValue}
                placeholder='25 milyon’dan fazla ürün içerisinde ara'
                onChange={e => setFilterValue(e.target.value)}
            />
        </div>
    )
}

export default Filter