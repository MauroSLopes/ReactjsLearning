import styles from "./Modal.module.css";

function Modal({ children, onVisible}) {
    // A children prop component applier
    return <>
        <div className={styles.backdrop} onClick={onVisible}/>
        <dialog open className={styles.modal}>
            {children}
        </dialog>
    </>
};

export default Modal;