import { useState, useEffect } from 'react'

// Redux
import { useDispatch } from 'react-redux'
import {
    setFilteredCriteria,
    setFilterBy
} from '../Filter/filterSlice'


// Styles
import './style.scss'

// Redux
import { useSelector } from 'react-redux'

// Assets
import downIcon from 'assets/down-icon.svg'

// Components
import Dropdown from 'components/Dropdown/Dropdown'

function ContentHeader() {
    // Local State
    const [selectedItem, setSelectedItem] = useState()

    // Global State
    const filteredValue = useSelector((state) => state.filter.filteredValue)
    const filterCriteria = useSelector((state) => state.filter.filterCriteria)
    const filterBy = useSelector((state) => state.filter.filterBy)

    const dispatch = useDispatch()

    // dropdown options
    const options = [
        'En Düşük Fiyat',
        'En Yüksek Fiyat',
        'En Yeniler (A>Z)',
        'En Yeniler (Z>A)'
    ]

    useEffect(() => {
        if (filterBy === 'order') {
            setSelectedItem(filterCriteria)
        }
    }, [filterCriteria, filterBy])

    const handleOnClick = (event, item) => {
        setSelectedItem(item)
        dispatch(setFilteredCriteria(item))
        dispatch(setFilterBy('order'))
    }

    return (
        <div className='content-header'>
            <div className='filtered-content-wrapper'>
                <span className='content-title'>
                    {filteredValue}
                </span>
                <span className='filtered-product'>
                    {
                        filteredValue.length > 2 &&
                        <>
                            <span className='searched-item-label'>
                                Aranan Kelime:
                            </span>
                            <span className='filtered-product-text'>
                                {filteredValue}
                            </span>
                        </>
                    }
                </span>
            </div>
            <Dropdown
                id='order-by-dropdown'
                title='Sıralama'
                dropdownItems={options}
                onClickItem={handleOnClick}
                dropdownIcon={downIcon}
                selectedItem={selectedItem}
            />
        </div>
    )
}

export default ContentHeader