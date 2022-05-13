// Styles
import './style.scss'

function Modal({
    title,
    children,
    handleYesClicked,
    handleNoClicked
}) {
    return (
        <>
            <div className='overlay'></div>
            <div className='modal'>
                <header className='modal-title'>
                    <span>{title}</span>
                </header>
                <main className='modal-content'>
                    <p>{children}</p>
                </main>
                <div className='modal-footer'>
                    <div
                        className='yes-button'
                        onClick={handleYesClicked}
                    >
                        <span className='button-label'>EVET</span>
                    </div>
                    <div
                        className='no-button'
                        onClick={handleNoClicked}
                    >
                        <span className='button-label'>HAYIR</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal