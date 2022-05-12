import { useState, useRef, useEffect } from 'react'

// Styles
import './style.scss'

function Dropdown({
    id,
    title,
    dropdownItems,
    onClickItem,
    dropdownIcon,
    selectedItem
}) {
    // Local State
    const [visible, setVisible] = useState(false)

    // Refs
    const wrapperRef = useRef(null)

    // listen to outside click for closing the dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setVisible(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        };
    }, [wrapperRef])

    // toggle dropdown
    const handleClick = () => {
        setVisible(visible => !visible)
    }

    return (
        <div id={id} className='dropdown-button'>
            <div
                className='dropdown-title'
                onClick={handleClick}
                ref={wrapperRef}
            >
                <div className='title'>{title}</div>
                <div className='dropdown-icon'>
                    <img
                        src={dropdownIcon}
                        alt='dropdown-angle-down'
                    />
                </div>
            </div>
            <div
                className='dropdown-menu'
                style={{
                    visibility: visible ? 'visible' : 'hidden',
                    opacity: visible ? 1 : 0
                }}
            >
                <ul className='dropdown-box'>
                    {
                        dropdownItems && dropdownItems.map((item, index) => (
                            <li
                                key={index}
                                className={selectedItem === item ? 'dropdown-selected-item' :'dropdown-item'}
                                onClick={(e) => onClickItem(e, item)}
                            >
                                <div className='dropdown-link'>
                                    {item}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Dropdown