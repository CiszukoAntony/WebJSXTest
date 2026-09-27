import styles from './Modal.module.scss'

const Modal = ({ text_label, text_btn_close, id, className, popover }) => {
    return (
        <main
        className={[styles['modal-container__main'], className].filter(Boolean).join(' ')}
        id={id ?? 'modal-container__main'}
        popover={popover ?? 'auto'}>

            <div
            className={styles['modal-container__label']}
            id="modal-container__label"
            draggable="false">

                <p
                className={styles['modal-label__text']}
                id="modal-label__text">

                    {text_label}
                </p>
            </div>

            <button
            type="button"
            className={styles['modal-container__btn-close']}
            id="modal-container__btn-close"
            draggable="false"
            popoverTarget={id ?? 'modal-container__main'}
            popoverTargetAction="hide">

                <p
                className={styles['modal-btn-close__text']}
                id="modal-btn-close__text">

                    {text_btn_close} ✖️
                </p>
            </button>
        </main>
    )
}

export default Modal