// Styles
import './style.scss'

// Redux
import { useSelector } from 'react-redux'

// Assets
import downIcon from 'assets/down-icon.svg'

// Components
import Dropdown from 'components/Dropdown/Dropdown'

function ContentHeader() {
    // Global State
    const filteredValue = useSelector((state) => state.filter.filteredValue)

    // dropdown options
    const options = [
        'En Düşük Fiyat',
        'En Yüksek Fiyat',
        'En Yeniler (A>Z)',
        'En Yeniler (Z>A)'
    ]

    const handleOnClick = (event, item) => {
        console.log('dropdown option clicked')
    }

    return (
        <div className='content-header'>
            <div className='filtered-content-wrapper'>
                <span className='content-title'>
                    {filteredValue}
                </span>
                <span className='filtered-product'>
                    {
                        filteredValue.length > 0 &&
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
            />
        </div>
    )
}

export default ContentHeader