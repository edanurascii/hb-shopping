// Styles
import './style.scss'

// Assets
import downIcon from 'assets/down-icon.svg'

// Components
import Dropdown from 'components/Dropdown/Dropdown'

function ContentHeader() {
    // dropdown options
    const options = [
        'En Düşük Fiyat',
        'En Yüksek Fiyat',
        'En Yeniler (A>Z)',
        'En Yeniler (Z>A)'
    ]

    const filteredWord = 'iPhone 11'

    const handleOnClick = (event, item) => {
        console.log('dropdown option clicked')
    }

    return (
        <div className='content-header'>
            <div className='filtered-content-wrapper'>
                <span className='content-title'>
                    iPhone iOS cep telefonu
                </span>
                <span className='filtered-product'>
                    <span className='searched-item-label'>
                        Aranan Kelime:
                    </span>
                    <span className='filtered-product-text'>
                        {`${filteredWord}`}
                    </span>
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